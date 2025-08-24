import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // For now, allow all admin access - you can add Auth0 protection later
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*'
};
