import type { LandingDictionary } from "@/i18n/landing-dictionary";

export function MobileSection01Image({ dict }: { dict: LandingDictionary }) {
  return (
    <section className="relative mt-6 overflow-hidden">
      <div className="relative h-[369px] w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-35 mix-blend-screen">
          <div className="absolute left-[-42%] top-[-10%] h-[128%] w-[118%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(108,181,255,0.36)_0%,rgba(108,181,255,0.14)_28%,rgba(108,181,255,0.03)_50%,rgba(108,181,255,0)_74%)] blur-[28px]" />
          <div className="absolute left-[-30%] top-[-4%] h-[118%] w-[86%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(184,217,255,0.22)_0%,rgba(184,217,255,0.06)_34%,rgba(184,217,255,0)_66%)] blur-[30px]" />
          <div className="absolute right-[-38%] top-[-16%] h-[146%] w-[106%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(108,181,255,0.28)_0%,rgba(108,181,255,0.08)_32%,rgba(108,181,255,0)_70%)] blur-[34px]" />
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
