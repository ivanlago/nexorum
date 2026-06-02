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
    <section id="como-aprende" className="relative mt-[52px] w-full overflow-hidden pb-0 pt-[72px]">
      <LandingSectionBackground />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="mx-auto grid w-full max-w-[1216px] grid-cols-1 gap-14 px-6 lg:h-[690px] lg:grid-cols-[240px_1fr_340px] lg:items-start lg:px-0">
          <div className="relative flex flex-col lg:h-[612px] lg:w-[240px] lg:self-start">
            <div className="absolute left-0 top-[-85px] h-[168px] w-[237px] opacity-80">
              <img
                alt=""
                className="absolute inset-0 size-full object-cover"
                src="https://www.figma.com/api/mcp/asset/d3b24f5c-d64d-4e15-8db2-1e3d039aab7d"
              />
            </div>

            <div className="flex h-[542px] min-h-0 flex-col overflow-hidden border border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-8 py-10 shadow-[0px_24px_120px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col items-end gap-6">
                <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold text-[color:var(--primitive-colors-primary-400)]">
                  {copy.pillarsLabel}
                </div>
                <p className="max-w-[173px] text-right text-[10px] italic font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                  {copy.pillarsLead}
                </p>
              </div>

              <div className="mt-10 flex flex-1 flex-col divide-y divide-[rgba(26,42,56,0.9)]">
                {leftPillars.map((p, idx) => (
                  <div key={idx} className="flex flex-1 flex-col justify-center py-6">
                    <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                      {copy.pillars?.items?.[idx]?.title}
                    </div>
                    <div className="mt-3 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                      {copy.pillars?.items?.[idx]?.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 w-[240px]">
              <CtaPrimary label={dict.common.talkToSpecialist} />
            </div>
          </div>

          <div className="min-w-0 h-full overflow-y-auto overflow-x-hidden overscroll-auto pr-2 lg:-mt-[72px] lg:h-[calc(100%+72px)] lg:pt-[72px] [scrollbar-width:none] [touch-action:pan-y] [&::-webkit-scrollbar]:hidden">
            <h2 className="[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[color:var(--primitive-colors-gray-200)] text-[24px] font-semibold uppercase leading-[0] tracking-[0.24px] text-transparent to-[128.98%] to-[rgba(167,184,198,0)]">
              <span className="flex min-w-0 items-baseline gap-3 leading-[1.6]">
                <span className="text-[24px] leading-[1.39] tracking-[0.01em] text-[color:var(--primitive-colors-primary-400)]">
                  <SectionIndex value="03" className="align-baseline" />
                </span>
                <span className="min-w-0 break-words leading-[1.6]">{headingLines[0]}</span>
              </span>
              {headingLines[1] ? <span className="block break-words leading-[1.6]">{headingLines[1]}</span> : null}
            </h2>
	            <p className="mt-6 max-w-[560px] text-[13px] font-light leading-[1.9] text-[color:var(--primitive-colors-gray-200)]">
	              <span className="inline-block indent-[39px]">{copy.lead}</span>
	            </p>

            <div className="relative -top-5">
	            <div className="mt-12 flex items-center justify-center">
	              <div className="relative h-[406.215px] w-[404px] max-w-full">
	                <video
	                  className="pointer-events-none absolute left-1/2 top-1/2 w-[404px] max-w-none -translate-x-1/2 -translate-y-1/2 select-none mix-blend-screen"
	                  src="/aprende-video.mp4"
	                  muted
	                  autoPlay
	                  loop
	                  playsInline
	                />
	              </div>
	            </div>

              <div className="[font-family:var(--font-orbitron)] mt-12 bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold leading-[1.6] text-[18px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.01em] uppercase align-middle indent-[48px]">
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

              <div className="[font-family:var(--font-orbitron)] mt-10 text-[14px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                {copy.mobile?.howItWorksTitle}
              </div>
              <div className="mt-6 grid grid-cols-[140px_1fr] items-center gap-8 text-[color:var(--primitive-colors-gray-200)]">
                <div className="[font-family:var(--font-orbitron)] text-[10px] font-semibold leading-[1.4] tracking-[0.14em]">
                  {copy.mobile?.stepsHeaderLeft}
                </div>
                <div className="[font-family:var(--font-orbitron)] text-[10px] font-semibold leading-[1.4] tracking-[0.14em]">
                  {copy.mobile?.stepsHeaderRight}
                </div>
              </div>
              <div className="mt-4 h-px w-full bg-[rgba(118,131,143,0.25)]" />

              <div className="divide-y divide-[rgba(118,131,143,0.25)] pb-40">
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
                <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 lg:h-[542px] lg:w-[340px] lg:self-start">
            {rightCards.map((c, idx) => (
              <div
                key={idx}
                className="relative flex min-h-[104px] items-start gap-6 overflow-hidden border border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] p-6"
              >
                <div className="pointer-events-none absolute bottom-[-26px] right-[-31px] h-[105px] w-[310px] opacity-30">
                  <img
                    alt=""
                    className="absolute left-[-7px] top-[-26px] h-[131px] w-[430.246px] max-w-none"
                    src="https://www.figma.com/api/mcp/asset/b50ab1ca-61a7-44ea-a59d-44716252e794"
                  />
                </div>

                <div className="relative inline-flex size-14 shrink-0 items-center justify-center border border-[rgba(26,42,56,0.9)] bg-[radial-gradient(circle_at_50%_50%,rgba(11,22,32,0)_0%,rgba(11,22,32,0.5)_100%)]">
                  <img alt="" className="max-h-8 max-w-8" src={c.icon} />
                </div>
                <div className="relative min-w-0 flex-1 pt-[2px]">
                  <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                    {copy.cards?.[idx]?.title}
                  </div>
                  <div className="mt-3 max-w-[184px] text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
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
