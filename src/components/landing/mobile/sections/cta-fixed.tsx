import type { LandingDictionary } from "@/i18n/landing-dictionary";
import type { SupportedLocale } from "@/i18n/locales";
import { Button } from "@/components/ui/button";
import { getSpecialistHref } from "@/components/landing/sections/cta-primary";

export function MobileFixedCta({ dict, locale }: { dict: LandingDictionary; locale: SupportedLocale }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center pb-9">
      <Button
        as="a"
        className="w-[331px] min-w-[331px] max-w-[331px]"
        containerClassName="w-[331px]"
        leftClassName="w-[273px]"
        href={getSpecialistHref(locale)}
        rel="noreferrer"
        target="_blank"
      >
        {dict.common.talkToSpecialist}
      </Button>
    </div>
  );
}
