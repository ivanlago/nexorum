import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { SectionIndex } from "@/components/landing/sections/section-index";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import type { LandingDictionary } from "@/i18n/landing-dictionary";

export function LandingSection05CamadaDecisoria({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section05 as any;
  const rows = (copy?.rows ?? []) as Array<{ not: string; why: string; does: string }>;

  return (
    <section id="camada-decisoria" className="relative w-full overflow-hidden py-28">
      <LandingSectionBackground />
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="px-6 lg:px-0">
          <div className="mx-auto w-full max-w-[1216px]">
            <div className="w-full max-w-[696px] text-right lg:ml-[112px]">
              <h2 className="[font-family:var(--font-orbitron)] text-[24px] font-semibold uppercase leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                {copy.heading?.split?.("\n")?.map?.((line: string, idx: number, arr: string[]) => (
                  <span key={idx}>
                    {idx === 0 ? <SectionIndex value="04" className="mr-3 align-baseline" /> : null}
                    {line}
                    {idx < arr.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h2>
              <p className="mt-10 text-[14px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                <span className="inline-block indent-12">
                  {copy.lead}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-[246px]">
          <div className="border-t border-[rgba(26,42,56,0.9)]" />
          <div className="mx-auto grid w-full max-w-[1216px] grid-cols-1 gap-10 px-6 pt-8 lg:grid-cols-[1fr_450px] lg:px-0">
            <div>
              <div className="grid grid-cols-[247px_346px_1fr] px-0 pb-4 text-[12px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
                <div className="pl-0">{copy.tableHeaders?.not}</div>
                <div>{copy.tableHeaders?.why}</div>
                <div>{copy.tableHeaders?.does}</div>
              </div>
              <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />
              {rows.map((r) => (
                <div key={r.not}>
                  <div className="grid grid-cols-[247px_346px_1fr] gap-0 py-6 text-[14px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex size-6 items-center justify-center rounded-full border border-[rgba(118,131,143,0.45)] text-[14px] text-[rgba(167,184,198,0.7)]">
                        ×
                      </span>
                      <span>{r.not}</span>
                    </div>
                    <div className="text-[color:var(--primitive-colors-gray-300)]">{r.why}</div>
                    <div>{r.does}</div>
                  </div>
                  <div className="h-px w-full bg-[rgba(118,131,143,0.14)]" />
                </div>
              ))}
            </div>

            <div className="relative border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.55)] to-[#080f16] px-8 py-10 shadow-[0px_24px_120px_rgba(0,0,0,0.45)]">
              <div className="text-right [font-family:var(--font-orbitron)] text-[12px] font-bold text-[color:var(--primitive-colors-primary-400)]">
                {copy.whyDifferentLabel}
              </div>
              <div className="mt-6 space-y-7">
                <div>
                  <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
                    {copy.whyDifferent?.items?.[0]?.title}
                  </div>
                  <div className="mt-2 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                    {copy.whyDifferent?.items?.[0]?.description}
                  </div>
                </div>
                <div>
                  <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
                    {copy.whyDifferent?.items?.[1]?.title}
                  </div>
                  <div className="mt-2 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                    {copy.whyDifferent?.items?.[1]?.description}
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <CtaPrimary label={dict.common.talkToSpecialist} />
              </div>
            </div>
          </div>
          <div className="mt-12 border-b border-[rgba(26,42,56,0.9)]" />
        </div>
      </div>
    </section>
  );
}
