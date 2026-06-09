import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import { HowItWorksLink } from "@/components/ui/how-it-works-link";

const imgWhyDifferentTexture = "/figma-assets/38242fdd-85b2-4adf-b496-71a90066a7fc.svg";

type Row = { not: string; why: string; does: string };

export function MobileSection05CamadaDecisoria({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section05 as any;
  const rows = (copy?.rows ?? []) as Row[];
  const tableHeader = copy.tableHeaders ?? {};
  const mobileHeading = String(copy.heading ?? "").replaceAll("\n", " ");

  return (
    <section className="relative overflow-hidden px-6 pb-[10px] pt-[10px]">
      <LandingSectionBackground />
      <div>
        <h2 className="w-[237px] [font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold uppercase leading-[1.6] text-[18px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.18px]">
          <span className="mr-3 inline-block align-baseline text-[10px] font-bold leading-[1.6] text-[color:var(--primitive-colors-primary-400)]">
            [ 04 ]
          </span>
          <span className="inline">
            {mobileHeading}
          </span>
        </h2>
      </div>
      <p className="mt-8 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
        <span className="inline-block indent-[39px]">
          {copy.lead}
        </span>
      </p>
      <HowItWorksLink className="mt-10 px-[37px]" href="#como-aprende">
        {dict.common.seeHowItWorks}
      </HowItWorksLink>

      <div
        className={[
          "mt-14 -mx-6 overflow-x-auto",
          "[-webkit-overflow-scrolling:touch]",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        ].join(" ")}
      >
        <div className="min-w-[973px]">
          <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />
          <div className="grid grid-cols-[250px_330px_369px] px-6 py-4 [font-family:var(--font-orbitron)] text-[10px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
            <div>{tableHeader?.not}</div>
            <div>{tableHeader?.why}</div>
            <div>{tableHeader?.does}</div>
          </div>

          <div className="flex flex-col">
            {rows.map((r, idx) => (
              <div
                key={r.not}
                className={[
                  "relative",
                  idx % 2 === 0 ? "bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16]" : "bg-[#05090d]",
                ].join(" ")}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[rgba(118,131,143,0.18)]" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-[rgba(118,131,143,0.18)]" />

                {idx % 2 === 0 ? (
                  <>
                    <div className="pointer-events-none absolute left-0 top-0 h-[82px] w-[196px] overflow-hidden opacity-20">
                      <div className="absolute left-[-8px] top-[-30px] h-[58px] w-[90px] rounded-full bg-[radial-gradient(circle,rgba(118,131,143,0.24)_0.8px,transparent_0.8px)] [background-size:8px_8px]" />
                      <div className="absolute left-[-4px] top-[14px] h-[68px] w-[202px] rounded-full bg-[radial-gradient(circle,rgba(118,131,143,0.18)_0.8px,transparent_0.8px)] [background-size:8px_8px]" />
                    </div>
                    <div className="pointer-events-none absolute right-0 top-0 h-[82px] w-[196px] overflow-hidden opacity-20">
                      <div className="absolute right-[-8px] top-[-30px] h-[58px] w-[90px] rounded-full bg-[radial-gradient(circle,rgba(118,131,143,0.24)_0.8px,transparent_0.8px)] [background-size:8px_8px]" />
                      <div className="absolute right-[-4px] top-[14px] h-[68px] w-[202px] rounded-full bg-[radial-gradient(circle,rgba(118,131,143,0.18)_0.8px,transparent_0.8px)] [background-size:8px_8px]" />
                    </div>
                  </>
                ) : null}

                <div className="grid grid-cols-[250px_330px_369px] items-center gap-0 px-6 py-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-[rgba(167,184,198,0.65)] text-[10px] leading-none text-[rgba(167,184,198,0.85)]">
                      ×
                    </span>
                    <span className="[font-family:var(--font-orbitron)] text-[14px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                      {r.not}
                    </span>
                  </div>
                  <div className="pr-6 text-[14px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                    {r.why}
                  </div>
                  <div className="pr-8 text-[14px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                    {r.does}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

	        <div className="relative mt-16 overflow-hidden border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-8 py-10">
	          <div className="flex flex-col gap-10">
              <div className="relative flex w-full flex-col items-end gap-6">
                <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold leading-[1.39] text-[color:var(--primitive-colors-primary-400)] whitespace-nowrap">
	                {copy.whyDifferentLabel}
	              </div>
                <div className="relative h-[23px] w-full">
                  <div className="absolute right-0 top-1/2 w-[133px] -translate-y-1/2 text-right text-[10px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
	                  {copy.mobile?.whyDifferentHint}
	                </div>
                  <div className="pointer-events-none absolute left-[44px] top-[-74px] h-[138px] w-[237px] opacity-30">
                    <img
                      alt=""
                      className="absolute left-[-5.14px] top-[7px] h-[131px] w-[430.246px] max-w-none -scale-y-100 rotate-180"
                      src={imgWhyDifferentTexture}
                    />
                  </div>
                </div>
	            </div>
	          <div className="h-px w-[calc(100%+64px)] -mx-8 bg-[rgba(118,131,143,0.25)]" />
            </div>
	          <div className="mt-10 space-y-8">
            <div>
              <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
              {copy.whyDifferent?.items?.[0]?.title}
              </div>
              <div className="mt-3 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
              {copy.whyDifferent?.items?.[0]?.description}
              </div>
            </div>
            <div>
              <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
              {copy.whyDifferent?.items?.[1]?.title}
              </div>
              <div className="mt-3 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
              {copy.whyDifferent?.items?.[1]?.description}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
