import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { LogoCarousel } from "@/components/landing/logo-carousel";
import { SectionIndex } from "@/components/landing/sections/section-index";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import type { LandingDictionary } from "@/i18n/landing-dictionary";

const cards = [
  {
    tag: "[ 01 ]",
    image: "/operacoes-image1.png",
  },
  {
    tag: "[ 02 ]",
    image: "/operacoes-image2.png",
  },
  {
    tag: "[ 03 ]",
    image: "/operacoes-image3.png",
  },
  {
    tag: "[ 04 ]",
    image: "/operacoes-image4.png",
  },
];

const logoRow = [
  { alt: "deepseek", src: "/deepseek.png" },
  { alt: "grok", src: "/Grok.png" },
  { alt: "gemini", src: "/Gemini.png" },
  { alt: "openai", src: "/openai.png" },
  { alt: "metaai", src: "/metaai.png" },
  { alt: "anthropic", src: "/anthropic.png" },
];

export function LandingSection02Operacoes({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section02 as any;
  const headingLines = (copy.heading?.split?.("\n") ?? []) as string[];

  return (
    <section id="operacoes" className="relative w-full overflow-hidden py-28">
      <LandingSectionBackground />
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="mx-auto w-full max-w-[1216px] px-6 lg:px-0">
          <div className="ml-[520px]">
              <h2 className="[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[color:var(--primitive-colors-gray-200)] font-semibold leading-[0] text-[24px] text-transparent to-[128.98%] to-[rgba(167,184,198,0)] tracking-[0.24px] uppercase whitespace-pre-wrap">
                {headingLines.map((line, idx) => (
                  <p
                    key={idx}
                    className={idx === 0 ? "mb-0 flex items-baseline justify-start gap-3 leading-[1.6]" : "mb-0 leading-[1.6]"}
                  >
                    {idx === 0 ? <SectionIndex value="01" className="shrink-0" /> : null}
                    {line}
                  </p>
                ))}
              </h2>
          </div>
          <div className="flex items-end justify-between">
            <a className="text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]" href="#">
              {dict.common.seeHowItWorks} <span className="opacity-70">›</span>
            </a>
            <div className="ml-auto max-w-[696px] text-left">              
              <p className="mx-auto mt-10 max-w-[592px] text-left text-[14px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {copy.lead}
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:pb-[103px]">
            {cards.map((c, idx) => (
              <div
                key={c.tag}
                className={[
                  "relative h-[500px] w-full overflow-hidden border-[0.5px] border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] shadow-[0px_24px_120px_rgba(0,0,0,0.5)]",
                  idx % 2 === 1 ? "lg:translate-y-[103px]" : "",
                ].join(" ")}
              >
                <div className="flex h-[96px] items-center px-8">
                  <div className="flex w-full items-center gap-6">
                    <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold leading-[1.39] text-[color:var(--primitive-colors-primary-400)] whitespace-nowrap">
                      {c.tag}
                    </div>
                    <div className="w-[158px] text-[10px] font-light italic leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                      {copy.cards?.[idx]?.subtitle}
                    </div>
                  </div>
                </div>

                <div className="mt-4 h-px w-full bg-[rgba(118,131,143,0.25)]" />

                <div className="relative flex h-[255px] items-center justify-center overflow-hidden bg-[rgba(8,15,22,0.18)]">
                  <img alt="" className="h-[208px] w-[208px] object-cover opacity-70 mix-blend-lighten" src={c.image} />
                  <div className="absolute inset-0 bg-[#05090d]/20" />
                  <div className="absolute inset-0 bg-[color:var(--primitive-colors-primary-300)] opacity-15 mix-blend-color" />
                </div>

                <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />

                <div className="px-8 pb-10 pt-10">
                  <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
                    {copy.cards?.[idx]?.title}
                  </div>
                  <div className="mt-4 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                    {copy.cards?.[idx]?.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <div className="[font-family:var(--font-orbitron)] text-[16px] uppercase tracking-[0.1em] text-[color:var(--primitive-colors-gray-200)]">
                {copy.systemsHeading}
              </div>
              <p className="mt-6 max-w-[720px] text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                {copy.systemsLead}
              </p>
            </div>
            <div className="flex items-center gap-8">
              <CtaPrimary label={dict.common.talkToSpecialist} />
              <a className="text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]" href="#">
                {dict.common.seeHowItWorks} <span className="opacity-70">›</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 h-[145px] w-full overflow-hidden border-y border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16]">
          <div className="mx-auto flex h-full w-full max-w-[1440px] items-center px-6 lg:px-0">
            <div className="flex h-full w-[430px] shrink-0 items-center justify-center gap-6 border-[0.5px] border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-8 py-10">
              <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold text-[color:var(--primitive-colors-primary-400)]">
                [ APIs ]
              </div>
              <div className="w-[146px] text-[10px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                {copy.apisLead}
              </div>
            </div>
            <div className="ml-[70px] h-[49px] flex-1 opacity-100">
              <LogoCarousel logos={logoRow} itemClassName="max-h-[49px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
