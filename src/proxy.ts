import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, supportedLocales } from "@/i18n/locales";

function handleProxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const nextUrl = request.nextUrl.clone();
    nextUrl.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(new URL(nextUrl.toString()));
  }

  const pathnameHasLocale = supportedLocales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return NextResponse.next();

  const nextUrl = request.nextUrl.clone();
  nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(new URL(nextUrl.toString()));
}

export default handleProxy;
export const proxy = handleProxy;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
