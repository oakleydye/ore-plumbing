import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { getSession, type SessionData } from "@/lib/session";

/**
 * Auth guard for /api/admin/* route handlers.
 *
 * The `middleware.ts` matcher only covers `/admin/:path*` (the admin UI pages),
 * so API routes are not protected by it and must call this themselves. Unlike
 * the middleware, this returns a 401 rather than redirecting to the login page —
 * an API client cannot follow an HTML redirect.
 */

export type AdminIdentity =
  | { kind: "session"; email: string }
  | { kind: "service"; name: string };

function unauthorized(message = "Unauthorized") {
  return NextResponse.json({ error: message }, { status: 401 });
}

function allowedAdminEmails(): string[] | null {
  const configured = process.env.ADMIN_EMAILS;
  if (!configured) return null;
  return configured
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

/** Constant-time string compare; false on any length mismatch. */
function secretsMatch(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

function bearerToken(request: NextRequest): string | null {
  const header = request.headers.get("authorization");
  if (!header) return null;
  const [scheme, ...rest] = header.split(" ");
  if (scheme.toLowerCase() !== "bearer") return null;
  const token = rest.join(" ").trim();
  return token.length > 0 ? token : null;
}

interface RequireAdminOptions {
  /**
   * Allow a machine caller presenting `Authorization: Bearer <AGENT_SERVICE_TOKEN>`.
   * Opt-in per route — only routes the SEO agent needs should set this.
   */
  allowServiceToken?: boolean;
}

/**
 * Returns the caller's identity, or a 401 NextResponse to return directly.
 *
 *   const auth = await requireAdmin(request);
 *   if (auth instanceof NextResponse) return auth;
 */
export async function requireAdmin(
  request: NextRequest,
  options: RequireAdminOptions = {}
): Promise<AdminIdentity | NextResponse> {
  if (options.allowServiceToken) {
    const presented = bearerToken(request);
    if (presented) {
      const expected = process.env.AGENT_SERVICE_TOKEN;
      if (!expected || expected.length < 32) {
        console.error(
          "AGENT_SERVICE_TOKEN is unset or too short; rejecting service-token auth"
        );
        return unauthorized();
      }
      if (!secretsMatch(presented, expected)) {
        console.warn("Rejected service token on", request.nextUrl.pathname);
        return unauthorized();
      }
      return { kind: "service", name: "seo-agent" };
    }
  }

  const session = await getSession(request);
  if (!session) return unauthorized();

  if (session.expiresAt < Date.now()) return unauthorized("Session expired");

  const allowed = allowedAdminEmails();
  if (!allowed) {
    // Fail closed: a missing allowlist must not mean "everyone is an admin".
    console.error("ADMIN_EMAILS not configured; denying admin API access");
    return unauthorized();
  }

  const email = session.user?.email?.toLowerCase();
  if (!email || !allowed.includes(email)) {
    console.warn(
      "Unauthorized admin API access attempt by:",
      email ?? "<no email>",
      request.nextUrl.pathname
    );
    return unauthorized();
  }

  return { kind: "session", email };
}
