"use client";

import { useMemo, useState } from "react";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { SectionIndex } from "@/components/landing/sections/section-index";

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
  const comInfra = (copy?.tables?.com ?? []) as Row[];

  const rows = useMemo(() => ({ sem: semInfra, com: comInfra }), [semInfra, comInfra]);

  const tableGridCols = "grid-cols-[343px_593px_391px]";
  const hoverRowBg =
    "hover:bg-[linear-gradient(90deg,rgba(255,255,255,0)_40.865%,rgba(255,255,255,0.5)_100%),linear-gradient(90deg,#0B72B8_0%,#0B72B8_100%)]";
  const appearsIcons: Array<"db" | "blocks" | "briefcase" | "doc" | "calendar" | "bars"> = [
    "db",
    "blocks",
    "briefcase",
    "doc",
    "calendar",
    "bars",
  ];

  return (
    <section id="problema" className="relative w-full py-28">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto flex w-full max-w-[1216px] items-end justify-between px-6 lg:px-0">
          <a className="text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]" href="#">
            {copy.linkLabel} <span className="opacity-70">›</span>
          </a>
          <div className="w-full max-w-[696px] text-right">
            <h2 className="[font-family:var(--font-orbitron)] text-[24px] font-semibold uppercase leading-[1.6] tracking-[0.01em] text-[color:var(--primitive-colors-gray-200)]">
              {copy.heading?.split?.("\n")?.map?.((line: string, idx: number, arr: string[]) => (
                <span key={idx}>
                  {idx === 0 ? <SectionIndex value="02" className="mr-3 align-baseline" /> : null}
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

        <div className="mx-auto mt-20 w-full max-w-[1440px] px-6 lg:px-0">
          <div className="w-full border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] shadow-[0px_24px_120px_rgba(0,0,0,0.45)]">
            <div className="overflow-x-auto">
              <div className="min-w-[1437px]">
                <div
                  className={[
                    "grid items-center py-6",
                    tableGridCols,
                    "[font-family:var(--font-orbitron)] text-[12px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]",
                    "px-[110px]",
                  ].join(" ")}
                >
                  <div>{copy.tableHeaders?.problems}</div>
                  <div>{copy.tableHeaders?.appears}</div>
                  <div>{copy.tableHeaders?.impact}</div>
                </div>
                <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />

                {rows.sem.map((row, idx) => (
                  <div
                    key={row.problem}
                    className={[
                      "group relative w-full transition-colors",
                      hoverRowBg,
                    ].join(" ")}
                  >
                    <div className={["grid items-center py-7 px-[110px]", tableGridCols].join(" ")}>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex size-6 items-center justify-center rounded-full border border-[rgba(118,131,143,0.45)] text-[14px] text-[rgba(167,184,198,0.7)] group-hover:border-white/50 group-hover:text-white/90">
                          ×
                        </span>
                        <div className="[font-family:var(--font-orbitron)] text-[16px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)] group-hover:text-white">
                          {row.problem}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-[16px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)] group-hover:text-white">
                        <span className="text-[color:var(--primitive-colors-primary-400)] group-hover:text-white">
                          <TableIcon name={appearsIcons[idx] ?? "db"} />
                        </span>
                        <span className="w-[504px]">{row.appears}</span>
                      </div>
                      <div className="text-[16px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)] group-hover:text-white">
                        {row.impact}
                      </div>
                    </div>
                    <div className="h-px w-full bg-[rgba(118,131,143,0.14)]" />
                  </div>
                ))}

                <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />

                {rows.com.map((row, idx) => (
                  <div
                    key={`${row.problem}-com`}
                    className={[
                      "group relative w-full transition-colors",
                      hoverRowBg,
                    ].join(" ")}
                  >
                    <div className={["grid items-center py-7 px-[110px]", tableGridCols].join(" ")}>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex size-6 items-center justify-center rounded-full border border-[rgba(118,131,143,0.45)] text-[14px] text-[rgba(167,184,198,0.7)] group-hover:border-white/50 group-hover:text-white/90">
                          ✓
                        </span>
                        <div className="[font-family:var(--font-orbitron)] text-[16px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)] group-hover:text-white">
                          {row.problem}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-[16px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)] group-hover:text-white">
                        <span className="text-[color:var(--primitive-colors-primary-400)] group-hover:text-white">
                          <TableIcon name={appearsIcons[idx] ?? "db"} />
                        </span>
                        <span className="w-[504px]">{row.appears}</span>
                      </div>
                      <div className="text-[16px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)] group-hover:text-white">
                        {row.impact}
                      </div>
                    </div>
                    <div className="h-px w-full bg-[rgba(118,131,143,0.14)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
