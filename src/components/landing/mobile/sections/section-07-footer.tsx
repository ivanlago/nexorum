import { LanguageSelector } from "@/components/landing/language-selector";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import type { SupportedLocale } from "@/i18n/locales";
import { Suspense } from "react";

const footerDividerClassName = "-mx-6 h-[0.5px] bg-[rgba(118,131,143,0.25)]";

const socialIcons = [
  { alt: "Instagram", src: "/instagram.svg" },
  { alt: "Facebook", src: "/facebook.svg" },
  { alt: "YouTube", src: "/youtube.svg" },
  { alt: "LinkedIn", src: "/linkedin.svg" },
];

export function MobileSection07Footer({ dict, locale }: { dict: LandingDictionary; locale: SupportedLocale }) {
  const copy = dict.footer as any;

  return (
    <footer className="relative overflow-hidden px-6 pb-0 pt-[40px]">
      <LandingSectionBackground />
      <div aria-hidden className={footerDividerClassName} />

      <div className="mt-12 flex items-center gap-2">
        <a
          href={`/${locale}`}
          aria-label="Home"
          className="-m-4 inline-flex items-center p-4 transition-colors duration-200 hover:bg-[#081018]"
        >
          <img alt="Nexorum" className="h-[20.8px] w-auto" src="/nexorum.png" />
        </a>
      </div>

      <p className="mt-12 max-w-[254px] text-[12px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
        {copy.brandBlurb}
      </p>

      <div className="mt-12">
        <div aria-hidden className={footerDividerClassName} />
      </div>

      <div className="mt-12 mb-12">
        <img alt="" className="block h-auto w-full object-contain" src="/marca-dagua.png" />
      </div>

      <div className="space-y-10">
        <div>
          <div className="text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]">{copy.columns?.location?.title}</div>
          <div className="mt-4 max-w-[248px] text-[12px] font-normal leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
            <span className="inline-block indent-[30px]">
              {copy.columns?.location?.body}
            </span>
          </div>
        </div>
        <div>
          <div className="text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]">{copy.columns?.service?.title}</div>
          <div className="mt-4 max-w-[248px] text-[12px] font-normal leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
            <span className="inline-block indent-[30px]">
              {copy.columns?.service?.body}
            </span>
          </div>
        </div>
        <div>
          <div className="text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]">{copy.columns?.contact?.title}</div>
          <div className="mt-4 max-w-[248px] text-[12px] font-normal leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
            <span className="inline-block indent-[30px]">
              {copy.columns?.contact?.lines?.map?.((line: string, idx: number, arr: string[]) => (
                <span key={idx}>
                {line}
                {idx < arr.length - 1 ? <br /> : null}
              </span>
              ))}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div aria-hidden className={footerDividerClassName} />
      </div>

      <div className="mt-12 flex items-center justify-between">
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
        <div aria-hidden className={footerDividerClassName} />
      </div>

      <a className="mt-12 inline-flex items-center gap-3 text-[12px] text-[color:var(--primitive-colors-gray-200)]" href="#">
        <span className="inline-flex size-8 items-center justify-center bg-[color:var(--primitive-colors-gray-600)]">
          <img alt="" className="block size-8" src="/seta-cima.svg" />
        </span>
        {copy.backToTop}
      </a>

      <div className="mt-12">
        <div aria-hidden className={footerDividerClassName} />
      </div>

      <div className="mt-12 text-[10px] text-[color:var(--primitive-colors-gray-200)]">
        {copy.copyright}
      </div>

      <div className="mt-12">
        <div aria-hidden className={footerDividerClassName} />
      </div>

      <p className="mt-12 text-[10px] font-normal leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
        {copy.disclaimer}
      </p>

      <div className="mt-12">
        <div aria-hidden className={footerDividerClassName} />
      </div>
    </footer>
  );
}
