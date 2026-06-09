"use client";

import { useMemo, useState } from "react";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";

const imgCaret = "/chevron.svg";
const dividerClassName =
  "h-px w-full opacity-60 bg-[linear-gradient(90deg,rgba(118,131,143,0)_0%,rgba(118,131,143,0.28)_8%,rgba(118,131,143,0.28)_92%,rgba(118,131,143,0)_100%)]";
const negativeIcon = "/nagativo-imagem.svg";
const positiveIcon = "/positivo-imagem.svg";

type Row = {
  problem: string;
  appears: string;
  impact: string;
};

function TableIcon({ name, className = "" }: { name: "db" | "blocks" | "briefcase" | "doc" | "calendar" | "bars"; className?: string }) {
  const common = { className: ["size-6", className].join(" "), "aria-hidden": true, viewBox: "0 0 32 32" } as const;

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
          <path d="M10 10V9c0-1.7 1.3-3 3-3h6c1.7 0 3 1.3 3 3v1" stroke="currentColor" strokeWidth="2" />
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

export function MobileSection03Problema({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section03 as any;
  const semInfra = (copy?.tables?.sem ?? []) as Row[];
  const comInfra = (copy?.tables?.com ?? []) as Row[];
  const mobileComInfra: Row[] = [
    { problem: "Dados conectados", appears: "Áreas e sistemas em uma base comum.", impact: "Decisões completas e no tempo certo." },
    { problem: "Decisão antecipada", appears: "Desvios sinalizados com antecedência.", impact: "Antecipação em vez de reação." },
    { problem: "Fluxo sem retrabalho", appears: "Fluxos auditáveis reduzem conciliações.", impact: "Produtividade preservada." },
    { problem: "Medições rastreáveis", appears: "Evidências organizadas para comprovação.", impact: "Previsibilidade financeira." },
    { problem: "Produtividade visível", appears: "Gargalos visíveis antes do impacto.", impact: "Cronograma protegido." },
    { problem: "Previsibilidade", appears: "Prazo, custo e resultado em tempo real.", impact: "Margem mais governável." },
  ];
  const appearsIcons: Array<"db" | "blocks" | "briefcase" | "doc" | "calendar" | "bars"> = [
    "db",
    "blocks",
    "briefcase",
    "doc",
    "calendar",
    "bars",
  ];

  const [mode, setMode] = useState<"sem" | "com">("sem");
  const rows = useMemo(() => (mode === "sem" ? semInfra : mobileComInfra), [mode, semInfra]);

  return (
    <section className="relative mt-[68px] overflow-hidden px-6 pb-0 pt-[10px]">
      <LandingSectionBackground />
      <h2 className="[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold uppercase leading-[1.6] text-[18px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.01em]">
        <span className="mr-3 inline-block align-baseline text-[10px] font-bold leading-[1.6] text-[color:var(--primitive-colors-primary-400)]">
          [ 02 ]
        </span>
        {copy.heading?.replaceAll?.("\n", " ")}
      </h2>
      <p className="mt-8 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
        <span className="inline-block indent-[39px]">
          {copy.lead}
        </span>
      </p>
      <a
        className="mt-10 inline-flex items-center gap-2 px-[37px] text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]"
        href="#como-aprende"
      >
        {copy.linkLabel} <img alt="" className="size-4 opacity-80" src={imgCaret} />
      </a>

      <div className="mt-14 -mx-6 border-b border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16]">
        <div className="flex items-center px-6">
          <button
            className={[
              "w-[163.5px] border-b py-4 text-left text-[12px] leading-[1.5] transition-colors",
              mode === "sem"
                ? "border-[color:var(--primitive-colors-primary-500)] text-[color:var(--primitive-colors-gray-200)]"
                : "border-[rgba(26,42,56,0.9)] text-[color:var(--primitive-colors-gray-300)]",
            ].join(" ")}
            type="button"
            onClick={() => setMode("sem")}
          >
            <span className="font-medium">{copy.tabSem}</span>
          </button>
          <button
            className={[
              "w-[163.5px] border-b py-4 text-left text-[12px] leading-[1.5] transition-colors",
              mode === "com"
                ? "border-[color:var(--primitive-colors-primary-500)] text-[color:var(--primitive-colors-gray-200)]"
                : "border-[rgba(26,42,56,0.9)] text-[color:var(--primitive-colors-gray-300)]",
            ].join(" ")}
            type="button"
            onClick={() => setMode("com")}
          >
            <span className="font-medium">{copy.tabCom}</span>
          </button>
        </div>

        <div aria-hidden className={dividerClassName} />

        <div
          className={[
            "overflow-x-auto",
            "[-webkit-overflow-scrolling:touch]",
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          ].join(" ")}
        >
          <div className="min-w-[860px] pb-2">
            <div className="grid grid-cols-[220px_360px_260px] px-6 py-5 [font-family:var(--font-orbitron)] text-[10px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
              <div>{copy.tableHeaders?.problems}</div>
              <div>{copy.tableHeaders?.appears}</div>
              <div>{copy.tableHeaders?.impact}</div>
            </div>
            <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />

            <div className="divide-y divide-[rgba(118,131,143,0.14)]">
              {rows.map((row, idx) => (
                <div
                  key={row.problem}
                  className={[
                    "relative isolate grid h-[82px] grid-cols-[220px_360px_260px] items-center px-6",
                    idx % 2 === 0
                      ? "bg-gradient-to-b from-[rgba(8,15,22,0.18)] to-[#080f16]"
                      : "bg-[#05090d]",
                  ].join(" ")}
                >
                  {idx % 2 === 0 ? (
                    <>
                      <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-[132px] overflow-hidden opacity-18">
                        <div className="absolute left-[-12px] top-[-18px] h-[52px] w-[84px] rounded-full bg-[radial-gradient(circle,rgba(118,131,143,0.24)_0.8px,transparent_0.8px)] [background-size:8px_8px]" />
                        <div className="absolute left-[-4px] top-[18px] h-[78px] w-[144px] rounded-full bg-[radial-gradient(circle,rgba(118,131,143,0.16)_0.8px,transparent_0.8px)] [background-size:8px_8px]" />
                      </div>
                      <div className="pointer-events-none absolute right-0 top-0 z-0 h-full w-[132px] overflow-hidden opacity-18">
                        <div className="absolute right-[-12px] top-[-18px] h-[52px] w-[84px] rounded-full bg-[radial-gradient(circle,rgba(118,131,143,0.24)_0.8px,transparent_0.8px)] [background-size:8px_8px]" />
                        <div className="absolute right-[-4px] top-[18px] h-[78px] w-[144px] rounded-full bg-[radial-gradient(circle,rgba(118,131,143,0.16)_0.8px,transparent_0.8px)] [background-size:8px_8px]" />
                      </div>
                    </>
                  ) : null}
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="inline-flex size-5 items-center justify-center">
                      <img
                        alt=""
                        aria-hidden="true"
                        className="size-5 opacity-90"
                        src={mode === "com" ? positiveIcon : negativeIcon}
                      />
                    </span>
                    <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                      {row.problem}
                    </div>
                  </div>
                  <div className="relative z-10 flex items-start gap-3 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                    <span className="shrink-0 text-[color:var(--primitive-colors-primary-400)]">
                      <TableIcon name={appearsIcons[idx] ?? "db"} />
                    </span>
                    <span>{row.appears}</span>
                  </div>
                  <div className="relative z-10 flex h-full items-center text-[12px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
                    <span
                      className={[
                        "block whitespace-normal break-words leading-[1.4]",
                        mode === "com" ? "w-[118px]" : "w-[150px]",
                      ].join(" ")}
                    >
                      {row.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
