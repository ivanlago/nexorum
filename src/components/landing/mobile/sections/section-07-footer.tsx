import { LanguageSelector } from "@/components/landing/language-selector";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import type { SupportedLocale } from "@/i18n/locales";
import { Suspense } from "react";

const imgDivider = "https://www.figma.com/api/mcp/asset/cde66716-d2c7-4e82-8e4c-c9ce50556c9c";

const socialIcons = [
  { alt: "Instagram", src: "https://www.figma.com/api/mcp/asset/eeeea343-9539-45fd-ac2d-475672c85917" },
  { alt: "Facebook", src: "https://www.figma.com/api/mcp/asset/0d0632b3-5f7f-473b-9fc8-7d25b24a88cb" },
  { alt: "YouTube", src: "https://www.figma.com/api/mcp/asset/b8feab6a-9d74-451d-882b-f03c43e590d0" },
  { alt: "LinkedIn", src: "https://www.figma.com/api/mcp/asset/6544fb70-4d5b-4f7b-aec8-efe19b9ffdb1" },
];

export function MobileSection07Footer({ dict, locale }: { dict: LandingDictionary; locale: SupportedLocale }) {
  const copy = dict.footer as any;

  return (
    <footer className="relative overflow-hidden px-6 pb-12 pt-20">
      <LandingSectionBackground />
      <img alt="" className="h-px w-full opacity-60" src={imgDivider} />

      <div className="mt-12 flex items-center gap-2">
        <a href={`/${locale}`} aria-label="Home">
          <img alt="Nexorum" className="h-[20.8px] w-auto" src="/nexorum.png" />
        </a>
      </div>

      <p className="mt-6 max-w-[254px] text-[12px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
        {copy.brandBlurb}
      </p>

      <div className="mt-10">
        <img alt="" className="h-px w-full opacity-60" src={imgDivider} />
      </div>

      <img
        alt=""
        className="mt-10 w-full h-auto object-contain"
        src="/marca-dagua.png"
      />

      <div className="mt-10 space-y-10">
        <div>
          <div className="text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]">{copy.columns?.location?.title}</div>
          <div className="mt-4 text-[14px] font-normal leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
            {copy.columns?.location?.body}
          </div>
        </div>
        <div>
          <div className="text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]">{copy.columns?.service?.title}</div>
          <div className="mt-4 text-[14px] font-normal leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
            {copy.columns?.service?.body}
          </div>
        </div>
        <div>
          <div className="text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]">{copy.columns?.contact?.title}</div>
          <div className="mt-4 text-[14px] font-normal leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
            {copy.columns?.contact?.lines?.map?.((line: string, idx: number, arr: string[]) => (
              <span key={idx}>
                {line}
                {idx < arr.length - 1 ? <br /> : null}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <img alt="" className="h-px w-full opacity-40" src={imgDivider} />
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {socialIcons.map((s) => (
            <div
              key={s.alt}
              className="flex size-8 items-center justify-center bg-[color:var(--primitive-colors-gray-600)]"
            >
              <img alt={s.alt} className="max-h-[18px] max-w-[18px]" src={s.src} />
            </div>
          ))}
        </div>
        <Suspense fallback={<div className="h-6 w-10" aria-hidden />}>
          <LanguageSelector align="right" variant="footer" locale={locale} labels={dict.language.options} />
        </Suspense>
      </div>

      <div className="mt-12">
        <img alt="" className="h-px w-full opacity-40" src={imgDivider} />
      </div>

      <a className="mt-10 inline-flex items-center gap-3 text-[12px] text-[color:var(--primitive-colors-gray-200)]" href="#">
        <span className="inline-flex size-8 items-center justify-center bg-[color:var(--primitive-colors-gray-600)]">
          <span className="text-[12px]">↑</span>
        </span>
        {copy.backToTop}
      </a>

      <div className="mt-12">
        <img alt="" className="h-px w-full opacity-40" src={imgDivider} />
      </div>

      <div className="mt-12 text-[10px] text-[color:var(--primitive-colors-gray-200)]">
        {copy.copyright}
      </div>

      <div className="mt-12">
        <img alt="" className="h-px w-full opacity-40" src={imgDivider} />
      </div>

      <p className="mt-12 text-[10px] font-normal leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
        {copy.disclaimer}
      </p>

      <div className="mt-12">
        <img alt="" className="h-px w-full opacity-40" src={imgDivider} />
      </div>
    </footer>
  );
}
