import type { LandingDictionary } from "@/i18n/landing-dictionary";

export function MobileSection01Image({ dict }: { dict: LandingDictionary }) {
  return (
    <section className="relative mt-6 overflow-hidden">
      <div className="relative h-[369px] w-full overflow-hidden">
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
