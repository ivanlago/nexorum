"use client";

import { useMemo, useState } from "react";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { SectionIndex } from "@/components/landing/sections/section-index";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import { LandingBenefitsMarquee } from "@/components/landing/landing-benefits-marquee";

type Row = {
  problem: string;
  appears: string;
  impact: string;
};

function TableIcon({ name, className = "" }: { name: "db" | "blocks" | "briefcase" | "doc" | "calendar" | "bars"; className?: string }) {
  const common = { className: ["size-8", className].join(" "), "aria-hidden": true, viewBox: "0 0 32 32" } as const;

  switch (name) {
    case "db":
      return (
        <svg {...common} fill="none">
          <path d="M7 10c0 2.2 4 4 9 4s9-1.8 9-4-4-4-9-4-9 1.8-9 4Z" stroke="currentColor" strokeWidth="2" />
          <path d="M7 10v6c0 2.2 4 4 9 4s9-1.8 9-4v-6" stroke="currentColor" strokeWidth="2" />
          <path d="M7 16v6c0 2.2 4 4 9 4s9-1.8 9-4v-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "blocks":
      return (
        <svg {...common} fill="none">
          <path d="M7 10h6v6H7v-6Zm12 0h6v6h-6v-6ZM13 16h6v6h-6v-6Z" stroke="currentColor" strokeWidth="2" />
          <path d="M13 13h6M16 16v-3M10 16v6M22 16v6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common} fill="none">
          <path
            d="M10 10V9c0-1.7 1.3-3 3-3h6c1.7 0 3 1.3 3 3v1"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M6 12h20v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V12Z" stroke="currentColor" strokeWidth="2" />
          <path d="M6 18h20" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common} fill="none">
          <path d="M10 6h9l5 5v15a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" />
          <path d="M19 6v6h6" stroke="currentColor" strokeWidth="2" />
          <path d="M12 16h10M12 20h10M12 24h8" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common} fill="none">
          <path d="M10 6v4M22 6v4" stroke="currentColor" strokeWidth="2" />
          <path d="M8 10h16v16a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10Z" stroke="currentColor" strokeWidth="2" />
          <path d="M8 14h16" stroke="currentColor" strokeWidth="2" />
          <path d="M12 18h4M12 22h4M18 18h4" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "bars":
      return (
        <svg {...common} fill="none">
          <path d="M12 26V14M16 26V10M20 26V18" stroke="currentColor" strokeWidth="2" />
          <path d="M10 26h12" stroke="currentColor" strokeWidth="2" />
          <path d="M16 6c2.2 0 4 1.8 4 4v0" stroke="currentColor" strokeWidth="2" />
          <path d="M16 6c-2.2 0-4 1.8-4 4v0" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
  }
}

export function LandingSection03Problema({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section03 as any;
  const semInfra = (copy?.tables?.sem ?? []) as Row[];

  const rows = useMemo(() => semInfra, [semInfra]);
  const headingLines = (copy.heading?.split?.("\n") ?? []) as string[];

  const tableGridCols = "grid-cols-[110px_347px_589px_281px_110px]";
  const hoverRowBg =
    "after:content-[''] after:absolute after:inset-0 after:z-0 after:pointer-events-none after:bg-[linear-gradient(90deg,rgba(255,255,255,0)_40.865%,rgba(255,255,255,0.5)_100%),linear-gradient(90deg,#0B72B8_0%,#0B72B8_100%)] after:opacity-0 after:transition-opacity after:duration-600 after:ease-in-out after:delay-320 hover:after:delay-120 hover:after:opacity-100";
  const hoverRowText = "transition-colors duration-600 ease-in-out delay-320 hover:delay-120";
  const appearsIcons: Array<"db" | "blocks" | "briefcase" | "doc" | "calendar" | "bars"> = [
    "db",
    "blocks",
    "briefcase",
    "doc",
    "calendar",
    "bars",
  ];

  const benefits = [
    "Prazo recuperável",
    "Margem protegida",
    "Evidência rastreável",
    "Decisão antecipada",
    "Dados integrados",
    "Ação por responsável",
    "Governança auditável",
  ] as const;

  return (
    <section id="problema" className="relative w-full overflow-hidden pb-0 pt-6">
      <LandingSectionBackground />
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto w-full max-w-[1216px] px-6 lg:px-0">
          <div className="ml-[520px]">
            <h2 className="[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[color:var(--primitive-colors-gray-200)] font-semibold leading-[0] text-[24px] text-transparent to-[128.98%] to-[rgba(167,184,198,0)] tracking-[0.24px] uppercase whitespace-pre-wrap">
              {headingLines.map((line, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? "mb-0 flex items-baseline justify-start gap-3 leading-[1.6]" : "mb-0 leading-[1.6]"}
                >
                  {idx === 0 ? <SectionIndex value="02" className="shrink-0" /> : null}
                  {line}
                </p>
              ))}
            </h2>
          </div>

          <div className="flex items-end justify-between">
            <a className="text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]" href="#">
              {copy.linkLabel} <span className="opacity-70">›</span>
            </a>
            <div className="ml-auto max-w-[696px] text-left">
              <p className="mx-auto mt-10 max-w-[592px] text-left text-[14px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {copy.lead}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 w-full max-w-[1440px] px-6 lg:px-0">
          <div className="w-full border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] shadow-[0px_24px_120px_rgba(0,0,0,0.45)]">
            <div className="overflow-x-auto">
              <div className="min-w-[1437px]">
                <div
                  className={[
                    "grid h-[42px] items-center bg-gradient-to-b from-[rgba(0,0,0,0.42)] to-[rgba(0,0,0,0.18)]",
                    tableGridCols,
                    "[font-family:var(--font-orbitron)] text-[12px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]",
                  ].join(" ")}
                >
                  <div className="col-start-2">{copy.tableHeaders?.problems}</div>
                  <div className="col-start-3">{copy.tableHeaders?.appears}</div>
                  <div className="col-start-4">{copy.tableHeaders?.impact}</div>
                </div>
                <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />

                {rows.map((row, idx) => (
                  <div
                    key={row.problem}
                    className={[
                      "group relative isolate w-full",
                      // In "Camada decisória", the zebra contrast comes from the row highlight background
                      // over the table container background, not from two competing row backgrounds.
                      idx % 2 === 1 ? "bg-gradient-to-b from-[rgba(0,0,0,0.42)] to-[rgba(0,0,0,0.18)]" : "",
                      hoverRowBg,
                    ].join(" ")}
                  >
                    <div className={["relative z-10 grid h-[97px] items-center", tableGridCols].join(" ")}>
                      <div className="col-start-2 flex items-center gap-4">
                        <span
                          className={[
                            "inline-flex size-6 items-center justify-center rounded-full border border-[rgba(118,131,143,0.45)] text-[14px] text-[rgba(167,184,198,0.7)]",
                            hoverRowText,
                            "group-hover:border-white/50 group-hover:text-white/90",
                          ].join(" ")}
                        >
                          ×
                        </span>
                        <div
                          className={[
                            "[font-family:var(--font-orbitron)] text-[16px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]",
                            hoverRowText,
                            "group-hover:text-white",
                          ].join(" ")}
                        >
                          {row.problem}
                        </div>
                      </div>
                      <div
                        className={[
                          "col-start-3 flex items-center gap-4 text-[16px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)]",
                          hoverRowText,
                          "group-hover:text-white",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "text-[color:var(--primitive-colors-primary-400)]",
                            hoverRowText,
                            "group-hover:text-white",
                          ].join(" ")}
                        >
                          <TableIcon name={appearsIcons[idx] ?? "db"} />
                        </span>
                        <span className="w-[504px]">{row.appears}</span>
                      </div>
                      <div
                        className={[
                          "col-start-4 text-[16px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)]",
                          hoverRowText,
                          "group-hover:text-white",
                        ].join(" ")}
                      >
                        {row.impact}
                      </div>
                    </div>
                    <div className="relative z-10 h-px w-full bg-[rgba(118,131,143,0.14)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <LandingBenefitsMarquee className="mt-20" labels={benefits} />
      </div>
    </section>
  );
}
