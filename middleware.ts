import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestedPath = request.nextUrl.pathname;
  const token = request.cookies.get("token");

  if (requestedPath == "/admin" && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/admin",
};
