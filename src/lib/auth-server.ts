import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifySession, SessionData, getCurrentUser } from './session';
import { NextRequest } from 'next/server';

export async function getServerSession(): Promise<SessionData | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('auth-session');
  
  if (!sessionCookie) {
    return null;
  }

  return await verifySession(sessionCookie.value);
}

export async function requireServerAuth(): Promise<SessionData> {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/api/auth/login');
  }

  // Check if session is expired
  if (session.expiresAt < Date.now()) {
    redirect('/api/auth/login');
  }

  return session;
}

export async function getServerUser() {
  const session = await getServerSession();
  return session?.user || null;
}

export async function requireAdminAuth(): Promise<SessionData> {
  const session = await requireServerAuth();
  
  const adminEmails = process.env.ADMIN_EMAILS;
  if (!adminEmails) {
    throw new Error('ADMIN_EMAILS not configured');
  }

  const allowedEmails = adminEmails
    .split(',')
    .map(email => email.trim().toLowerCase());

  if (!allowedEmails.includes(session.user.email.toLowerCase())) {
    redirect('/unauthorized');
  }

  return session;
}

// Helper for API routes
export async function withAuth(
  handler: (request: NextRequest, session: SessionData) => Promise<Response>,
  requireAdmin = false
) {
  return async (request: NextRequest) => {
    try {
      const session = await getServerSession();
      
      if (!session) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Check if session is expired
      if (session.expiresAt < Date.now()) {
        return new Response(JSON.stringify({ error: 'Session expired' }), { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      if (requireAdmin) {
        const adminEmails = process.env.ADMIN_EMAILS;
        if (!adminEmails) {
          return new Response(JSON.stringify({ error: 'Server configuration error' }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        const allowedEmails = adminEmails
          .split(',')
          .map(email => email.trim().toLowerCase());

        if (!allowedEmails.includes(session.user.email.toLowerCase())) {
          return new Response(JSON.stringify({ error: 'Forbidden' }), { 
            status: 403,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }

      return await handler(request, session);
    } catch (error) {
      console.error('Auth wrapper error:', error);
      return new Response(JSON.stringify({ error: 'Internal server error' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  };
}
