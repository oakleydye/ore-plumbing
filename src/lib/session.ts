import { NextRequest, NextResponse } from 'next/server';
import { SignJWT, jwtVerify } from 'jose';

export interface SessionData {
  user: {
    sub: string;
    email: string;
    name: string;
    picture?: string;
  };
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
}

export interface User {
  sub: string;
  email: string;
  name: string;
  picture?: string;
}

const SECRET_KEY = new TextEncoder().encode(
  process.env.SESSION_SECRET || 'default-secret-key-change-in-production'
);

const COOKIE_NAME = 'auth-session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export async function createSession(sessionData: SessionData): Promise<string> {
  const payload = {
    ...sessionData,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor((Date.now() + SESSION_DURATION) / 1000),
  };

  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .sign(SECRET_KEY);
}

export async function verifySession(token: string): Promise<SessionData | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return payload as unknown as SessionData;
  } catch (error) {
    console.error('Session verification failed:', error);
    return null;
  }
}

export async function getSession(request: NextRequest): Promise<SessionData | null> {
  const sessionCookie = request.cookies.get(COOKIE_NAME);
  
  if (!sessionCookie) {
    return null;
  }

  return await verifySession(sessionCookie.value);
}

export async function setSessionCookie(response: NextResponse, sessionData: SessionData): Promise<void> {
  const sessionToken = await createSession(sessionData);
  
  response.cookies.set(COOKIE_NAME, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_DURATION / 1000,
    path: '/',
  });
}

export function clearSessionCookie(response: NextResponse): void {
  response.cookies.delete(COOKIE_NAME);
}

export async function requireAuth(request: NextRequest): Promise<SessionData | NextResponse> {
  const session = await getSession(request);
  
  if (!session) {
    return NextResponse.redirect(new URL('/api/auth/login', request.url));
  }

  // Check if session is expired
  if (session.expiresAt < Date.now()) {
    const response = NextResponse.redirect(new URL('/api/auth/login', request.url));
    clearSessionCookie(response);
    return response;
  }

  return session;
}

export async function getCurrentUser(request: NextRequest): Promise<User | null> {
  const session = await getSession(request);
  return session?.user || null;
}

export async function refreshTokenIfNeeded(session: SessionData): Promise<SessionData | null> {
  // Check if token expires within the next hour
  const oneHour = 60 * 60 * 1000;
  if (session.expiresAt - Date.now() < oneHour && session.refreshToken) {
    try {
      const tokenResponse = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'refresh_token',
          client_id: process.env.AUTH0_CLIENT_ID,
          client_secret: process.env.AUTH0_CLIENT_SECRET,
          refresh_token: session.refreshToken,
        }),
      });

      if (tokenResponse.ok) {
        const tokens = await tokenResponse.json();
        return {
          ...session,
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token || session.refreshToken,
          expiresAt: Date.now() + (tokens.expires_in * 1000),
        };
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
    }
  }
  
  return session;
}
