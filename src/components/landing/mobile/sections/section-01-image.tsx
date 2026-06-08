import type { LandingDictionary } from "@/i18n/landing-dictionary";

const imgGlowA = "https://www.figma.com/api/mcp/asset/6bbbdb76-dc06-44ae-a9e1-3759c71a4046";
const imgGlowB = "https://www.figma.com/api/mcp/asset/90c7f464-0c0c-42fe-8a75-f369dce989a3";
const imgGlowC = "https://www.figma.com/api/mcp/asset/862871ea-2f19-44f7-9e14-7d78bac6535a";

export function MobileSection01Image({ dict }: { dict: LandingDictionary }) {
  return (
    <section className="relative mt-6 overflow-hidden">
      <div className="relative h-[369px] w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-35 mix-blend-screen">
          <img alt="" className="absolute left-[-44%] top-[-8%] h-[120%] w-auto max-w-none object-contain" src={imgGlowA} />
          <img alt="" className="absolute left-[-52%] top-[-2%] h-[130%] w-auto max-w-none object-contain" src={imgGlowB} />
          <img alt="" className="absolute right-[-62%] top-[-18%] h-[150%] w-auto max-w-none object-contain" src={imgGlowC} />
        </div>
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-plus-lighter"
          muted
          autoPlay
          loop
          playsInline
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video-h264.mp4" type="video/mp4" />
          {dict.common.videoUnsupported}
        </video>
        <div className="absolute inset-0 bg-[rgba(108,181,255,0.2)] mix-blend-color" />
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#05090d] to-transparent" />
        <div className="absolute bottom-0 left-0 h-[98px] w-full bg-gradient-to-b from-[rgba(5,9,13,0)] to-[#05090d]" />
      </div>
    </section>
  );
}
