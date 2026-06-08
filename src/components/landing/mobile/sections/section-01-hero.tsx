import { LanguageSelector } from "@/components/landing/language-selector";
import { HeroMenu } from "@/components/landing/hero-menu";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import type { SupportedLocale } from "@/i18n/locales";
import { Suspense } from "react";

const imgDivider = "https://www.figma.com/api/mcp/asset/7af0d948-cb2c-4bc8-b1cb-df9bef6b3474";
const imgMenu = "/menu.png";
const imgWelcome = "/header-bemvindo.png";

export function MobileSection01Hero({ dict, locale }: { dict: LandingDictionary; locale: SupportedLocale }) {
  const headline = dict.hero.headline.replaceAll("\n", " ");

  return (
    <section className="relative overflow-hidden px-6 pt-0">
      <div className="pt-6">
        <img alt="" className="h-px w-full opacity-60" src={imgDivider} />
        <div className="flex items-center justify-between py-6">
          <a
            className="-m-4 inline-flex items-center gap-2 p-4 transition-colors duration-200 hover:bg-[#081018]"
            href={`/${locale}`}
            aria-label="Home"
          >
            <img alt="Nexorum" className="h-[16.7px] w-auto" src="/nexorum.png" />
          </a>
          <div className="flex items-center gap-4">
            <Suspense fallback={<div className="h-6 w-10" aria-hidden />}>
              <LanguageSelector align="right" locale={locale} labels={dict.language.options} />
            </Suspense>
            <HeroMenu
              locale={locale}
              iconSrc={imgMenu}
              buttonClassName="size-6 opacity-90"
              imgClassName="size-6"
            />
          </div>
        </div>
        <div className="mb-5 flex items-center gap-2">
          <img alt="" className="h-5 w-auto object-contain" src={imgWelcome} />
          <span className="text-[12px] font-medium leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
            {dict.common.welcome}
          </span>
        </div>
        <img alt="" className="h-px w-full opacity-60" src={imgDivider} />
      </div>

      <div className="mt-8 flex flex-col gap-10">
        <h1 className="[font-family:var(--font-orbitron)] text-[20px] font-semibold uppercase leading-[1.4] tracking-[0.01em] text-[color:var(--primitive-colors-gray-200)]">
          {headline}
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
