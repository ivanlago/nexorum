import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { Button } from "@/components/ui/button";

const specialistHref =
  "https://wa.me/5511932628256?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20produto%20Nexorum%20Aegis";

export function MobileFixedCta({ dict }: { dict: LandingDictionary }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center pb-9">
      <Button
        as="a"
        className="w-[331px] min-w-[331px] max-w-[331px]"
        containerClassName="w-[331px]"
        leftClassName="w-[273px]"
        href={specialistHref}
        rel="noreferrer"
        target="_blank"
      >
        {dict.common.talkToSpecialist}
      </Button>
    </div>
  );
}
