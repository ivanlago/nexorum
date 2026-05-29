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
      <div className="[font-family:var(--font-orbitron)] text-[10px] font-bold text-[color:var(--primitive-colors-primary-400)]">
        [ 02 ]
      </div>
      <h2 className="mt-3 [font-family:var(--font-orbitron)] text-[18px] font-semibold uppercase leading-[1.6] text-[rgba(195,210,218,0.95)]">
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

      <div className="mt-14 border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16]">
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

        <div className="divide-y divide-[rgba(118,131,143,0.14)]">
          {rows.map((row) => (
            <div key={row.problem} className="px-6 py-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-5 items-center justify-center rounded-full border border-[rgba(118,131,143,0.45)] text-[12px] text-[rgba(167,184,198,0.7)]">
                  ×
                </span>
                <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
                  {row.problem}
                </div>
              </div>
              <div className="mt-4 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                {row.appears}
              </div>
              <div className="mt-3 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                {row.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
