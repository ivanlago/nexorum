import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { Button } from "@/components/ui/button";

const specialistHref =
  "https://wa.me/5511932628256?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20produto%20Nexorum%20Aegis";

export function MobileFixedCta({ dict }: { dict: LandingDictionary }) {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[326px] -translate-x-1/2">
      <Button
        as="a"
        className="w-full"
        containerClassName="w-[334px]"
        leftClassName="w-[273px]"
        borderClassName="border border-[rgba(0,78,155,0.7)]"
        href={specialistHref}
        right={<img alt="" className="size-4 max-w-none" src="/button-image.svg" />}
        highlights={
          <>
            <span className="absolute left-[154px] top-0 h-px w-[119px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)]" />
            <span className="absolute left-[5px] top-[45px] h-px w-[98px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)]" />
          </>
        }
        rel="noreferrer"
        target="_blank"
      >
        {dict.common.talkToSpecialist}
      </Button>
    </div>
  );
}
