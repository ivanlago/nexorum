import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";

const imgMap = "/mapa.png";

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
    </section>
  );
}
