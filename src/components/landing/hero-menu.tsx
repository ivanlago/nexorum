"use client";

import { useEffect, useId, useState } from "react";
import type { SupportedLocale } from "@/i18n/locales";

type Item = { label: string; href: string };

export function HeroMenu({
  locale,
  iconSrc,
  buttonClassName,
  imgClassName,
}: {
  locale: SupportedLocale;
  iconSrc: string;
  buttonClassName?: string;
  imgClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const items: Item[] = [
    { label: "Home", href: `/${locale}` },
    { label: "Operações", href: "#operacoes" },
    { label: "Problema", href: "#problema" },
    { label: "Como aprende", href: "#como-aprende" },
    { label: "Camada decisória", href: "#camada-decisoria" },
    { label: "Institucional", href: "#institucional" },
    { label: "Contato", href: "#footer" },
  ];

  return (
    <>
      <button
        type="button"
        className={[
          "inline-flex cursor-pointer items-center justify-center transition-colors duration-200 hover:bg-[#081018]",
          buttonClassName,
        ]
          .filter(Boolean)
          .join(" ")}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={titleId}
        onClick={() => setOpen(true)}
      >
        <img alt="Menu" className={imgClassName ?? ""} src={iconSrc} />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-0">
            <div className="relative h-full w-full px-6 lg:px-0">
              <aside
                id={titleId}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`${titleId}-title`}
                className="absolute right-0 top-0 h-full w-[360px] max-w-full border-l border-[rgba(26,42,56,0.85)] bg-[#081018] p-8 shadow-[0px_24px_120px_rgba(0,0,0,0.55)]"
              >
                <div className="flex items-center justify-between">
                  <a
                    href={`/${locale}`}
                    className="-m-4 inline-flex items-center gap-2 p-4 transition-colors duration-200 hover:bg-[#081018]"
                    aria-label="Home"
                  >
                    <img alt="Nexorum" className="h-5 w-auto" src="/nexorum.png" />
                  </a>
                  <button
                    type="button"
                    className="inline-flex size-10 items-center justify-center border border-[rgba(26,42,56,0.85)] text-[color:var(--primitive-colors-gray-200)]"
                    aria-label="Fechar menu"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-[18px] leading-none">×</span>
                  </button>
                </div>

                <div id={`${titleId}-title`} className="sr-only">
                  Menu
                </div>

                <nav className="mt-10">
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item.href}>
                        <a
                          className="block rounded px-3 py-3 text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)] hover:bg-[rgba(26,42,56,0.35)]"
                          href={item.href}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
