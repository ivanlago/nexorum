import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { SectionIndex } from "@/components/landing/sections/section-index";
import { HowItWorksLink } from "@/components/ui/how-it-works-link";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import type { SupportedLocale } from "@/i18n/locales";

const imgUsMap = "/mapa.png";

export function LandingSection06Institucional({ dict, locale }: { dict: LandingDictionary; locale: SupportedLocale }) {
  const copy = dict.section06 as any;
  const headingLines = (copy.heading?.split?.("\n") ?? []) as string[];

  return (
    <section id="institucional" className="relative w-full overflow-hidden pb-32 pt-0">
      <LandingSectionBackground />

      <div className="mx-auto w-full max-w-[1216px] px-6 lg:px-0">
        <div className="ml-auto max-w-[696px]">
          <div className="relative h-[149px] w-full">
            <div className="relative h-[55px] w-[696px]">
              <div className="absolute left-0 top-[7px] [font-family:var(--font-orbitron)] text-[14px] font-bold leading-[1.39] text-[color:var(--primitive-colors-primary-400)]">
                <SectionIndex value="05" />
              </div>
              <h2 className="absolute left-0 top-1/2 w-[696px] -translate-y-1/2 [font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[color:var(--primitive-colors-gray-200)] text-[24px] font-semibold uppercase leading-[0] tracking-[0.24px] text-transparent to-[128.98%] to-[rgba(167,184,198,0)]">
                {headingLines.map((line, idx) => (
                  <p key={idx} className="mb-0 leading-[1.6]">
                    {idx === 0 ? <span className="inline-block w-[56px]" /> : null}
                    {line}
                  </p>
                ))}
              </h2>
            </div>

            <div className="mt-10 ml-auto flex h-[54px] w-full max-w-[489px] flex-col justify-center text-[14px] font-light leading-[0] text-[color:var(--primitive-colors-gray-200)]">
              <p className="indent-[48px] leading-[1.6]">{copy.lead}</p>
            </div>
          </div>
        </div>

        <div className="relative mt-24 min-h-[545px]">
          <div className="relative mx-auto h-[545px] w-full max-w-[1008px] overflow-hidden bg-[var(--background)]">
            <LandingSectionBackground className="opacity-100" />
            <img
              alt=""
              className="pointer-events-none absolute left-1/2 top-[-46px] z-10 h-[686px] w-auto max-w-none -translate-x-1/2 opacity-70 mix-blend-lighten"
              src={imgUsMap}
            />
            <div className="pointer-events-none absolute left-1/2 top-[-46px] z-20 h-[686px] w-[1008px] -translate-x-1/2 bg-[rgba(108,181,255,0.15)] mix-blend-color" />
            <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-10 bg-gradient-to-b from-[var(--background)]/30 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-20 bg-gradient-to-t from-[var(--background)]/45 to-transparent" />
          </div>

          <div className="absolute left-0 top-[428px] z-10 flex w-[235px] flex-col gap-[55px]">
            <CtaPrimary label={dict.common.talkToSpecialist} locale={locale} />
            <HowItWorksLink href="#como-aprende">{dict.common.seeHowItWorks}</HowItWorksLink>
          </div>
        </div>

      </div>
    </section>
  );
}
