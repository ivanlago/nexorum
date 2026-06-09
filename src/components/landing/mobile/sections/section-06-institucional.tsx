import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";

const imgMap = "/mapa.png";
const imgPillarsTexture = "/figma-assets/e2a3d064-253e-492f-a3b6-cb0e4e02e0f5.png";
const imgTexture = "/figma-assets/e3314f31-61f0-42df-a27f-e6fe05af7ace.svg";
const dividerClassName =
  "h-px w-full opacity-60 bg-[linear-gradient(90deg,rgba(118,131,143,0)_0%,rgba(118,131,143,0.28)_8%,rgba(118,131,143,0.28)_92%,rgba(118,131,143,0)_100%)]";

export function MobileSection06Institucional({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section06 as any;

  return (
    <section className="relative mt-[78px] overflow-hidden px-6 pb-24 pt-[10px]">
      <LandingSectionBackground />
      <h2 className="[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold uppercase leading-[1.6] text-[18px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.01em]">
        <span className="mr-3 inline-block align-baseline text-[10px] font-bold leading-[1.6] text-[color:var(--primitive-colors-primary-400)]">
          [ 05 ]
        </span>
        {copy.heading}
      </h2>
      <p className="mt-10 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
        <span className="inline-block indent-[39px]">
          {copy.lead}
        </span>
      </p>

      <div className="relative mt-[63px] h-[235px] w-full overflow-hidden">
        <img alt="" className="h-full w-full object-cover object-[center_18px] opacity-70 mix-blend-lighten" src={imgMap} />
        <div className="absolute left-1/2 top-[calc(50%+0px)] h-[235px] w-[385px] -translate-x-1/2 -translate-y-1/2 bg-[rgba(108,181,255,0.12)] mix-blend-color" />
      </div>

      <div className="mt-[23px]">
        <h3 className="[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold uppercase leading-[1.6] text-[16px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.16px] indent-[37px]">
          {copy.aboutHeading?.replaceAll?.("\n", " ")}
        </h3>
        <p className="mt-6 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300,#76838f)]">
          <span className="inline-block indent-[39px]">
            {copy.aboutLead}
          </span>
        </p>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="absolute left-0 top-[-84px] h-[168px] w-[327px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-9.15%] top-0 h-full w-[149.42%] max-w-none" src={imgPillarsTexture} />
          </div>
        </div>
        <div className="absolute left-0 top-[-44px] h-[370px] w-[327px] rounded-full bg-[rgba(108,181,255,0.05)] blur-[50px]" />
        <div className="relative flex flex-col items-center gap-[41px] border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-8 py-10">
          <div className="flex w-full flex-col items-end gap-6">
            <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold leading-[1.39] text-[color:var(--primitive-colors-primary-400)] whitespace-nowrap">
              {copy.pillarsLabel}
            </div>
            <div className="relative h-[23px] w-full">
              <div className="absolute right-0 top-1/2 w-[173px] -translate-y-1/2 text-right text-[10px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                {copy.pillarsLead}
              </div>
              <div className="pointer-events-none absolute right-[-36px] top-[-74px] h-[138px] w-[237px] opacity-30">
                <img
                  alt=""
                  className="absolute left-[-5.14px] top-[7px] h-[131px] w-[430.246px] max-w-none -scale-y-100 rotate-180"
                  src={imgTexture}
                />
              </div>
            </div>
          </div>

          <div className="w-[calc(100%+64px)]">
            <div aria-hidden className={dividerClassName} />
          </div>

          <div className="w-full">
            <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
              {copy.institutionalTitle}
            </div>
            <div className="mt-4 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
              {copy.institutionalLead}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
