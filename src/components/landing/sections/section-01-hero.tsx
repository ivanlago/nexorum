import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { LanguageSelector } from "@/components/landing/language-selector";
import { HeroMenu } from "@/components/landing/hero-menu";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import type { SupportedLocale } from "@/i18n/locales";
import { Suspense } from "react";

const imgHandshake = "https://www.figma.com/api/mcp/asset/310615c8-6ebf-4d0b-a8ba-d7b507da104d";
const imgMenu = "/menu.png";

const imgGlowA = "https://www.figma.com/api/mcp/asset/6bbbdb76-dc06-44ae-a9e1-3759c71a4046";
const imgGlowB = "https://www.figma.com/api/mcp/asset/90c7f464-0c0c-42fe-8a75-f369dce989a3";
const imgGlowC = "https://www.figma.com/api/mcp/asset/862871ea-2f19-44f7-9e14-7d78bac6535a";

const imgGlowD = "https://www.figma.com/api/mcp/asset/3ede7e49-c585-4441-8862-3f9ba5c3c47a";
const imgGlowE = "https://www.figma.com/api/mcp/asset/8696c4d5-9129-4f26-89e7-9bd9775044c5";
const imgGlowF = "https://www.figma.com/api/mcp/asset/8436e0b0-6b76-4883-8e0a-1a16504a9657";

export function LandingSection01Hero({ dict, locale }: { dict: LandingDictionary; locale: SupportedLocale }) {
  const headlineLines = dict.hero.headline.split("\n");

  return (
    <section className="relative w-full overflow-hidden pt-0">
      <LandingSectionBackground />
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_-40%,rgba(255,255,255,0.16),rgba(255,255,255,0)_60%)]" />
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="h-[1000px] w-full">
          <div className="pointer-events-none absolute left-1/2 top-[299px] z-0 h-[701px] w-[1217px] -translate-x-1/2 overflow-hidden">
            <img
              alt=""
              className="h-full w-full object-cover opacity-75 mix-blend-lighten"
              src="/hero-image.png"
            />
            <div className="absolute inset-0 bg-[color:var(--primitive-colors-primary-300)] opacity-15 mix-blend-color" />
            <div className="absolute inset-0 bg-[color:var(--primitive-colors-primary-300)] opacity-15 mix-blend-color" />
            <div className="absolute left-0 top-0 h-full w-[72px] bg-gradient-to-l from-[rgba(5,9,13,0)] to-[#05090d]" />
            <div className="absolute right-0 top-0 h-full w-[72px] bg-gradient-to-l from-[rgba(5,9,13,0)] to-[#05090d] rotate-180" />
            <div className="absolute bottom-0 left-0 h-[72px] w-full bg-gradient-to-b from-[rgba(5,9,13,0)] to-[#05090d]" />
          </div>

          <div className="absolute left-0 top-0 h-[1000px] w-full">
            <div className="pointer-events-none absolute left-0 top-0 h-[1000px] w-full opacity-70">
              <div className="absolute right-[-280px] top-[-120px] h-[880px] w-[1200px] opacity-30 mix-blend-screen">
                <div className="absolute inset-0">
                  <img alt="" className="absolute inset-0 size-full object-contain" src={imgGlowA} />
                </div>
                <div className="absolute inset-0">
                  <img alt="" className="absolute inset-0 size-full object-contain" src={imgGlowB} />
                </div>
                <div className="absolute inset-0">
                  <img alt="" className="absolute inset-0 size-full object-contain" src={imgGlowC} />
                </div>
              </div>
              <div className="absolute left-[-520px] top-[-220px] h-[1080px] w-[1559px] opacity-30 mix-blend-screen">
                <img alt="" className="absolute inset-0 size-full object-contain" src={imgGlowD} />
                <img alt="" className="absolute inset-0 size-full object-contain" src={imgGlowE} />
                <img alt="" className="absolute inset-0 size-full object-contain" src={imgGlowF} />
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-0 z-10 flex w-full flex-col items-center gap-12">
            <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />
            <div className="relative w-full max-w-[1216px] px-6 lg:px-0">
              <a className="absolute left-0 top-[-1px] flex items-center gap-2" href={`/${locale}`}>
                <img alt="Nexorum" className="h-[20.933px] w-auto" src="/nexorum.png" />
              </a>

              <div className="absolute left-[728px] top-0 flex items-center gap-2">
                <img alt="" className="size-6" src={imgHandshake} />
                <span className="text-[14px] font-medium leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                  {dict.common.welcome}
                </span>
              </div>

              <div className="absolute left-[933px] top-0">
                <Suspense fallback={<div className="h-6 w-10" aria-hidden />}>
                  <LanguageSelector locale={locale} labels={dict.language.options} />
                </Suspense>
              </div>

              <div className="absolute right-0 top-[-6px] flex items-center gap-2">
                <HeroMenu
                  locale={locale}
                  iconSrc={imgMenu}
                  buttonClassName="size-8 opacity-90"
                  imgClassName="size-8"
                />
              </div>
            </div>
            <div className="h-px w-full bg-[rgba(118,131,143,0.18)]" />

            <div className="relative grid w-full max-w-[1216px] grid-cols-1 items-start gap-14 px-6 lg:grid-cols-[1fr_488px] lg:px-0">
              <h1 className="[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[color:var(--primitive-colors-gray-200)] font-bold leading-[0] text-[32px] text-transparent to-[119.04%] to-[rgba(195,210,218,0)] tracking-[0.01em] uppercase whitespace-pre-wrap">
                {headlineLines.map((line, idx) => (
                  <p key={idx} className={idx === 1 ? "mb-0 leading-[1.5] pl-[56px]" : "mb-0 leading-[1.5]"}>
                    {line}
                  </p>
                ))}
              </h1>

              <div className="relative -top-[10px]">
                <p className="text-[14px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)] indent-[48px]">
                  {dict.hero.description}
                </p>
                <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                  <CtaPrimary label={dict.common.talkToSpecialist} />
                  <a className="text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]" href="#">
                    {dict.common.seeHowItWorks} <span className="opacity-70">›</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
