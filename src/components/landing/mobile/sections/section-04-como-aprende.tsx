import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";

const items = [
  { n: "1", icon: "/funcao-imagem-1.svg" },
  { n: "2", icon: "/funcao-imagem-2.svg" },
  { n: "3", icon: "/funcao-imagem-3.svg" },
  { n: "4", icon: "/funcao-imagem-4.svg" },
  { n: "5", icon: "/funcao-imagem-5.svg" },
  { n: "6", icon: "/funcao-imagem-6.svg" },
];

const whatCards = [
  { icon: "/aprende-imagem-1.svg" },
  { icon: "/aprende-imagem-2.svg" },
  { icon: "/aprende-imagem-3.svg" },
  { icon: "/aprende-imagem-4.svg" },
  { icon: "/aprende-imagem-5.svg" }
];
const sideTexture = "https://www.figma.com/api/mcp/asset/0f5652ee-b81d-42f6-a4fb-7bb931aa124d";

export function MobileSection04ComoAprende({ dict }: { dict: LandingDictionary }) {
  const copy = dict.section04 as any;

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-12">
      <LandingSectionBackground />
      <h2 className="mt-3 [font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold uppercase leading-[1.6] text-[18px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.01em]">
        <span className="mr-3 inline-block align-baseline text-[10px] font-bold leading-[1.6] text-[color:var(--primitive-colors-primary-400)]">
          [ 03 ]
        </span>
        {copy.heading?.replaceAll?.("\n", " ")}
      </h2>
      <p className="mt-8 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
        <span className="inline-block indent-[39px]">
          {copy.lead}
        </span>
      </p>

      <div className="mt-14 flex items-center justify-center">
        <div className="relative h-[323px] w-[330px] overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(108,181,255,0.14)] blur-[42px]" />
          <div className="pointer-events-none absolute left-[-26px] top-[12px] h-[97px] w-[237px] opacity-35">
            <img
              alt=""
              className="absolute left-[-5.14px] top-[-34px] h-[131px] w-[430.246px] max-w-none -scale-y-100 rotate-180"
              src={sideTexture}
            />
          </div>
          <video
            className="absolute left-1/2 top-1/2 z-10 h-[290px] w-[290px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain opacity-75 mix-blend-lighten"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src="/aprende-video.webm" type="video/webm" />
            <source src="/aprende-video-h264.mp4" type="video/mp4" />
            {dict.common.videoUnsupported}
          </video>
          <div className="absolute left-1/2 top-1/2 z-20 h-[238px] w-[238px] -translate-x-1/2 -translate-y-1/2 bg-[#6cb5ff] opacity-[0.14] mix-blend-color" />
          <div className="pointer-events-none absolute bottom-[22px] right-[-58px] h-[97px] w-[237px] opacity-30">
            <img
              alt=""
              className="absolute left-[-5.14px] top-[-34px] h-[131px] w-[430.246px] max-w-none -scale-y-100 rotate-180"
              src={sideTexture}
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#05090d] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#05090d] to-transparent" />
          <div className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 [font-family:var(--font-orbitron)] text-[10px] tracking-[0.14em] text-[color:var(--primitive-colors-gray-300)]">
            {copy.illustrationLabel}
          </div>
        </div>
      </div>

      <h3 className="mt-16 [font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold uppercase leading-[1.6] text-[16px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.01em]">
        {copy.mobile?.transformHeading}
      </h3>
      <p className="mt-6 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
        <span className="inline-block indent-[39px]">
          {copy.mobile?.transformLead}
        </span>
      </p>
      {copy.mobile?.transformLead2 ? (
        <p className="mt-4 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
          <span className="inline-block indent-[39px]">
            {copy.mobile?.transformLead2}
          </span>
        </p>
      ) : null}

      <div className="mt-12">
        <div className="text-[12px] font-medium text-[color:var(--primitive-colors-gray-200)]">{copy.mobile?.howItWorksTitle}</div>
        <div className="mt-6 divide-y divide-[rgba(118,131,143,0.14)] border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16]">
          {items.map((it, idx) => (
            <div key={it.n} className="flex items-center gap-6 px-6 py-5">
              <div className="[font-family:var(--font-orbitron)] text-[16px] font-semibold text-[color:var(--primitive-colors-primary-400)]">
                {it.n}
              </div>
              <img alt="" className="size-8 opacity-90" src={it.icon} />
              <div className="text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                {copy.mobile?.steps?.[idx]}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="text-[12px] font-medium text-[color:var(--primitive-colors-gray-200)]">{copy.mobile?.whatItDoesTitle}</div>
        <div className="mt-6 space-y-4">
          {whatCards.map((c, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 border border-[rgba(26,42,56,0.85)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-6 py-6"
            >
              <div className="relative size-14 shrink-0 border border-[rgba(26,42,56,0.9)] bg-[radial-gradient(circle_at_50%_50%,rgba(11,22,32,0.0),rgba(11,22,32,0.5))]">
                <img alt="" className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2" src={c.icon} />
              </div>
              <div>
                <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold text-[color:var(--primitive-colors-gray-200)]">
                  {copy.cards?.[idx]?.title}
                </div>
                <div className="mt-4 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                  {copy.cards?.[idx]?.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
