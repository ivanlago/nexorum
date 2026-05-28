import "server-only";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { isSupportedLocale, type SupportedLocale } from "@/i18n/locales";

const dictionaries: Record<SupportedLocale, () => Promise<LandingDictionary>> = {
  "pt-BR": () => import("./dictionaries/pt-BR.json").then((m) => m.default as LandingDictionary),
  "en-US": () => import("./dictionaries/en-US.json").then((m) => m.default as LandingDictionary),
};

export function hasLocale(locale: string): locale is SupportedLocale {
  return isSupportedLocale(locale);
}

export async function getDictionary(locale: SupportedLocale): Promise<LandingDictionary> {
  return dictionaries[locale]();
}
