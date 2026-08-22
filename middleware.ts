import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Protects every /admin page except the login page itself. API routes under /api/admin
// stay protected separately via requireAdmin() (they need to return JSON 401s, not redirects).
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/admin/login") return NextResponse.next();

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
