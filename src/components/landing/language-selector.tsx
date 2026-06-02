"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { supportedLocales, type SupportedLocale } from "@/i18n/locales";

const imgLanguageIcon = "/globo.png";
const imgFlagUs = "/eua.png";
const imgFlagBr = "/bra.png";

function getLocaleLabel(locale: SupportedLocale) {
  return locale === "pt-BR" ? "PT" : "EN";
}

function stripLocalePrefix(pathname: string) {
  for (const locale of supportedLocales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1) || "/";
  }
  return pathname;
}

export function LanguageSelector({
  align,
  variant = "header",
  locale,
  labels,
}: {
  align?: "left" | "center" | "right";
  variant?: "header" | "footer";
  locale: SupportedLocale;
  labels: { ptBR: string; enUS: string };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const currentLabel = getLocaleLabel(locale);
  const menuAlign = align ?? (variant === "header" ? "center" : "left");

  const options = useMemo(
    () => [
      {
        locale: "pt-BR" as const,
        label: labels.ptBR,
        flagSrc: imgFlagBr,
        fontClass: "font-light",
      },
      {
        locale: "en-US" as const,
        label: labels.enUS,
        flagSrc: imgFlagUs,
        fontClass: "font-normal",
      },
    ],
    [labels.enUS, labels.ptBR],
  );

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!open) return;
      const target = event.target as Node | null;
      if (target && rootRef.current && !rootRef.current.contains(target)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (!open) return;
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function switchLocale(nextLocale: SupportedLocale) {
    const base = stripLocalePrefix(pathname);
    const query = searchParams.toString();
    const href = `/${nextLocale}${base === "/" ? "" : base}${query ? `?${query}` : ""}`;
    router.replace(href);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={[
          "flex items-center gap-2 text-[color:var(--primitive-colors-gray-200)]",
          variant === "footer" ? "text-[14px]" : "",
        ].join(" ")}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {variant === "header" ? <img alt="" className="size-6" src={imgLanguageIcon} /> : null}
        <span className="text-[14px] font-medium leading-[1.4]">{currentLabel}</span>
        <span className="inline-flex size-4 items-center justify-center opacity-70">
          <span className="rotate-90">
            <svg aria-hidden="true" className="size-4" viewBox="0 0 16 16">
              <path d="M6 3.5 10.5 8 6 12.5l-1-1L8.5 8 5 4.5l1-1Z" fill="currentColor" />
            </svg>
          </span>
        </span>
      </button>

      {open ? (
        <div
          role="menu"
          className={[
            "absolute top-full z-50 mt-3 w-[158px] bg-[#081018] p-4 shadow-[0px_24px_120px_rgba(0,0,0,0.55)]",
            menuAlign === "right" ? "right-0" : menuAlign === "center" ? "left-1/2 -translate-x-1/2" : "left-0",
          ].join(" ")}
        >
          <div className="flex flex-col gap-4">
            {options.map((opt) => (
            <button
              key={opt.locale}
              type="button"
              role="menuitem"
              className={[
                "flex w-full items-center gap-2 text-left text-[12px] leading-[1.6] text-[color:var(--primitive-colors-gray-200)]",
                opt.fontClass,
                opt.locale === locale ? "opacity-100" : "opacity-90 hover:opacity-100",
              ].join(" ")}
              onClick={() => switchLocale(opt.locale)}
            >
              <span className="relative h-[17px] w-[24px] overflow-hidden">
                <img alt="" className="absolute inset-0 h-full w-full object-cover" src={opt.flagSrc} />
              </span>
              <span>{opt.label}</span>
            </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
