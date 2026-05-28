import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { SectionIndex } from "@/components/landing/sections/section-index";
import type { LandingDictionary } from "@/i18n/landing-dictionary";

const leftPillars = [
  {
  },
  {
  },
  {
  },
];

const rightCards = [
  {
    icon: "https://www.figma.com/api/mcp/asset/17360d67-5564-41c7-a3dc-d49d8908c2db",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/3a5784c2-0395-4eff-8dc5-a735cb2bfc8b",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/3e0ffc9c-36a4-463f-b48c-407a945faf67",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/e59ce029-9eaa-4c76-a981-89fed413f27b",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/54bf4c1c-3550-43eb-9af9-3e3f5a8e7d7f",
  },
];

export function LandingSection04ComoAprende({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section04 as any;

  return (
    <section id="como-aprende" className="relative w-full overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-20 mix-blend-plus-lighter">
          <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(108,181,255,0.10),transparent_60%)]" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="mx-auto grid w-full max-w-[1216px] grid-cols-1 gap-14 px-6 lg:grid-cols-[240px_1fr_340px] lg:px-0">
          <div className="relative">
            <div className="absolute left-0 top-[-85px] h-[168px] w-[237px] opacity-80">
              <img
                alt=""
                className="absolute inset-0 size-full object-cover"
                src="https://www.figma.com/api/mcp/asset/d3b24f5c-d64d-4e15-8db2-1e3d039aab7d"
              />
            </div>

            <div className="border border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-8 py-10 shadow-[0px_24px_120px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col items-end gap-6">
                <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold text-[color:var(--primitive-colors-primary-400)]">
                  {copy.pillarsLabel}
                </div>
                <p className="text-right text-[11px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                  {copy.pillarsLead}
                </p>
              </div>

              <div className="mt-10 divide-y divide-[rgba(26,42,56,0.9)]">
                {leftPillars.map((p, idx) => (
                  <div key={idx} className="py-6">
                    <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
                      {copy.pillars?.items?.[idx]?.title}
                    </div>
                    <div className="mt-3 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                      {copy.pillars?.items?.[idx]?.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <CtaPrimary label={dict.common.talkToSpecialist} />
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="[font-family:var(--font-orbitron)] text-[28px] font-semibold uppercase leading-[1.1] tracking-[0.02em] text-[color:var(--heading)]">
              <span className="inline-block align-baseline text-[24px] leading-[1.6] tracking-[0.01em] text-[color:var(--primitive-colors-gray-200)]">
                <SectionIndex value="03" className="mr-3 align-baseline" />
              </span>
              {copy.heading?.split?.("\n")?.map?.((line: string, idx: number, arr: string[]) => (
                <span key={idx}>
                  {line}
                  {idx < arr.length - 1 ? <br /> : null}
                </span>
              ))}
            </h2>
            <p className="mt-8 max-w-[560px] text-[13px] font-light leading-[1.9] text-[color:var(--primitive-colors-gray-200)]">
              {copy.lead}
            </p>

            <div className="mt-12 flex items-center justify-center">
              <div className="relative h-[280px] w-[280px]">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(108,181,255,0.22),transparent_60%)] blur-[18px]" />
                <div className="absolute inset-10 rounded-[32px] border border-[rgba(87,171,255,0.28)] bg-[rgba(9,16,24,0.45)]" />
                <div className="absolute inset-0 flex items-center justify-center [font-family:var(--font-orbitron)] text-[12px] tracking-[0.14em] text-[color:var(--primitive-colors-gray-300)]">
                  {copy.illustrationLabel}
                </div>
              </div>
            </div>

            <div className="mt-10 text-center [font-family:var(--font-orbitron)] text-[13px] font-semibold tracking-[0.12em] text-[color:var(--primitive-colors-gray-300)]">
              {copy.caption?.split?.("\n")?.map?.((line: string, idx: number, arr: string[]) => (
                <span key={idx}>
                  {line}
                  {idx < arr.length - 1 ? <br /> : null}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {rightCards.map((c, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 border border-[rgba(26,42,56,0.85)] bg-[rgba(8,15,22,0.55)] px-5 py-4 shadow-[0px_10px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="mt-0.5 inline-flex size-10 items-center justify-center border border-[rgba(87,171,255,0.25)] bg-[rgba(9,16,24,0.65)]">
                  <img alt="" className="size-5" src={c.icon} />
                </div>
                <div className="min-w-0">
                  <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
                    {copy.cards?.[idx]?.title}
                  </div>
                  <div className="mt-2 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                    {copy.cards?.[idx]?.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
