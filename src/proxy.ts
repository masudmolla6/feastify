import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ==========================================
  // Maintenance Time (12 AM - 6 AM)
  // ==========================================

  // const currentHour = new Date().getHours();

  // if (currentHour >= 0 && currentHour < 6) {
  //   return NextResponse.redirect(
  //     new URL("/maintenance", request.url)
  //   );
  // }

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
  // Feedback API Only
  // ==========================================

  // if (pathname.startsWith("/api")) {
  //   if (!pathname.startsWith("/api/feedback")) {
  //     return NextResponse.json(
  //       {
  //         message: "API Not Found",
  //       },
  //       {
  //         status: 404,
  //       }
  //     );
  //   }
  // }

  // ==========================================
  // Continue Request
  // ==========================================

  return NextResponse.next();
}

export const config = {
  matcher: [
    // "/api/:path*",
    "/food-details/:path*",
  ],
};