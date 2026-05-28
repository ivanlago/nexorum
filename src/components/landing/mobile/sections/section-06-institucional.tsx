import type { LandingDictionary } from "@/i18n/landing-dictionary";

const imgMap = "https://www.figma.com/api/mcp/asset/13b9d590-2e00-44b0-b0c6-776a838452a9";
const imgPillarsTexture = "https://www.figma.com/api/mcp/asset/ffdcbdf4-d216-41ba-b416-d90144b76878";
const imgTexture = "https://www.figma.com/api/mcp/asset/c0c84018-5baf-4c9b-9013-9c74354ead76";
const imgDivider = "https://www.figma.com/api/mcp/asset/23d2bdc2-1217-4366-9242-868d1d2034f5";

export function MobileSection06Institucional({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section06 as any;

  return (
    <section className="px-6 pb-24 pt-10">
      <div className="[font-family:var(--font-orbitron)] text-[10px] font-bold text-[color:var(--primitive-colors-primary-400)]">
        [ 05 ]
      </div>
      <h2 className="mt-3 [font-family:var(--font-orbitron)] text-[18px] font-semibold uppercase leading-[1.6] text-[rgba(195,210,218,0.95)]">
        {copy.heading}
      </h2>
      <p className="mt-8 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
        <span className="inline-block indent-[39px]">
          {copy.lead}
        </span>
      </p>

      <div className="relative mt-14 h-[175px] w-full overflow-hidden">
        <img alt="" className="h-full w-full object-cover opacity-70 mix-blend-lighten" src={imgMap} />
        <div className="absolute left-1/2 top-[calc(50%+0px)] h-[235px] w-[385px] -translate-x-1/2 -translate-y-1/2 bg-[rgba(108,181,255,0.12)] mix-blend-color" />
      </div>

      <div className="mt-16">
        <h3 className="[font-family:var(--font-orbitron)] text-[16px] font-semibold uppercase leading-[1.6] text-[rgba(195,210,218,0.95)]">
          {copy.aboutHeading?.replaceAll?.("\n", " ")}
        </h3>
        <p className="mt-6 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300,#76838f)]">
          <span className="inline-block indent-[39px]">
            {copy.aboutLead}
          </span>
        </p>
      </div>

      <div className="mt-16 relative overflow-hidden">
        <div className="absolute left-0 top-[-84px] h-[168px] w-full">
          <img alt="" className="h-full w-full object-cover opacity-80 mix-blend-lighten" src={imgPillarsTexture} />
        </div>
        <div className="rounded-full absolute left-0 top-[-44px] h-[370px] w-full bg-[rgba(108,181,255,0.05)] blur-[50px]" />
        <div className="relative border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-8 py-10">
          <div className="flex items-start justify-between">
            <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold text-[color:var(--primitive-colors-primary-400)]">
              {copy.pillarsLabel}
            </div>
            <div className="w-[173px] text-right text-[10px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
              {copy.pillarsLead}
            </div>
          </div>
          <div className="absolute right-[-36px] top-[-74px] h-[138px] w-[237px] opacity-30">
            <img alt="" className="absolute inset-0 size-full object-cover" src={imgTexture} />
          </div>

          <div className="mt-10 flex justify-center">
            <img alt="" className="h-px w-full opacity-60" src={imgDivider} />
          </div>

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
    </section>
  );
}
