import { LogoCarousel } from "@/components/landing/logo-carousel";
import type { LandingDictionary } from "@/i18n/landing-dictionary";

const imgCaret = "https://www.figma.com/api/mcp/asset/891db62e-8032-4c26-afa2-0a054efd5811";
const imgDivider = "https://www.figma.com/api/mcp/asset/f4bf4418-d9f2-4524-ba78-ed7b5af4794f";

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

export function MobileSection02Operacoes({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section02 as any;

  return (
    <section className="px-6 pb-20 pt-24">
      <div className="[font-family:var(--font-orbitron)] text-[10px] font-bold text-[color:var(--primitive-colors-primary-400)]">
        [ 01 ]
      </div>
      <h2 className="mt-3 [font-family:var(--font-orbitron)] text-[18px] font-semibold uppercase leading-[1.6] text-[rgba(195,210,218,0.95)]">
        {copy.heading?.replaceAll?.("\n", " ")}
      </h2>
      <p className="mt-8 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
        <span className="inline-block indent-[39px]">
          {copy.lead}
        </span>
      </p>
      <a className="mt-10 inline-flex items-center gap-2 px-[37px] text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]" href="#">
        {dict.common.seeHowItWorks} <img alt="" className="size-4 opacity-80" src={imgCaret} />
      </a>

      <div className="mt-14 space-y-8">
        {cards.map((c, idx) => (
          <div
            key={c.tag}
            className="overflow-hidden border border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.55)] to-[#080f16]"
          >
            <div className="relative">
              <img alt="" className="h-[240px] w-full object-cover opacity-70 mix-blend-lighten" src={c.image} />
              <div className="absolute inset-0 bg-[#05090d]/20" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between gap-6">
                <div className="[font-family:var(--font-orbitron)] text-[10px] font-bold text-[color:var(--primitive-colors-primary-400)]">
                  {c.tag}
                </div>
                <div className="text-right text-[10px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                  {copy.cards?.[idx]?.subtitle}
                </div>
              </div>
            </div>
            <div className="px-6 pb-8 pt-6">
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

      <div className="mt-16">
        <div className="[font-family:var(--font-orbitron)] text-[14px] uppercase tracking-[0.08em] text-[color:var(--primitive-colors-gray-200)]">
          {copy.systemsHeading}
        </div>
        <p className="mt-6 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
          {copy.systemsLead}
        </p>
        <a className="mt-8 inline-flex items-center gap-2 px-[37px] text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]" href="#">
          {dict.common.seeHowItWorks} <img alt="" className="size-4 opacity-80" src={imgCaret} />
        </a>
      </div>

      <div className="mt-16 bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] pb-6 pt-0">
        <div className="border border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-7 py-9">
          <div className="flex items-center justify-center gap-6">
            <div className="[font-family:var(--font-orbitron)] text-[12px] font-bold text-[color:var(--primitive-colors-primary-400)]">
              [ APIs ]
            </div>
            <div className="w-[130px] text-[9px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
              {copy.apisLead}
            </div>
          </div>
        </div>
        <img alt="" className="mt-5 h-px w-full opacity-60" src={imgDivider} />
        <div className="mt-4 px-6 opacity-80">
          <LogoCarousel logos={logoRow} durationSeconds={18} itemClassName="h-8" />
        </div>
        <img alt="" className="mt-4 h-px w-full opacity-60" src={imgDivider} />
      </div>
    </section>
  );
}
