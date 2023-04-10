import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware() {
  const url = NextRequest.nexturl.clone();
  let isLogin = NextRequest.cookies.get("accessToken");

  if (!isLogin) {
    if (NextRequest.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.rewrite(new URL("/", NextRequest.url));
    } else {
      if (url.pathname === "/") {
        url.pathname = "/admin";
        return NextResponse.redirect(url);
      }
    }
  }
  // Return `NextResponse.next()` if the middleware does not modify the request/response
  return NextResponse.next();
  console.log(hi)
}
