import { NextRequest, NextResponse } from "next/server";
import { getSession, clearSessionCookie } from "@/lib/session";

export async function middleware(request: NextRequest) {
  try {
    const session = await getSession(request);

    if (!session) {
      const loginUrl = new URL("/api/auth/login", request.url);
      loginUrl.searchParams.set("returnTo", request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Check if session is expired
    if (session.expiresAt < Date.now()) {
      const loginUrl = new URL("/api/auth/login", request.url);
      loginUrl.searchParams.set("returnTo", request.url);
      const response = NextResponse.redirect(loginUrl);
      clearSessionCookie(response);
      return response;
    }

    // Check admin permissions
    const adminEmails = process.env.ADMIN_EMAILS;
    if (!adminEmails) {
      console.error("ADMIN_EMAILS not configured");
      return NextResponse.redirect(
        new URL("/unauthorized?error=config_error", request.url)
      );
    }

    const allowedEmails = adminEmails
      .split(",")
      .map((email) => email.trim().toLowerCase());

    if (!allowedEmails.includes(session.user.email.toLowerCase())) {
      console.log(
        `Unauthorized admin access attempt by: ${session.user.email}`
      );
      return NextResponse.redirect(
        new URL("/unauthorized?error=unauthorized", request.url)
      );
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    const loginUrl = new URL("/api/auth/login", request.url);
    loginUrl.searchParams.set("returnTo", request.url);
    const response = NextResponse.redirect(loginUrl);
    clearSessionCookie(response);
    return response;
  }
}

export const config = {
  matcher: "/admin/:path*",
};
