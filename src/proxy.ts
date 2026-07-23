import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ==========================================
  // Allow All API Routes
  // ==========================================

  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // ==========================================
  // Maintenance Time (12 AM - 6 AM)
  // ==========================================

  const currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour < 6) {
    return NextResponse.redirect(
      new URL("/maintenance", request.url)
    );
  }

  // ==========================================
  // Food Details Redirect
  // ==========================================

  if (pathname.startsWith("/food-details")) {
    const id = pathname.split("/").pop();

    return NextResponse.redirect(
      new URL(`/foods/${id}`, request.url)
    );
  }

  // ==========================================
  // Continue Request
  // ==========================================

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/:path*",
    "/food-details/:path*",
    "/((?!_next|favicon.ico).*)", // সব page-এর জন্য
  ],
};