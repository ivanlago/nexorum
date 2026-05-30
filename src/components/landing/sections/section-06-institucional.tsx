import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { SectionIndex } from "@/components/landing/sections/section-index";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import type { LandingDictionary } from "@/i18n/landing-dictionary";

const imgUsMap = "https://www.figma.com/api/mcp/asset/4b138702-4a1c-482c-a24d-28c6020dba1e";
const imgTexture = "https://www.figma.com/api/mcp/asset/7f57e118-a8dd-45f1-babe-58cc760792fa";

export function LandingSection06Institucional({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section06 as any;
  const headingLines = (copy.heading?.split?.("\n") ?? []) as string[];

  return (
    <section id="institucional" className="relative w-full overflow-hidden pb-28 pt-10">
      <LandingSectionBackground />
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto w-full max-w-[1216px] px-6 lg:px-0">
          <div className="ml-[520px]">
            <h2 className="[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[color:var(--primitive-colors-gray-200)] font-semibold leading-[0] text-[24px] text-transparent to-[128.98%] to-[rgba(167,184,198,0)] tracking-[0.24px] uppercase whitespace-pre-wrap">
              {headingLines.map((line, idx) => (
                <p key={idx} className={idx === 0 ? "mb-0 flex items-baseline justify-start gap-3 leading-[1.6]" : "mb-0 leading-[1.6]"}>
                  {idx === 0 ? <SectionIndex value="05" className="shrink-0" /> : null}
                  {line}
                </p>
              ))}
            </h2>
          </div>

          <div className="flex items-end justify-between">
            <div />
            <div className="ml-auto max-w-[696px] text-left">
              <p className="mx-auto mt-10 max-w-[592px] text-left text-[14px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {copy.lead}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-24 px-6 lg:px-0">
          <div className="mx-auto h-[545px] w-full max-w-[1008px] overflow-hidden">
            <img alt="" className="h-full w-full object-cover opacity-70 mix-blend-lighten" src={imgUsMap} />
            <div className="absolute inset-0 left-1/2 top-1/2 h-[545px] w-[1008px] -translate-x-1/2 -translate-y-1/2 bg-[rgba(108,181,255,0.12)] mix-blend-color" />
          </div>

          <div className="absolute left-6 top-[428px] flex w-[235px] flex-col gap-14 lg:left-[112px]">
            <CtaPrimary label={dict.common.talkToSpecialist} />
            <a className="text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]" href="#">
              {dict.common.seeHowItWorks} <span className="opacity-70">›</span>
            </a>
          </div>
        </div>

	          <div className="mx-auto mt-24 w-full max-w-[1216px] px-6 lg:px-0">
	          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[417px_1fr] lg:gap-[71px]">
	            <div>
	              <h3 className="[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold leading-[1.6] text-[18px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.01em] uppercase align-middle whitespace-pre-wrap">
	                {copy.aboutHeading?.split?.("\n")?.map?.((line: string, idx: number, arr: string[]) => (
	                  <span key={idx}>
	                    {line}
	                    {idx < arr.length - 1 ? <br /> : null}
	                  </span>
	                ))}
	              </h3>
	              <p className="mt-6 max-w-[592px] indent-12 text-[14px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
	                {copy.aboutLead}
	              </p>
	            </div>

            <div className="relative overflow-hidden border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-8 py-10 shadow-[0px_24px_120px_rgba(0,0,0,0.45)]">
              <div className="absolute right-[-36px] top-[-74px] h-[138px] w-[237px] opacity-30">
                <img alt="" className="absolute inset-0 size-full object-cover" src={imgTexture} />
              </div>

              <div className="flex flex-col items-end">
                <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold text-[color:var(--primitive-colors-primary-400)]">
                  {copy.pillarsLabel}
                </div>
                <div className="mt-2 w-[173px] text-right text-[10px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                  {copy.pillarsLead}
                </div>
              </div>

              <div className="mt-10 h-px w-full bg-[rgba(118,131,143,0.25)]" />

              <div className="mt-10">
                <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
                  {copy.institutionalTitle}
                </div>
                <div className="mt-4 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
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
