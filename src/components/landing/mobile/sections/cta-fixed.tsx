import type { LandingDictionary } from "@/i18n/landing-dictionary";

const imgCaret = "https://www.figma.com/api/mcp/asset/c86a4f5c-ed8a-45d4-bee2-14c48dca4050";

export function MobileFixedCta({ dict }: { dict: LandingDictionary }) {

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[326px] -translate-x-1/2">
      <button className="relative h-[46px] w-full" type="button">
        <span className="absolute left-[-4px] top-[-4px] flex w-[334px] gap-1 border border-[rgba(0,78,155,0.7)] p-1">
          <span className="flex w-[273px] items-center bg-gradient-to-r from-[#00619b] to-[#5092d3] px-[18px] py-[18px] shadow-[0px_4px_30px_rgba(38,90,127,0.73)]">
            <span className="whitespace-nowrap text-[14px] font-medium leading-none text-white">{dict.common.talkToSpecialist}</span>
          </span>
          <span className="flex items-center bg-gradient-to-r from-[#5092d3] to-[#00619b] px-[15px] py-[15px] shadow-[0px_4px_30px_rgba(38,90,127,0.73)]">
            <img alt="" className="size-4" src={imgCaret} />
          </span>
        </span>
        <span className="absolute left-[154px] top-0 h-px w-[119px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)]" />
        <span className="absolute left-[5px] top-[45px] h-px w-[98px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)]" />
      </button>
    </div>
  );
}
