import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";

const imgInstitutionalMap = "/figma-assets/mobile-institutional-map.png";

export function MobileSection06Institucional({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section06 as any;

  return (
    <section id="institucional" className="relative mt-[78px] overflow-hidden px-6 pb-0 pt-[10px]">
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

      <div className="relative mt-[45px] h-[235px] w-full overflow-hidden">
        <img
          alt=""
          className="absolute inset-x-0 top-0 h-[calc(100%+36px)] w-full object-cover object-top"
          src={imgInstitutionalMap}
        />
      </div>
    </section>
  );
}
