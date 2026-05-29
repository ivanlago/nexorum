import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";

const items = [
  { n: "1", icon: "https://www.figma.com/api/mcp/asset/a8108f3e-216e-4ae7-97d0-755798816a5d" },
  { n: "2", icon: "https://www.figma.com/api/mcp/asset/d1c79dab-e4a2-41d1-9e5f-b21e7800cecb" },
  { n: "3", icon: "https://www.figma.com/api/mcp/asset/0a7942ce-2dc2-4b5f-b0b7-d7cd95674458" },
  { n: "4", icon: "https://www.figma.com/api/mcp/asset/c8187612-2df1-42f6-ba51-999efff6cfed" },
  { n: "5", icon: "https://www.figma.com/api/mcp/asset/7a630ad5-f3cf-42ed-ab63-134547c5bea5" },
  { n: "6", icon: "https://www.figma.com/api/mcp/asset/421c21c5-970f-4273-a56b-d2b638a27cb5" },
];

const whatCards = [
  { icon: "https://www.figma.com/api/mcp/asset/d259a3bb-9f83-4b8d-80a2-fcf9b806573a" },
  { icon: "https://www.figma.com/api/mcp/asset/dcdcf943-9bb9-4cec-a773-813bfa8b39cc" },
  { icon: "https://www.figma.com/api/mcp/asset/461b736a-bfca-422c-b367-d30cf0c3c181" },
  { icon: "https://www.figma.com/api/mcp/asset/bc320338-083e-47ad-9930-c5a6d545c30a" },
  { icon: "https://www.figma.com/api/mcp/asset/421c21c5-970f-4273-a56b-d2b638a27cb5" }
];

export function MobileSection04ComoAprende({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section04 as any;

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-12">
      <LandingSectionBackground />
      <div className="[font-family:var(--font-orbitron)] text-[10px] font-bold text-[color:var(--primitive-colors-primary-400)]">
        [ 03 ]
      </div>
      <h2 className="mt-3 [font-family:var(--font-orbitron)] text-[18px] font-semibold uppercase leading-[1.6] text-[rgba(195,210,218,0.95)]">
        {copy.heading?.replaceAll?.("\n", " ")}
      </h2>
      <p className="mt-8 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
        <span className="inline-block indent-[39px]">
          {copy.lead}
        </span>
      </p>

      <div className="mt-14 flex items-center justify-center">
        <div className="relative h-[323px] w-[330px] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(108,181,255,0.18),transparent_65%)]" />
          <div className="absolute inset-0 flex items-center justify-center [font-family:var(--font-orbitron)] text-[12px] tracking-[0.14em] text-[color:var(--primitive-colors-gray-300)]">
            {copy.illustrationLabel}
          </div>
        </div>
      </div>

      <h3 className="mt-16 [font-family:var(--font-orbitron)] text-[16px] font-semibold uppercase leading-[1.6] text-[rgba(195,210,218,0.95)]">
        {copy.mobile?.transformHeading}
      </h3>
      <p className="mt-6 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
        <span className="inline-block indent-[39px]">
          {copy.mobile?.transformLead}
        </span>
      </p>

      <div className="mt-12">
        <div className="text-[12px] font-medium text-[color:var(--primitive-colors-gray-200)]">{copy.mobile?.howItWorksTitle}</div>
        <div className="mt-6 divide-y divide-[rgba(118,131,143,0.14)] border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16]">
          {items.map((it, idx) => (
            <div key={it.n} className="flex items-center gap-6 px-6 py-5">
              <div className="[font-family:var(--font-orbitron)] text-[16px] font-semibold text-[color:var(--primitive-colors-primary-400)]">
                {it.n}
              </div>
              <img alt="" className="size-8 opacity-90" src={it.icon} />
              <div className="text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                {copy.mobile?.steps?.[idx]}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="text-[12px] font-medium text-[color:var(--primitive-colors-gray-200)]">{copy.mobile?.whatItDoesTitle}</div>
        <div className="mt-6 space-y-4">
          {whatCards.map((c, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-6 py-6"
            >
              <div className="relative size-14 shrink-0 border border-[rgba(26,42,56,0.9)] bg-[radial-gradient(circle_at_50%_50%,rgba(11,22,32,0.0),rgba(11,22,32,0.5))]">
                <img alt="" className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2" src={c.icon} />
              </div>
              <div>
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
      </div>
    </section>
  );
}
