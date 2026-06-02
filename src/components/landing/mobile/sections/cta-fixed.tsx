import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { Button } from "@/components/ui/button";

const imgCaret = "https://www.figma.com/api/mcp/asset/c86a4f5c-ed8a-45d4-bee2-14c48dca4050";

export function MobileFixedCta({ dict }: { dict: LandingDictionary }) {

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[326px] -translate-x-1/2">
      <Button
        className="w-full"
        containerClassName="w-[334px]"
        leftClassName="w-[273px]"
        borderClassName="border border-[rgba(0,78,155,0.7)]"
        right={<img alt="" className="size-4" src={imgCaret} />}
        highlights={
          <>
            <span className="absolute left-[154px] top-0 h-px w-[119px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)]" />
            <span className="absolute left-[5px] top-[45px] h-px w-[98px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)]" />
          </>
        }
      >
        {dict.common.talkToSpecialist}
      </Button>
    </div>
  );
}
