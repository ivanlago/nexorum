import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { SectionIndex } from "@/components/landing/sections/section-index";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import { HowItWorksLink } from "@/components/ui/how-it-works-link";
import type { LandingDictionary } from "@/i18n/landing-dictionary";

const imgUsMap = "https://www.figma.com/api/mcp/asset/4b138702-4a1c-482c-a24d-28c6020dba1e";
const imgDustLayer01 = "https://www.figma.com/api/mcp/asset/90970330-97fd-4a07-9f7f-660b2da68917";
const imgDustLayer02 = "https://www.figma.com/api/mcp/asset/9a52aaec-c1fd-43c0-abc6-56b334d6f46a";

export function LandingSection06Institucional({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section06 as any;
  const headingLines = (copy.heading?.split?.("\n") ?? []) as string[];

  return (
    <section id="institucional" className="relative w-full overflow-hidden pb-32 pt-0">
      <LandingSectionBackground />
      <div className="w-full">
        <div className="mx-auto w-full max-w-[1216px] px-6 lg:px-0">
          <div className="ml-[520px] h-[149px] w-[696px]">
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

            <div className="mt-10 ml-auto flex h-[54px] w-[489px] flex-col justify-center text-[14px] font-light leading-[0] text-[color:var(--primitive-colors-gray-200)]">
              <p className="indent-[48px] leading-[1.6]">{copy.lead}</p>
            </div>
          </div>
        </div>

        <div className="relative mt-24 px-6 lg:px-0">
          <div className="mx-auto h-[545px] w-full max-w-[1008px] overflow-hidden">
            <img alt="" className="h-full w-full object-cover opacity-70 mix-blend-lighten" src={imgUsMap} />
            <div className="absolute inset-0 left-1/2 top-1/2 h-[545px] w-[1008px] -translate-x-1/2 -translate-y-1/2 bg-[rgba(108,181,255,0.12)] mix-blend-color" />
          </div>

          <div className="absolute left-6 top-[428px] flex w-[235px] flex-col gap-[55px] lg:left-[112px]">
            <CtaPrimary label={dict.common.talkToSpecialist} />
            <HowItWorksLink href="#">{dict.common.seeHowItWorks}</HowItWorksLink>
          </div>
        </div>

	          <div className="mx-auto mt-24 w-full max-w-[1216px] px-6 lg:px-0">
	          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[417px_1fr] lg:gap-[71px]">
	            <div>
	              <h3 className="[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold leading-[1.6] text-[18px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.01em] uppercase align-middle whitespace-pre-wrap">
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
	      </div>
	    </section>
	  );
	}
