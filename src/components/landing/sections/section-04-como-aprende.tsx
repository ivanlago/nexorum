import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { SectionIndex } from "@/components/landing/sections/section-index";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
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

const transformIcons = [
  "https://www.figma.com/api/mcp/asset/7dd092ae-f2a6-4d0f-865e-54e6ccde759c",
  "https://www.figma.com/api/mcp/asset/d336fd1f-de3f-400d-a82f-1c825fec6589",
  "https://www.figma.com/api/mcp/asset/5fe71afc-00a0-4c1f-8d61-170def32218c",
  "https://www.figma.com/api/mcp/asset/744059a5-0ec4-4b0a-968f-aa54d88bc57a",
  "https://www.figma.com/api/mcp/asset/f2e2a536-1024-4adb-9432-9b1b285eb5fb",
  "https://www.figma.com/api/mcp/asset/b1d311f2-5c55-4342-8ed0-1e3c433ca008",
];

export function LandingSection04ComoAprende({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section04 as any;
  const steps = (copy?.mobile?.steps ?? []) as string[];
  const headingLines = (copy.heading?.split?.("\n") ?? []) as string[];

  return (
    <section id="como-aprende" className="relative w-full overflow-hidden py-20">
      <LandingSectionBackground />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="mx-auto grid w-full max-w-[1216px] grid-cols-1 gap-14 px-6 lg:h-[768px] lg:grid-cols-[240px_1fr_340px] lg:items-start lg:px-0">
          <div className="relative flex flex-col lg:h-[542px] lg:self-start">
            <div className="absolute left-0 top-[-85px] h-[168px] w-[237px] opacity-80">
              <img
                alt=""
                className="absolute inset-0 size-full object-cover"
                src="https://www.figma.com/api/mcp/asset/d3b24f5c-d64d-4e15-8db2-1e3d039aab7d"
              />
            </div>

            <div className="flex min-h-0 flex-1 flex-col border border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-6 py-8 shadow-[0px_24px_120px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col items-end gap-6">
                <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold text-[color:var(--primitive-colors-primary-400)]">
                  {copy.pillarsLabel}
                </div>
                <p className="text-right text-[11px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                  {copy.pillarsLead}
                </p>
              </div>

              <div className="mt-8 divide-y divide-[rgba(26,42,56,0.9)]">
                {leftPillars.map((p, idx) => (
                  <div key={idx} className="py-5">
                    <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
                      {copy.pillars?.items?.[idx]?.title}
                    </div>
                    <div className="mt-2 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                      {copy.pillars?.items?.[idx]?.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <CtaPrimary className="w-full" label={dict.common.talkToSpecialist} />
            </div>
          </div>

          <div className="min-w-0 h-full overflow-y-auto overflow-x-hidden overscroll-auto pr-2 [scrollbar-width:none] [touch-action:pan-y] [&::-webkit-scrollbar]:hidden">
            <h2 className="[font-family:var(--font-orbitron)] text-[24px] font-semibold uppercase leading-[1.1] tracking-[0.01em] text-[color:var(--primitive-colors-gray-200)]">
              <span className="flex min-w-0 items-baseline gap-3">
                <span className="text-[24px] leading-[1.6] tracking-[0.01em] text-[color:var(--primitive-colors-gray-200)]">
                  <SectionIndex value="03" className="align-baseline" />
                </span>
                <span className="min-w-0 break-words">{headingLines[0]}</span>
              </span>
              {headingLines[1] ? <span className="block break-words">{headingLines[1]}</span> : null}
            </h2>
            <p className="mt-8 max-w-[560px] text-[13px] font-light leading-[1.9] text-[color:var(--primitive-colors-gray-200)]">
              {copy.lead}
            </p>

            <div className="mt-12 flex items-center justify-center">
              <img
                alt=""
                className="pointer-events-none w-[420px] max-w-full select-none"
                src="/aprende-video.svg"
              />
            </div>

            <div className="mt-10 [font-family:var(--font-orbitron)] text-[18px] font-semibold uppercase leading-[1.6] tracking-[0.1em] text-[color:var(--primitive-colors-gray-300)] indent-[48px]">
              {copy.caption?.split?.("\n")?.map?.((line: string, idx: number, arr: string[]) => (
                <span key={idx}>
                  {line}
                  {idx < arr.length - 1 ? <br /> : null}
                </span>
              ))}
            </div>

            <p className="mt-8 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
              <span className="inline-block indent-[39px]">{copy.mobile?.transformLead}</span>
            </p>
            <p className="mt-4 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
              <span className="inline-block indent-[39px]">{copy.mobile?.transformLead2}</span>
            </p>

            <div className="mt-10 text-[12px] font-medium leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
              {copy.mobile?.howItWorksTitle}
            </div>
            <div className="mt-6 grid grid-cols-[140px_1fr] items-center gap-8 text-[10px] leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
              <div className="[font-family:var(--font-orbitron)] font-semibold tracking-[0.14em]">
                {copy.mobile?.stepsHeaderLeft}
              </div>
              <div className="[font-family:var(--font-orbitron)] font-semibold tracking-[0.14em]">
                {copy.mobile?.stepsHeaderRight}
              </div>
            </div>
            <div className="mt-4 h-px w-full bg-[rgba(118,131,143,0.25)]" />

            <div className="divide-y divide-[rgba(118,131,143,0.25)] pb-10">
              {steps.slice(0, 6).map((text, idx) => (
                <div key={text} className="grid grid-cols-[140px_1fr] items-center gap-8 py-6">
                  <div className="flex items-center">
                    <div className="[font-family:var(--font-orbitron)] text-[24px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-primary-400)]">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img alt="" className="size-8 opacity-90" src={transformIcons[idx]} />
                    <div className="text-[14px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                      {text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:h-[542px] lg:self-start lg:gap-6">
            {rightCards.map((c, idx) => (
              <div
                key={idx}
                className="flex min-h-[92px] items-start gap-5 border border-[rgba(26,42,56,0.85)] bg-[rgba(8,15,22,0.55)] px-6 py-5 shadow-[0px_10px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="mt-0.5 inline-flex size-12 items-center justify-center border border-[rgba(87,171,255,0.25)] bg-[rgba(9,16,24,0.65)]">
                  <img alt="" className="size-6" src={c.icon} />
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
