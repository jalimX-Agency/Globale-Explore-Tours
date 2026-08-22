import { NextRequest, NextResponse } from "next/server";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/i18n/locales";

function detectLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage.split(",")[0]?.split("-")[0]?.toLowerCase();
  return (LOCALES as readonly string[]).includes(preferred ?? "") ? preferred! : DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The matcher below is meant to already exclude these, but Next.js 16.3's Turbopack
  // production build has been observed to leave the proxy matcher unregistered on Vercel
  // (empty middleware-manifest.json despite a compiled bundle), which makes Vercel fall
  // back to invoking this function on every request. Checking again here means admin/api/
  // asset routes stay untouched even if the matcher itself never gets applied.
  if (pathname.startsWith("/admin") || pathname.startsWith("/api") || pathname.startsWith("/_next") || /\.[^/]+$/.test(pathname)) {
    return NextResponse.next();
  }

  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip admin, api, and static/asset files — only the public multilingual site gets a locale prefix.
  matcher: ["/((?!admin|api|_next|.*\\..*).*)"],
};
