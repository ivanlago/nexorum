import type { LandingDictionary } from "@/i18n/landing-dictionary";
import type { SupportedLocale } from "@/i18n/locales";
import { Button } from "@/components/ui/button";
import { getSpecialistHref } from "@/components/landing/sections/cta-primary";

export function MobileFixedCta({ dict, locale }: { dict: LandingDictionary; locale: SupportedLocale }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-6 pb-9">
      <Button
        as="a"
        className="w-[calc(100vw-48px)] min-w-[331px] max-w-[calc(100vw-48px)]"
        containerClassName="w-full"
        leftClassName="flex-1 justify-start"
        labelClassName="w-full text-left"
        rightClassName="w-[46px] shrink-0"
        href={getSpecialistHref(locale)}
        rel="noreferrer"
        target="_blank"
      >
        {dict.common.talkToSpecialist}
      </Button>
    </div>
  );
}
