import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supportedLocales } from "@/i18n/locales";

function pickLocaleFromAcceptLanguage(headerValue: string | null) {
  if (!headerValue) return "en-US";
  const lower = headerValue.toLowerCase();
  if (lower.includes("pt")) return "pt-BR";
  return "en-US";
}

function handleProxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = supportedLocales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return NextResponse.next();

  const locale = pickLocaleFromAcceptLanguage(request.headers.get("accept-language"));
  const nextUrl = request.nextUrl.clone();
  nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(new URL(nextUrl.toString()));
}

export default handleProxy;
export const proxy = handleProxy;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
