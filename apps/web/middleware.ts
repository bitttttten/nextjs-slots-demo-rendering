import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();

  if (Math.random() > 0.5) {
    response.headers.set("x-cf-logged-in", "true");
  }

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
