import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Simple middleware without NextAuth for edge compatibility
  const token = req.cookies.get("authjs.session-token") || req.cookies.get("__Secure-authjs.session-token");
  const { pathname } = req.nextUrl;

  // Protect admin routes
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  // Protect profile routes
  if (pathname.startsWith("/profile")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/profile/:path*"],
};
