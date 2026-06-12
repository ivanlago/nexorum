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
  const comInfra = (copy?.tables?.com ?? []) as Row[];

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

  return (
    <section id="problema" className="relative w-full overflow-hidden pb-0 pt-5">
      <LandingSectionBackground />
      <div className="w-full">
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
            <a className="text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]" href="#como-aprende">
              {copy.linkLabel} <span className="opacity-70">›</span>
            </a>
            <div className="ml-auto max-w-[696px] text-left">
              <p className="mx-auto mt-10 max-w-[592px] text-left text-[14px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {copy.lead}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-[88px] w-full max-w-[1440px] px-6 lg:px-0">
          <div className="w-full border-y border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] shadow-[0px_24px_120px_rgba(0,0,0,0.45)]">
            <div className="overflow-x-auto">
              <div className="relative min-w-[1437px]">
                <div className="relative w-full">
                  <div
                    className={[
                      "h-[42px] w-full bg-gradient-to-b from-[rgba(0,0,0,0.42)] to-[rgba(0,0,0,0.18)]",
                      "[font-family:var(--font-orbitron)] text-[12px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]",
                    ].join(" ")}
                  >
                    <div className={["mx-auto grid h-full min-w-[1437px] max-w-[1437px] items-center", tableGridCols].join(" ")}>
                      <div className="col-start-2">{copy.tableHeaders?.problems}</div>
                      <div className="col-start-3">{copy.tableHeaders?.appears}</div>
                      <div className="col-start-4">{copy.tableHeaders?.impact}</div>
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 top-[42px] h-px bg-[rgba(118,131,143,0.25)]" />

                  {rows.map((row, idx) => (
                    <div
                      key={row.problem}
                      className={[
                        "group relative isolate w-full",
                        idx % 2 === 0
                          ? "bg-gradient-to-b from-[rgba(8,15,22,0.18)] to-[#080f16]"
                          : "bg-[#05090d]",
                        hoverRowBg,
                      ].join(" ")}
                    >
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-[rgba(118,131,143,0.14)]" />
                      {idx % 2 === 0 ? (
                        <>
                          <div className="pointer-events-none absolute left-0 top-0 z-0 h-[97px] w-[196px] overflow-hidden opacity-20">
                            <div className="absolute left-[-8px] top-[-30px] h-[58px] w-[90px] rounded-full bg-[radial-gradient(circle,rgba(118,131,143,0.24)_0.8px,transparent_0.8px)] [background-size:8px_8px]" />
                            <div className="absolute left-[-4px] top-[14px] h-[87px] w-[202px] rounded-full bg-[radial-gradient(circle,rgba(118,131,143,0.18)_0.8px,transparent_0.8px)] [background-size:8px_8px]" />
                          </div>
                          <div className="pointer-events-none absolute right-0 top-0 z-0 h-[97px] w-[196px] overflow-hidden opacity-20">
                            <div className="absolute right-[-8px] top-[-30px] h-[58px] w-[90px] rounded-full bg-[radial-gradient(circle,rgba(118,131,143,0.24)_0.8px,transparent_0.8px)] [background-size:8px_8px]" />
                            <div className="absolute right-[-4px] top-[14px] h-[87px] w-[202px] rounded-full bg-[radial-gradient(circle,rgba(118,131,143,0.18)_0.8px,transparent_0.8px)] [background-size:8px_8px]" />
                          </div>
                        </>
                      ) : null}
                      <div className={["relative z-10 mx-auto grid h-[97px] min-w-[1437px] max-w-[1437px] items-center", tableGridCols].join(" ")}>
                        <div className="col-start-2 flex items-center gap-4">
                          <div className="relative size-6 shrink-0">
                            <img
                              alt=""
                              aria-hidden="true"
                              className="absolute inset-0 size-6 transition-opacity duration-600 ease-in-out delay-320 group-hover:delay-120 group-hover:opacity-0"
                              src="/nagativo-imagem.svg"
                            />
                            <img
                              alt=""
                              aria-hidden="true"
                              className="absolute inset-0 size-6 opacity-0 transition-opacity duration-600 ease-in-out delay-320 group-hover:delay-120 group-hover:opacity-100"
                              src="/positivo-imagem.svg"
                            />
                          </div>
                          <div
                            className={[
                              "relative h-[23px] w-[219px] [font-family:var(--font-orbitron)] text-[16px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]",
                            ].join(" ")}
                          >
                            <span className="absolute inset-0 transition-opacity duration-600 ease-in-out delay-320 group-hover:delay-120 group-hover:opacity-0">
                              {row.problem}
                            </span>
                            <span className="absolute inset-0 opacity-0 transition-opacity duration-600 ease-in-out delay-320 group-hover:delay-120 group-hover:opacity-100 group-hover:text-white">
                              {comInfra[idx]?.problem ?? row.problem}
                            </span>
                          </div>
                        </div>
                        <div
                          className={[
                            "col-start-3 flex items-center gap-4 text-[16px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)]",
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
                          <span className="relative h-[23px] w-[504px]">
                            <span className="absolute inset-0 transition-opacity duration-600 ease-in-out delay-320 group-hover:delay-120 group-hover:opacity-0">
                              {row.appears}
                            </span>
                            <span className="absolute inset-0 opacity-0 transition-opacity duration-600 ease-in-out delay-320 group-hover:delay-120 group-hover:opacity-100 group-hover:text-white">
                              {comInfra[idx]?.appears ?? row.appears}
                            </span>
                          </span>
                        </div>
                        <div
                          className={[
                            "col-start-4 flex h-full items-center text-[16px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)]",
                          ].join(" ")}
                        >
                          <span className="relative block h-[34px] w-[186px] whitespace-normal break-words leading-[1.4]">
                            <span className="absolute inset-0 transition-opacity duration-600 ease-in-out delay-320 group-hover:delay-120 group-hover:opacity-0">
                              {row.impact}
                            </span>
                            <span className="absolute inset-0 opacity-0 transition-opacity duration-600 ease-in-out delay-320 group-hover:delay-120 group-hover:opacity-100 group-hover:text-white">
                              {comInfra[idx]?.impact ?? row.impact}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <LandingBenefitsMarquee className="mt-[128px]" labels={dict.common.benefits} />
      </div>
    </section>
  );
}
