import { LanguageSelector } from "@/components/landing/language-selector";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import type { SupportedLocale } from "@/i18n/locales";
import { Suspense } from "react";

const socialIcons = [
  { alt: "Instagram", src: "https://www.figma.com/api/mcp/asset/ac06e4f0-e754-4946-a6fc-af8a28f11695" },
  { alt: "Facebook", src: "https://www.figma.com/api/mcp/asset/89b57bb0-64e6-47cb-b9dc-2ff94babadc8" },
  { alt: "YouTube", src: "https://www.figma.com/api/mcp/asset/8b6c4bd8-bf72-4975-8881-c2790949824b" },
  { alt: "LinkedIn", src: "https://www.figma.com/api/mcp/asset/7e35ee1f-9196-45c6-b0cf-79ea77feba43" },
];

export function LandingSection07Footer({ dict, locale }: { dict: LandingDictionary; locale: SupportedLocale }) {
  const copy = dict.footer as any;

  return (
    <footer id="footer" className="relative w-full overflow-hidden pb-16 pt-10">
      <LandingSectionBackground />
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />

	        <div className="mx-auto mt-16 grid w-full max-w-[1216px] grid-cols-1 gap-12 px-6 lg:grid-cols-[244px_1fr] lg:gap-9 lg:px-0">
	          <div className="flex flex-col items-end gap-20">
	            <div className="w-full">
	              <div className="flex items-start gap-2">
	                <a href={`/${locale}`} aria-label="Home">
	                  <img alt="Nexorum" className="h-[20px] w-auto" src="/nexorum.png" />
	                </a>
	              </div>
              <p className="mt-20 ml-12 w-[197px] indent-12 text-[12px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
                {copy.brandBlurb}
              </p>
            </div>
          </div>

		          <div className="w-full">
		            <div className="mx-auto w-full lg:w-[936px]">
		              <img alt="" className="h-[101px] w-[936px] opacity-100 object-contain" src="/marca-dagua.png" />

		              <div className="mx-auto mt-10 w-full lg:w-[745px]">
		                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
		                <div>
		                  <div className="text-[12px] font-semibold text-[color:var(--primitive-colors-gray-200)]">{copy.columns?.location?.title}</div>
		                  <div className="mt-6 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
		                    {copy.columns?.location?.body}
		                  </div>
		                </div>
		                <div>
		                  <div className="text-[12px] font-semibold text-[color:var(--primitive-colors-gray-200)]">{copy.columns?.service?.title}</div>
		                  <div className="mt-6 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
		                    {copy.columns?.service?.body}
		                  </div>
		                </div>
		                <div>
		                  <div className="text-[12px] font-semibold text-[color:var(--primitive-colors-gray-200)]">{copy.columns?.contact?.title}</div>
		                  <div className="mt-6 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
		                    {copy.columns?.contact?.lines?.map?.((line: string, idx: number, arr: string[]) => (
		                      <span key={idx}>
		                        {line}
		                        {idx < arr.length - 1 ? <br /> : null}
		                      </span>
		                    ))}
		                  </div>
		                </div>
		              </div>
		              </div>
		            </div>
		          </div>
		        </div>

        <div className="mx-auto mt-16 w-full max-w-[1216px] px-6 lg:px-0">
          <div className="h-px w-full bg-[rgba(118,131,143,0.18)]" />
          <div className="mt-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex items-center gap-4">
              {socialIcons.map((s) => (
                <div
                  key={s.alt}
                  className="flex size-8 items-center justify-center bg-[color:var(--primitive-colors-gray-600)]"
                >
                  <img alt={s.alt} className="max-h-[18px] max-w-[18px]" src={s.src} />
                </div>
              ))}
              <div className="ml-4">
                <Suspense fallback={<div className="h-6 w-10" aria-hidden />}>
                  <LanguageSelector variant="footer" locale={locale} labels={dict.language.options} />
                </Suspense>
              </div>
            </div>
            <div className="text-[10px] text-[color:var(--primitive-colors-gray-300)]">
              {copy.copyright}
            </div>
            <a className="text-[12px] text-[color:var(--primitive-colors-gray-300)]" href="#">
              {copy.backToTop}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 w-full">
          <div className="h-px w-full bg-[rgba(118,131,143,0.18)]" />
          <p className="mx-auto mt-10 w-full max-w-[1216px] px-6 text-[10px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-300)] lg:px-0">
            {copy.disclaimer}
          </p>
          <div className="mx-auto mt-10 h-px w-full bg-[rgba(118,131,143,0.18)]" />
        </div>
      </div>
    </footer>
  );
}
