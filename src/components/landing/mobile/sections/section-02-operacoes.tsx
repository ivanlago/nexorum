import { LogoCarousel } from "@/components/landing/logo-carousel";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import { HowItWorksLink } from "@/components/ui/how-it-works-link";
import type { LandingDictionary } from "@/i18n/landing-dictionary";

const dividerClassName =
  "h-px w-full opacity-60 bg-[linear-gradient(90deg,rgba(118,131,143,0)_0%,rgba(118,131,143,0.28)_8%,rgba(118,131,143,0.28)_92%,rgba(118,131,143,0)_100%)]";

const cards = [
  {
    image: "/figma-assets/mobile-operacoes-card-01.png",
  },
  {
    image: "/figma-assets/mobile-operacoes-card-02.png",
  },
  {
    image: "/figma-assets/mobile-operacoes-card-03.png",
  },
  {
    image: "/figma-assets/mobile-operacoes-card-04.png",
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

export function MobileSection02Operacoes({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section02 as any;

  return (
    <section className="relative overflow-hidden px-6 pb-[10px] pt-[88px]">
      <LandingSectionBackground />
      <h2 className="mt-3 [font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold uppercase leading-[1.6] text-[18px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.01em]">
        <span className="mr-3 inline-block align-baseline text-[10px] font-bold leading-[1.6] text-[color:var(--primitive-colors-primary-400)]">
          [ 01 ]
        </span>
        {copy.heading?.replaceAll?.("\n", " ")}
      </h2>
      <p className="mt-8 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
        <span className="inline-block indent-[39px]">
          {copy.lead}
        </span>
      </p>
      <HowItWorksLink className="mt-10 px-[37px]" href="#como-aprende">
        {dict.common.seeHowItWorks}
      </HowItWorksLink>

      <div
        className={[
          "mt-14 overflow-x-auto",
          "snap-x snap-mandatory",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        ].join(" ")}
      >
        <div className="flex gap-6">
          {cards.map((c, idx) => (
            <div
              key={c.image}
              className={[
                "relative snap-start shrink-0",
                "h-[500px] w-[280px]",
                "overflow-visible",
              ].join(" ")}
            >
              <img
                alt={copy.cards?.[idx]?.title ?? ""}
                className="absolute left-1/2 top-1/2 h-[500px] w-[338px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
                src={c.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <div className="[font-family:var(--font-orbitron)] text-[14px] uppercase tracking-[0.08em] text-[color:var(--primitive-colors-gray-200)]">
          {copy.systemsHeading}
        </div>
        <p className="mt-10 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
          {copy.systemsLead}
        </p>
        <HowItWorksLink className="mt-10 px-[37px]" href="#como-aprende">
          {dict.common.seeHowItWorks}
        </HowItWorksLink>
      </div>

      <div className="mt-[88px] -mx-6 bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] pt-0">
        <div className="border border-b-0 border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-7 py-9">
          <div className="flex items-center justify-center gap-6">
            <div className="[font-family:var(--font-orbitron)] text-[12px] font-bold text-[color:var(--primitive-colors-primary-400)]">
              [ APIs ]
            </div>
            <div className="w-[130px] text-[9px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
              {copy.apisLead}
            </div>
          </div>
        </div>
        <div aria-hidden className={dividerClassName} />
        <div className="overflow-hidden px-[25px] py-[18px] opacity-80">
          <LogoCarousel logos={logoRow} durationSeconds={18} itemClassName="h-8" />
        </div>
        <div aria-hidden className={dividerClassName} />
      </div>
    </section>
  );
}
