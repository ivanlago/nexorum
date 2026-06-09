import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { SectionIndex } from "@/components/landing/sections/section-index";
import { HowItWorksLink } from "@/components/ui/how-it-works-link";
import type { LandingDictionary } from "@/i18n/landing-dictionary";

const imgUsMap = "/mapa.png";
const imgDustLayer01 = "/figma-assets/90970330-97fd-4a07-9f7f-660b2da68917.png";
const imgDustLayer02 = "/figma-assets/9a52aaec-c1fd-43c0-abc6-56b334d6f46a.png";

export function LandingSection06Institucional({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section06 as any;
  const headingLines = (copy.heading?.split?.("\n") ?? []) as string[];

  return (
    <section id="institucional" className="relative w-full overflow-hidden pb-32 pt-0">
      <LandingSectionBackground />

      <div className="mx-auto w-full max-w-[1216px] px-6 lg:px-0">
        <div className="ml-auto max-w-[696px]">
          <div className="relative h-[149px] w-full">
            <div className="relative h-[55px] w-[696px]">
              <div className="absolute left-0 top-[7px] [font-family:var(--font-orbitron)] text-[14px] font-bold leading-[1.39] text-[color:var(--primitive-colors-primary-400)]">
                <SectionIndex value="05" />
              </div>
              <h2 className="absolute left-0 top-1/2 w-[696px] -translate-y-1/2 [font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[color:var(--primitive-colors-gray-200)] text-[24px] font-semibold uppercase leading-[0] tracking-[0.24px] text-transparent to-[128.98%] to-[rgba(167,184,198,0)]">
                {headingLines.map((line, idx) => (
                  <p key={idx} className="mb-0 leading-[1.6]">
                    {idx === 0 ? <span className="inline-block w-[56px]" /> : null}
                    {line}
                  </p>
                ))}
              </h2>
            </div>

            <div className="mt-10 ml-auto flex h-[54px] w-full max-w-[489px] flex-col justify-center text-[14px] font-light leading-[0] text-[color:var(--primitive-colors-gray-200)]">
              <p className="indent-[48px] leading-[1.6]">{copy.lead}</p>
            </div>
          </div>
        </div>

        <div className="relative mt-24 min-h-[545px]">
          <div className="relative mx-auto h-[545px] w-full max-w-[1008px] overflow-hidden bg-[var(--background)]">
            <LandingSectionBackground className="opacity-100" />
            <img
              alt=""
              className="pointer-events-none absolute left-1/2 top-[-46px] z-10 h-[686px] w-auto max-w-none -translate-x-1/2 opacity-70 mix-blend-lighten"
              src={imgUsMap}
            />
            <div className="pointer-events-none absolute left-1/2 top-[-46px] z-20 h-[686px] w-[1008px] -translate-x-1/2 bg-[rgba(108,181,255,0.15)] mix-blend-color" />
            <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-10 bg-gradient-to-b from-[var(--background)]/30 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-20 bg-gradient-to-t from-[var(--background)]/45 to-transparent" />
          </div>

          <div className="absolute left-0 top-[428px] z-10 flex w-[235px] flex-col gap-[55px]">
            <CtaPrimary label={dict.common.talkToSpecialist} />
            <HowItWorksLink href="#">{dict.common.seeHowItWorks}</HowItWorksLink>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-14 lg:grid-cols-[417px_1fr] lg:gap-[71px]">
          <div>
            <h3 className="[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold leading-[1.6] text-[18px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.01em] uppercase whitespace-pre-wrap">
              {copy.aboutHeading?.split?.("\n")?.map?.((line: string, idx: number, arr: string[]) => (
                <span key={idx}>
                  {idx === 0 ? <span className="inline-block w-[48px]" /> : null}
                  {line}
                  {idx < arr.length - 1 ? <br /> : null}
                </span>
              ))}
            </h3>
            <p className="mt-6 max-w-[592px] indent-12 text-[14px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
              {copy.aboutLead}
            </p>
          </div>

          <div className="relative flex h-[254px] flex-col justify-center gap-[41px] border-[0.5px] border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-8 py-10 shadow-[0px_24px_120px_rgba(0,0,0,0.45)]">
            <div className="pointer-events-none absolute left-1/2 top-[-72px] z-20 flex h-[168px] w-[728px] -translate-x-1/2 items-start justify-between opacity-60">
              <div className="relative h-[168px] w-[349px] shrink-0">
                <img
                  alt=""
                  className="absolute inset-0 h-full w-full max-w-none mix-blend-screen"
                  src={imgDustLayer01}
                />
              </div>
              <div className="relative h-[168px] w-[349px] shrink-0">
                <img
                  alt=""
                  className="absolute inset-0 h-full w-full max-w-none mix-blend-screen"
                  src={imgDustLayer02}
                />
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-end gap-6 overflow-hidden">
              <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold leading-[1.39] text-[color:var(--primitive-colors-primary-400)]">
                {copy.pillarsLabel}
              </div>
              <div className="w-[173px] text-right text-[10px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                {copy.pillarsLead}
              </div>
            </div>

            <div className="relative z-10 -mx-8 h-px w-[calc(100%+64px)] overflow-hidden bg-[rgba(118,131,143,0.25)]" />

            <div className="relative z-10 flex flex-col gap-4 overflow-hidden">
              <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                {copy.institutionalTitle}
              </div>
              <div className="text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                {copy.institutionalLead}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
