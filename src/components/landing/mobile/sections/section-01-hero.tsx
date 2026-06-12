import { LanguageSelector } from "@/components/landing/language-selector";
import { HeroMenu } from "@/components/landing/hero-menu";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { getLocalePath, type SupportedLocale } from "@/i18n/locales";
import { Suspense } from "react";

const imgMenu = "/menu.png";
const dividerClassName =
  "h-px w-full opacity-60 bg-[linear-gradient(90deg,rgba(118,131,143,0)_0%,rgba(118,131,143,0.28)_8%,rgba(118,131,143,0.28)_92%,rgba(118,131,143,0)_100%)]";

export function MobileSection01Hero({ dict, locale }: { dict: LandingDictionary; locale: SupportedLocale }) {
  const headlineLines = [
    "Antecipe impactos, proteja margem e",
    "governe decisões com inteligência artificial",
  ];

  return (
    <section className="relative overflow-hidden px-6 pt-0">
      <div>
        <div aria-hidden className={dividerClassName} />
        <div className="flex h-[72px] items-center">
          <div className="flex h-6 w-full items-center justify-between">
            <a
              className="inline-flex h-6 items-center transition-colors duration-200 hover:bg-[#081018]"
              href={getLocalePath(locale)}
              aria-label="Home"
            >
              <img alt="Nexorum" className="h-[16.7257px] w-auto shrink-0" src="/nexorum.png" />
            </a>
            <div className="flex h-6 items-center gap-4">
              <Suspense fallback={<div className="h-6 w-10" aria-hidden />}>
                <LanguageSelector align="right" locale={locale} labels={dict.language.options} />
              </Suspense>
              <HeroMenu
                locale={locale}
                labels={dict.navigation}
                iconSrc={imgMenu}
                buttonClassName="size-6 opacity-90"
                imgClassName="size-6"
              />
            </div>
          </div>
        </div>
        <div aria-hidden className={dividerClassName} />
      </div>

      <div className="mt-8 flex flex-col gap-[40px]">
        <h1 className="[font-family:var(--font-orbitron)] text-[20px] font-semibold uppercase leading-[1.4] tracking-[0.2px] text-[color:var(--primitive-colors-gray-200)]">
          <span className="block indent-[37px]">{headlineLines[0]}</span>
          <span className="block">{headlineLines[1]}</span>
        </h1>
        <p className="text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
          <span className="inline-block indent-[38px]">
            {dict.hero.description}
          </span>
        </p>
      </div>
    </section>
  );
}
