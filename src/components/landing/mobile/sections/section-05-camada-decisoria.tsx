"use client";

import { useMemo, useState } from "react";
import type { LandingDictionary } from "@/i18n/landing-dictionary";

const imgCaret = "https://www.figma.com/api/mcp/asset/566d19e4-485e-4caf-a6e3-e72036ed300b";
const imgDivider = "https://www.figma.com/api/mcp/asset/1c6b07cc-8f6e-4f36-9ab8-afacfd3ead0f";

type Row = { not: string; why: string; does: string };

export function MobileSection05CamadaDecisoria({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section05 as any;
  const rows = (copy?.rows ?? []) as Row[];

  const [tab, setTab] = useState<"nao" | "faz">("nao");

  const view = useMemo(() => tab, [tab]);

  return (
    <section className="px-6 pb-24 pt-10">
      <div className="[font-family:var(--font-orbitron)] text-[10px] font-bold text-[color:var(--primitive-colors-primary-400)]">
        [ 04 ]
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
        {dict.common.seeHowItWorks} <img alt="" className="size-4 opacity-80" src={imgCaret} />
      </a>

      <div className="mt-14 border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16]">
        <div className="flex items-center px-6">
          <button
            className={[
              "w-[163.5px] border-b py-4 text-left text-[12px] leading-[1.5] transition-colors",
              view === "nao"
                ? "border-[color:var(--primitive-colors-primary-500)] text-[color:var(--primitive-colors-gray-200)]"
                : "border-[rgba(26,42,56,0.9)] text-[color:var(--primitive-colors-gray-300)]",
            ].join(" ")}
            type="button"
            onClick={() => setTab("nao")}
          >
            <span className="font-medium">{copy.mobile?.tabNot}</span>
          </button>
          <button
            className={[
              "w-[163.5px] border-b py-4 text-left text-[12px] leading-[1.5] transition-colors",
              view === "faz"
                ? "border-[color:var(--primitive-colors-primary-500)] text-[color:var(--primitive-colors-gray-200)]"
                : "border-[rgba(26,42,56,0.9)] text-[color:var(--primitive-colors-gray-300)]",
            ].join(" ")}
            type="button"
            onClick={() => setTab("faz")}
          >
            <span className="font-medium">{copy.mobile?.tabDoes}</span>
          </button>
        </div>
        <img alt="" className="h-px w-full opacity-60" src={imgDivider} />

        <div className="divide-y divide-[rgba(118,131,143,0.14)]">
          {rows.map((r) => (
            <div key={r.not} className="px-6 py-6">
              <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
                {r.not}
              </div>
              <div className="mt-3 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                {r.why}
              </div>
              <div className="mt-3 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                {r.does}
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className="mt-16 overflow-hidden border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-8 py-10">
          <div className="flex items-start justify-between">
            <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold text-[color:var(--primitive-colors-primary-400)]">
            {copy.whyDifferentLabel}
            </div>
            <div className="w-[133px] text-right text-[10px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
            {copy.mobile?.whyDifferentHint}
            </div>
          </div>
        <div className="mt-10 h-px w-full bg-[rgba(118,131,143,0.25)]" />
          <div className="mt-10 space-y-8">
            <div>
              <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
              {copy.whyDifferent?.items?.[0]?.title}
              </div>
              <div className="mt-3 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
              {copy.whyDifferent?.items?.[0]?.description}
              </div>
            </div>
            <div>
              <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
              {copy.whyDifferent?.items?.[1]?.title}
              </div>
              <div className="mt-3 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
              {copy.whyDifferent?.items?.[1]?.description}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
