import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, tokenFor } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const entered = String(form.get("password") ?? "");
  const real = process.env.SITE_PASSWORD;

  // If SITE_PASSWORD isn't set, nobody can log in (safer than a default).
  if (!real || entered !== real) {
    return NextResponse.redirect(new URL("/?error=1", req.url), 303);
  }

  const res = NextResponse.redirect(new URL("/overview", req.url), 303);
  res.cookies.set(AUTH_COOKIE, await tokenFor(real), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // stay logged in for 7 days
  });
  return res;
}
