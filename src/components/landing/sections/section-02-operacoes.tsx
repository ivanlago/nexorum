import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { LogoCarousel } from "@/components/landing/logo-carousel";
import { SectionIndex } from "@/components/landing/sections/section-index";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import { HowItWorksLink } from "@/components/ui/how-it-works-link";
import { OperationsCard } from "@/components/landing/sections/operations-card";
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
  { alt: "deepseek", src: "/deepseek.png", width: 156.32, height: 33.265 },
  { alt: "grok", src: "/Grok.png", width: 118.688, height: 48.928 },
  { alt: "gemini", src: "/Gemini.png", width: 137.35, height: 41.909 },
  { alt: "openai", src: "/openai.png", width: 115.057, height: 31.169 },
  { alt: "metaai", src: "/metaai.png", width: 135.573, height: 32.929 },
  { alt: "anthropic", src: "/anthropic.png", width: 145.087, height: 30.89 },
];

export function LandingSection02Operacoes({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section02 as any;
  const headingLines = (copy.heading?.split?.("\n") ?? []) as string[];

  return (
    <section id="operacoes" className="relative w-full overflow-hidden py-28">
      <LandingSectionBackground />
      <div className="relative w-full">
        <div className="mx-auto w-full max-w-[1216px] px-6 lg:px-0">
          <div className="flex items-end justify-between">
            <HowItWorksLink href="#como-aprende">{dict.common.seeHowItWorks}</HowItWorksLink>
            <div className="flex w-full max-w-[696px] flex-col items-end gap-10">
              <h2 className="[font-family:var(--font-orbitron)] w-full bg-clip-text bg-gradient-to-r from-[color:var(--primitive-colors-gray-200)] font-semibold leading-[0] text-[24px] text-transparent to-[128.98%] to-[rgba(167,184,198,0)] tracking-[0.24px] uppercase whitespace-pre-wrap">
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
              <p className="w-[592px] text-left text-[14px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)] indent-[48px]">
                {copy.lead}
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:pb-[103px]">
            {cards.map((c, idx) => (
              <OperationsCard
                key={c.tag}
                className={idx % 2 === 1 ? "lg:translate-y-[103px]" : undefined}
                tag={c.tag}
                subtitle={copy.cards?.[idx]?.subtitle}
                title={copy.cards?.[idx]?.title}
                description={copy.cards?.[idx]?.description}
                videoWebmSrc={`/card${idx + 1}-video.webm`}
                videoMp4Src={`/card${idx + 1}-video-h264.mp4`}
                videoUnsupportedText={dict.common.videoUnsupported}
              />
            ))}
          </div>

          <div className="mt-[120px]">
            <div className="w-full max-w-[720px]">
              <div className="[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold leading-[1.6] text-[18px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.01em] uppercase align-middle">
                {copy.systemsHeading}
              </div>
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <p className="max-w-[592px] pl-[104px] indent-12 text-[14px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                {copy.systemsLead}
              </p>

              <div className="flex items-center gap-10">
                <CtaPrimary label={dict.common.talkToSpecialist} />
                <HowItWorksLink href="#como-aprende">{dict.common.seeHowItWorks}</HowItWorksLink>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-[88px] w-full max-w-[1440px] px-6 lg:px-0">
          <div className="h-[145px] w-full overflow-hidden border-y border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16]">
            <div className="flex h-full w-full items-center px-0">
              <div className="flex h-full w-[430px] shrink-0 items-center justify-center gap-6 border-[0.5px] border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-8 py-10">
                <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold text-[color:var(--primitive-colors-primary-400)]">
                  [ APIs ]
                </div>
                <div className="w-[146px] text-[10px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                  {copy.apisLead}
                </div>
              </div>
              <div className="relative ml-[70px] h-[49px] flex-1 overflow-hidden opacity-100 after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-24 after:bg-gradient-to-l after:from-[#080f16] after:via-[rgba(8,15,22,0.96)] after:via-[42%] after:to-[rgba(8,15,22,0)]">
                <LogoCarousel
                  className="w-[calc(100%+96px)] pr-24"
                  logos={logoRow}
                  itemClassName="h-auto w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
