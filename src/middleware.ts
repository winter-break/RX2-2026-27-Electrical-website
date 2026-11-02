import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, tokenFor } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const real = process.env.SITE_PASSWORD;
  const cookie = req.cookies.get(AUTH_COOKIE)?.value;

  if (real && cookie === (await tokenFor(real))) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", req.url));
}

// Protect every page except the password page, the login route, and static files.
export const config = {
  matcher: [
    "/((?!$|api/login|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|ico|css|js|woff2?)$).*)",
  ],
};
