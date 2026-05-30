"use client";

import { useMemo, useState } from "react";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";

const imgCaret = "https://www.figma.com/api/mcp/asset/a86cfda8-89fd-4823-9ebb-38085f2c4488";
const imgDivider = "https://www.figma.com/api/mcp/asset/a5fcbc2c-ca3d-4933-9ed7-49484d1fd6ed";

type Row = {
  problem: string;
  appears: string;
  impact: string;
};

export function MobileSection03Problema({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section03 as any;
  const semInfra = (copy?.tables?.sem ?? []) as Row[];
  const comInfra = (copy?.tables?.com ?? []) as Row[];

  const [mode, setMode] = useState<"sem" | "com">("sem");
  const rows = useMemo(() => (mode === "sem" ? semInfra : comInfra), [mode, semInfra, comInfra]);

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20">
      <LandingSectionBackground />
      <h2 className="mt-3 [font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold uppercase leading-[1.6] text-[18px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.01em]">
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
      <a className="mt-10 inline-flex items-center gap-2 px-[37px] text-[14px] font-medium text-[color:var(--primitive-colors-gray-200)]" href="#">
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

        <img alt="" className="h-px w-full opacity-60" src={imgDivider} />

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
              {rows.map((row) => (
                <div key={row.problem} className="grid grid-cols-[220px_360px_260px] px-6 py-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-5 items-center justify-center rounded-full border border-[rgba(118,131,143,0.45)] text-[12px] text-[rgba(167,184,198,0.7)]">
                      {mode === "com" ? "✓" : "×"}
                    </span>
                    <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                      {row.problem}
                    </div>
                  </div>
                  <div className="text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                    {row.appears}
                  </div>
                  <div className="text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                    {row.impact}
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
