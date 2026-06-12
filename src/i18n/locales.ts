export const supportedLocales = ["pt-BR", "en-US"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

export const defaultLocale: SupportedLocale = "en-US";

export function isSupportedLocale(value: string): value is SupportedLocale {
  return (supportedLocales as readonly string[]).includes(value);
}

export function getLocalePath(locale: SupportedLocale, pathname = "/") {
  const normalizedPath = pathname === "/" ? "" : pathname;
  return locale === defaultLocale ? normalizedPath || "/" : `/${locale}${normalizedPath}`;
}
