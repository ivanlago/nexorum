import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { SectionIndex } from "@/components/landing/sections/section-index";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import type { SupportedLocale } from "@/i18n/locales";

export function LandingSection05CamadaDecisoria({ dict, locale }: { dict: LandingDictionary; locale: SupportedLocale }) {
  const copy = dict.section05 as any;
  const rows = (copy?.rows ?? []) as Array<{ not: string; why: string; does: string }>;
  const titleLines = (copy.heading?.split?.("\n") ?? []) as string[];
  const tableHeader = copy.tableHeaders ?? {};
  const divider = "h-px w-full bg-[rgba(118,131,143,0.25)]";
  const clippedDivider = "h-px w-full bg-[rgba(118,131,143,0.25)] lg:w-[1016px]";

  return (
    <section id="camada-decisoria" className="relative w-full overflow-hidden py-28">
      <LandingSectionBackground />
      <div className="w-full">
        <div className="relative w-full px-6 lg:px-0">
          <div className="relative mx-auto w-full max-w-[1440px]">
            <div className="lg:absolute lg:left-[112px] lg:top-0 lg:h-[158px] lg:w-[696px]">
              <div className="relative h-[55px] w-[696px]">
                <div className="absolute left-0 top-[7px] [font-family:var(--font-orbitron)] text-[14px] font-bold leading-[1.39] text-[color:var(--primitive-colors-primary-400)]">
                  <SectionIndex value="04" />
                </div>
                <h2 className="absolute left-0 top-1/2 w-[696px] -translate-y-1/2 [font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[color:var(--primitive-colors-gray-200)] text-[24px] font-semibold uppercase leading-[0] tracking-[0.24px] text-transparent to-[128.98%] to-[rgba(167,184,198,0)]">
                  {titleLines.map((line, idx) => (
                    <p key={idx} className="mb-0 leading-[1.6]">
                      {idx === 0 ? <span className="inline-block w-[56px]" /> : null}
                      {line}
                    </p>
                  ))}
                </h2>
              </div>
              <div className="mt-[49px] ml-auto flex h-[54px] w-[592px] flex-col justify-center text-[14px] font-light leading-[0] text-[color:var(--primitive-colors-gray-200)]">
                <p className="indent-[48px] leading-[1.6]">{copy.lead}</p>
              </div>
            </div>

            <div className="mt-12 lg:absolute lg:right-[112px] lg:top-[108px] lg:mt-0 lg:h-[595px] lg:w-[312px]">
              <div className="relative flex h-full flex-col justify-between border-[0.5px] border-[rgba(26,42,56,1)] bg-gradient-to-b from-[rgba(8,15,22,0.28)] to-[rgba(8,15,22,0.72)] px-8 py-10 shadow-[0px_24px_120px_rgba(0,0,0,0.45)]">
                <div className="flex flex-col items-end justify-center gap-6">
                  <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold leading-[1.39] text-[color:var(--primitive-colors-primary-400)] whitespace-nowrap">
                    {copy.whyDifferentLabel}
                  </div>
                  <div className="w-[110px] text-right text-[10px] font-light italic leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                    {copy.mobile?.whyDifferentHint}
                  </div>
                </div>

                <div className="space-y-10">
                  {copy.whyDifferent?.items?.map?.((it: any) => (
                    <div key={it?.title} className="space-y-4">
                      <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                        {it?.title}
                      </div>
                      <div className="text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                        <span className="inline-block indent-[48px]">{it?.description}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <CtaPrimary label={dict.common.talkToSpecialist} locale={locale} />
                </div>
            </div>

            <div className="mt-[88px] lg:mt-0 lg:pt-[246px]">
              <div className="w-full lg:w-[1328px]">
                <div className={divider} />

                <div className="relative mt-3 h-[7px] w-full [font-family:var(--font-orbitron)] text-[12px] font-semibold leading-none text-[color:var(--primitive-colors-gray-200)] whitespace-nowrap">
                  <div className="absolute left-[112px] top-[calc(50%+3px)] flex h-[12px] items-center -translate-y-1/2">
                    {tableHeader?.not}
                  </div>
                  <div className="absolute left-[359px] top-[calc(50%+3px)] flex h-[12px] items-center -translate-y-1/2">
                    {tableHeader?.why}
                  </div>
                  <div className="absolute left-[705px] top-[calc(50%+3px)] flex h-[12px] items-center -translate-y-1/2">
                    {tableHeader?.does}
                  </div>
                </div>

                <div className="mt-6 flex w-full flex-col">
                  <div className={divider} />

                  {rows.slice(0, 4).map((r, idx) => (
                    <div
                      key={r.not}
                      className={[
                        "w-full",
                        idx % 2 === 1 ? "bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16]" : "",
                      ].join(" ")}
                    >
                      <div className="flex flex-col gap-[32px]">
                        <div className={idx === 1 || idx === 2 ? clippedDivider : divider} />
                        <div className="relative h-[32px] w-full">
                          <div className="absolute left-[703px] top-1/2 w-[258px] -translate-y-1/2 text-[16px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                            {r.does}
                          </div>
                          <div className="absolute left-[112px] top-[4px] flex w-[209px] items-center gap-4">
                            <span className="inline-flex size-6 items-center justify-center rounded-full border border-[rgba(118,131,143,0.45)] text-[14px] text-[rgba(167,184,198,0.7)]">
                              ×
                            </span>
                            <span className="[font-family:var(--font-orbitron)] w-[219px] text-[16px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                              {r.not}
                            </span>
                          </div>
                          <div className="absolute left-[357px] top-[16px] w-[405px] -translate-y-1/2 text-[16px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                            {r.why}
                          </div>
                        </div>
                        <div className={idx === 0 || idx === 1 ? clippedDivider : divider} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
