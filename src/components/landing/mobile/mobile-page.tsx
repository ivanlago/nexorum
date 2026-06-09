import { MobileFixedCta } from "@/components/landing/mobile/sections/cta-fixed";
import { MobileSection01Carousel } from "@/components/landing/mobile/sections/section-01-carousel";
import { MobileSection01Hero } from "@/components/landing/mobile/sections/section-01-hero";
import { MobileSection01Image } from "@/components/landing/mobile/sections/section-01-image";
import { MobileSection02Operacoes } from "@/components/landing/mobile/sections/section-02-operacoes";
import { MobileSection03Problema } from "@/components/landing/mobile/sections/section-03-problema";
import { MobileSection04ComoAprende } from "@/components/landing/mobile/sections/section-04-como-aprende";
import { MobileSection05CamadaDecisoria } from "@/components/landing/mobile/sections/section-05-camada-decisoria";
import { MobileSection06Institucional } from "@/components/landing/mobile/sections/section-06-institucional";
import { MobileSection07Footer } from "@/components/landing/mobile/sections/section-07-footer";
import { LandingBenefitsMarquee } from "@/components/landing/landing-benefits-marquee";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import type { SupportedLocale } from "@/i18n/locales";

export function LandingMobilePage({ dict, locale }: { dict: LandingDictionary; locale: SupportedLocale }) {
  const benefits = [
    "Prazo recuperável",
    "Margem protegida",
    "Evidência rastreável",
    "Decisão antecipada",
    "Dados integrados",
    "Ação por responsável",
    "Governança auditável",
  ] as const;

  return (
    <div className="relative w-full">
      <MobileSection01Hero dict={dict} locale={locale} />
      <MobileSection01Image dict={dict} />
      <MobileSection01Carousel dict={dict} />
      <MobileSection02Operacoes dict={dict} />
      <MobileSection03Problema dict={dict} />
      <LandingBenefitsMarquee className="mb-16 mt-11" labels={benefits} />
      <MobileSection04ComoAprende dict={dict} />
      <LandingBenefitsMarquee className="mb-16 mt-11" labels={benefits} />
      <MobileSection05CamadaDecisoria dict={dict} />
      <MobileSection06Institucional dict={dict} />
      <MobileSection07Footer dict={dict} locale={locale} />
      <div className="h-24" />
      <MobileFixedCta dict={dict} />
    </div>
  );
}
