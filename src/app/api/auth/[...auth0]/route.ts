import { NextRequest, NextResponse } from "next/server";
import {
  setSessionCookie,
  clearSessionCookie,
  getSession,
  refreshTokenIfNeeded,
} from "@/lib/session";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const authAction = pathname.split("/").pop();

  switch (authAction) {
    case "login":
      const loginUrl = `${process.env.AUTH0_ISSUER_BASE_URL}/authorize?response_type=code&client_id=${process.env.AUTH0_CLIENT_ID}&redirect_uri=${process.env.AUTH0_BASE_URL}/api/auth/callback&scope=openid profile email`;
      return NextResponse.redirect(loginUrl);

    case "logout":
      const logoutUrl = `${process.env.AUTH0_ISSUER_BASE_URL}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=${process.env.AUTH0_BASE_URL}`;
      const response = NextResponse.redirect(logoutUrl);
      clearSessionCookie(response);
      return response;

    case "callback":
      const code = url.searchParams.get("code");
      if (!code) {
        return NextResponse.redirect(
          `${process.env.AUTH0_BASE_URL}?error=no_code`
        );
      }

      try {
        const tokenResponse = await fetch(
          `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              grant_type: "authorization_code",
              client_id: process.env.AUTH0_CLIENT_ID,
              client_secret: process.env.AUTH0_CLIENT_SECRET,
              code,
              redirect_uri: `${process.env.AUTH0_BASE_URL}/api/auth/callback`,
            }),
          }
        );

        if (!tokenResponse.ok) {
          throw new Error("Token exchange failed");
        }

        const tokens = await tokenResponse.json();

        const userResponse = await fetch(
          `${process.env.AUTH0_ISSUER_BASE_URL}/userinfo`,
          {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`,
            },
          }
        );

        if (!userResponse.ok) {
          throw new Error("User info fetch failed");
        }

        const user = await userResponse.json();

        // Create secure session
        const sessionData = {
          user: {
            sub: user.sub,
            email: user.email,
            name: user.name,
            picture: user.picture,
          },
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token,
          expiresAt: Date.now() + tokens.expires_in * 1000,
        };

        const response = NextResponse.redirect(
          `${process.env.AUTH0_BASE_URL}/admin`
        );
        await setSessionCookie(response, sessionData);

        return response;
      } catch (error) {
        console.error("Auth callback error:", error);
        return NextResponse.redirect(
          `${process.env.AUTH0_BASE_URL}?error=callback_failed`
        );
      }

    case "me":
      try {
        let session = await getSession(request);

        if (!session) {
          return NextResponse.json(
            { error: "Not authenticated" },
            { status: 401 }
          );
        }

        // Check if session is expired
        if (session.expiresAt < Date.now()) {
          return NextResponse.json(
            { error: "Session expired" },
            { status: 401 }
          );
        }

        // Try to refresh token if needed
        const refreshedSession = await refreshTokenIfNeeded(session);
        if (refreshedSession && refreshedSession !== session) {
          // Update session if refreshed
          const response = NextResponse.json(refreshedSession.user);
          await setSessionCookie(response, refreshedSession);
          return response;
        }

        return NextResponse.json(session.user);
      } catch (error) {
        console.error("Session verification error:", error);
        return NextResponse.json({ error: "Invalid session" }, { status: 401 });
      }

    default:
      return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}

export async function POST(request: NextRequest) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const authAction = pathname.split("/").pop();

  switch (authAction) {
    case "logout":
      // Clear session on server side
      const response = NextResponse.json({ success: true });
      clearSessionCookie(response);
      return response;

    default:
      return NextResponse.json(
        { error: "Method not allowed" },
        { status: 405 }
      );
  }
}
