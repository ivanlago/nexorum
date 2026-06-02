import { notFound } from "next/navigation";
import { LandingBenefitsMarquee } from "@/components/landing/landing-benefits-marquee";
import { LandingMobilePage } from "@/components/landing/mobile/mobile-page";
import { LandingSection01Features } from "@/components/landing/sections/section-01-features";
import { LandingSection01Hero } from "@/components/landing/sections/section-01-hero";
import { LandingSection02Operacoes } from "@/components/landing/sections/section-02-operacoes";
import { LandingSection03Problema } from "@/components/landing/sections/section-03-problema";
import { LandingSection04ComoAprende } from "@/components/landing/sections/section-04-como-aprende";
import { LandingSection05CamadaDecisoria } from "@/components/landing/sections/section-05-camada-decisoria";
import { LandingSection06Institucional } from "@/components/landing/sections/section-06-institucional";
import { LandingSection07Footer } from "@/components/landing/sections/section-07-footer";
import { defaultLocale, isSupportedLocale, type SupportedLocale } from "@/i18n/locales";
import { getDictionary, hasLocale } from "./dictionaries";

const benefits = [
  "Prazo recuperável",
  "Margem protegida",
  "Evidência rastreável",
  "Decisão antecipada",
  "Dados integrados",
  "Ação por responsável",
  "Governança auditável",
] as const;

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const locale = (isSupportedLocale(lang) ? lang : defaultLocale) satisfies SupportedLocale;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="lg:hidden">
        <LandingMobilePage dict={dict} locale={locale} />
      </div>
      <div className="hidden lg:block">
        <LandingSection01Hero dict={dict} locale={locale} />
        <LandingSection01Features dict={dict} />
        <LandingSection02Operacoes dict={dict} />
        <LandingSection03Problema dict={dict} />
        <LandingSection04ComoAprende dict={dict} />
        <LandingBenefitsMarquee className="mt-[52px]" labels={benefits} />
        <LandingSection05CamadaDecisoria dict={dict} />
        <LandingSection06Institucional dict={dict} />
        <LandingSection07Footer dict={dict} locale={locale} />
      </div>
    </main>
  );
}
