"use client";

import { useEffect, useRef, useState } from "react";
import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { SectionIndex } from "@/components/landing/sections/section-index";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";
import type { LandingDictionary } from "@/i18n/landing-dictionary";

const leftPillars = [
  {
  },
  {
  },
  {
  },
];

const rightCards = [
  {
    icon: "/aprende-imagem-1.svg",
  },
  {
    icon: "/aprende-imagem-2.svg",
  },
  {
    icon: "/aprende-imagem-3.svg",
  },
  {
    icon: "/aprende-imagem-4.svg",
  },
  {
    icon: "/aprende-imagem-5.svg",
  },
];

const transformIcons = [
  "/funcao-imagem-1.svg",
  "/funcao-imagem-2.svg",
  "/funcao-imagem-3.svg",
  "/funcao-imagem-4.svg",
  "/funcao-imagem-5.svg",
  "/funcao-imagem-6.svg",
];
const sideTexture = "/figma-assets/0f5652ee-b81d-42f6-a4fb-7bb931aa124d.svg";

export function LandingSection04ComoAprende({ dict }: { dict: LandingDictionary }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const centerViewportRef = useRef<HTMLDivElement | null>(null);
  const centerContentRef = useRef<HTMLDivElement | null>(null);
  const centerVideoRef = useRef<HTMLVideoElement | null>(null);
  const copy = dict.section04 as any;
  const steps = (copy?.mobile?.steps ?? []) as string[];
  const headingLines = (copy.heading?.split?.("\n") ?? []) as string[];
  const [centerVideoHeight, setCenterVideoHeight] = useState(398);

  useEffect(() => {
    let frame = 0;

    const syncStickyScroll = () => {
      frame = 0;

      const section = sectionRef.current;
      const centerViewport = centerViewportRef.current;
      const centerContent = centerContentRef.current;

      if (!section || !centerViewport || !centerContent) {
        return;
      }

      if (!window.matchMedia("(min-width: 1024px)").matches) {
        section.style.removeProperty("height");
        centerContent.style.removeProperty("transform");
        return;
      }

      const sectionTop = window.scrollY + section.getBoundingClientRect().top;
      const centerViewportHeight = centerViewport.clientHeight;
      const maxOffset = Math.max(centerContent.scrollHeight - centerViewportHeight, 0);
      const progress = Math.min(Math.max(window.scrollY - sectionTop, 0), maxOffset);

      section.style.height = `${centerViewportHeight + maxOffset}px`;
      centerContent.style.transform = `translate3d(0, ${-progress}px, 0)`;
    };

    const requestSync = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(syncStickyScroll);
      }
    };

    requestSync();
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestSync);
      window.removeEventListener("resize", requestSync);

      const section = sectionRef.current;
      const centerContent = centerContentRef.current;

      section?.style.removeProperty("height");
      centerContent?.style.removeProperty("transform");
    };
  }, []);

  useEffect(() => {
    const video = centerVideoRef.current;

    if (!video) {
      return;
    }

    const syncVideoHeight = () => {
      if (video.clientHeight > 0) {
        setCenterVideoHeight(video.clientHeight);
      }
    };

    syncVideoHeight();

    const resizeObserver = new ResizeObserver(syncVideoHeight);
    resizeObserver.observe(video);
    video.addEventListener("loadedmetadata", syncVideoHeight);

    return () => {
      resizeObserver.disconnect();
      video.removeEventListener("loadedmetadata", syncVideoHeight);
    };
  }, []);

  return (
    <section ref={sectionRef} id="como-aprende" className="relative mt-[52px] w-full overflow-hidden pb-0 pt-[76px] lg:overflow-visible lg:pt-0">
      <LandingSectionBackground />

      <div className="relative w-full lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1216px] grid-cols-1 gap-14 px-6 lg:h-[690px] lg:grid-cols-[240px_520px_312px] lg:justify-center lg:items-start lg:px-0 lg:pt-[76px]">
          <div className="relative flex flex-col lg:h-[611px] lg:w-[240px] lg:self-start">
            <div className="pointer-events-none absolute left-[33px] top-[-52px] z-0 h-[614px] w-[170px] rounded-full bg-[#6cb5ff] opacity-[0.05] blur-[50px]" />
            <div className="pointer-events-none absolute left-0 top-[-85px] z-10 h-[168px] w-[237px] opacity-80">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${sideTexture})`,
                }}
              />
            </div>

            <div className="relative z-0 flex h-[541px] min-h-0 flex-col overflow-hidden border border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] px-8 py-10 shadow-[0px_24px_120px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col items-end gap-6">
                <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold text-[color:var(--primitive-colors-primary-400)]">
                  {copy.pillarsLabel}
                </div>
                <div className="relative w-full">
                  <p className="ml-auto max-w-[173px] text-right text-[10px] italic font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
                    {copy.pillarsLead}
                  </p>
                  <div className="pointer-events-none absolute left-[-29px] top-[-34px] h-[97px] w-[237px] opacity-30">
                    <img
                      alt=""
                      className="absolute left-[-5.14px] top-[-34px] h-[131px] w-[430.246px] max-w-none -scale-y-100 rotate-180"
                      src={sideTexture}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-1 flex-col divide-y divide-[rgba(26,42,56,0.9)]">
                {leftPillars.map((p, idx) => (
                  <div key={idx} className="flex flex-1 flex-col justify-center py-6">
                    <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                      {copy.pillars?.items?.[idx]?.title}
                    </div>
                    <div className="relative mt-3 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                      {copy.pillars?.items?.[idx]?.description}
                      {idx === leftPillars.length - 1 ? (
                        <div className="pointer-events-none absolute left-[-32px] top-[-26px] h-[97px] w-[237px] opacity-30">
                          <img
                            alt=""
                            className="absolute left-[-5.14px] top-[-34px] h-[131px] w-[430.246px] max-w-none -scale-y-100 rotate-180"
                            src={sideTexture}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex w-[240px] justify-end">
              <CtaPrimary label={dict.common.talkToSpecialist} />
            </div>
          </div>

          <div className="min-w-0 lg:w-[520px] lg:justify-self-center">
            <div ref={centerViewportRef} className="lg:h-[calc(100vh-76px)] lg:overflow-hidden lg:pr-2">
              <div ref={centerContentRef} className="lg:will-change-transform">
                <h2 className="relative z-10 [font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[color:var(--primitive-colors-gray-200)] text-[24px] font-semibold uppercase leading-[0] tracking-[0.24px] text-transparent to-[128.98%] to-[rgba(167,184,198,0)]">
                  <span className="flex min-w-0 items-baseline gap-3 leading-[1.6]">
                    <span className="text-[24px] leading-[1.39] tracking-[0.01em] text-[color:var(--primitive-colors-primary-400)]">
                      <SectionIndex value="03" className="align-baseline" />
                    </span>
                    <span className="min-w-0 break-words leading-[1.6]">{headingLines[0]}</span>
                  </span>
                  {headingLines[1] ? <span className="block break-words leading-[1.6]">{headingLines[1]}</span> : null}
                </h2>

                <p className="relative z-10 mt-6 max-w-[560px] text-[13px] font-light leading-[1.9] text-[color:var(--primitive-colors-gray-200)]">
                  <span className="inline-block indent-[39px]">{copy.lead}</span>
                </p>

                <div className="relative z-0 -top-5">
                  <div className="mt-12 flex items-center justify-center">
                    <div className="relative h-[406.215px] w-[404px] max-w-full">
                      <video
                        ref={centerVideoRef}
                        className="pointer-events-none absolute left-1/2 top-[calc(50%-50px)] z-10 w-[363.6px] max-w-none -translate-x-1/2 -translate-y-1/2 select-none mix-blend-lighten opacity-75"
                        muted
                        autoPlay
                        loop
                        playsInline
                      >
                        <source src="/aprende-video.webm" type="video/webm" />
                        <source src="/aprende-video-h264.mp4" type="video/mp4" />
                        {dict.common.videoUnsupported}
                      </video>
                      <div
                        className="pointer-events-none absolute left-1/2 top-[calc(50%-50px)] z-20 w-[363.6px] -translate-x-1/2 -translate-y-1/2 bg-[#6cb5ff] opacity-[0.15] mix-blend-color"
                        style={{ height: `${centerVideoHeight}px` }}
                      />
                    </div>
                  </div>

                  <div className="relative z-10 [font-family:var(--font-orbitron)] mt-12 bg-clip-text bg-gradient-to-r from-[#C3D2DA] font-semibold leading-[1.6] text-[18px] text-transparent to-[128.98%] to-[rgba(195,207,218,0)] tracking-[0.01em] uppercase align-middle indent-[48px]">
                    {copy.caption?.split?.("\n")?.map?.((line: string, idx: number, arr: string[]) => (
                      <span key={idx}>
                        {line}
                        {idx < arr.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </div>

                  <p className="relative z-10 mt-8 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                    <span className="inline-block indent-[39px]">{copy.mobile?.transformLead}</span>
                  </p>
                  <p className="relative z-10 mt-4 text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                    <span className="inline-block indent-[39px]">{copy.mobile?.transformLead2}</span>
                  </p>

                  <div className="relative z-10 [font-family:var(--font-orbitron)] mt-10 text-[14px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                    {copy.mobile?.howItWorksTitle}
                  </div>
                  <div className="relative z-10 mt-6 grid grid-cols-[140px_1fr] items-center gap-8 text-[color:var(--primitive-colors-gray-200)]">
                    <div className="[font-family:var(--font-orbitron)] text-[10px] font-semibold leading-[1.4] tracking-[0.14em]">
                      {copy.mobile?.stepsHeaderLeft}
                    </div>
                    <div className="[font-family:var(--font-orbitron)] text-[10px] font-semibold leading-[1.4] tracking-[0.14em]">
                      {copy.mobile?.stepsHeaderRight}
                    </div>
                  </div>
                  <div className="relative z-10 mt-4 h-px w-full bg-[rgba(118,131,143,0.25)]" />

                  <div className="relative z-10 divide-y divide-[rgba(118,131,143,0.25)] pb-40">
                    {steps.slice(0, 6).map((text, idx) => (
                      <div key={text} className="grid grid-cols-[140px_1fr] items-center gap-8 py-6">
                        <div className="flex items-center">
                          <div className="[font-family:var(--font-orbitron)] text-[24px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-primary-400)]">
                            {idx + 1}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <img alt="" className="size-8 opacity-90" src={transformIcons[idx]} />
                          <div className="text-[14px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                            {text}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 lg:h-[616px] lg:w-[312px] lg:self-start">
            {rightCards.map((c, idx) => (
              <div
                key={idx}
                className="relative flex h-[104px] min-h-[104px] items-start gap-6 overflow-hidden border border-[rgba(26,42,56,0.9)] bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16] p-6"
              >
                <div className="pointer-events-none absolute bottom-[-26px] right-[-31px] h-[105px] w-[310px] opacity-30">
                  <img
                    alt=""
                    className="absolute left-[-7px] top-[-26px] h-[131px] w-[430.246px] max-w-none"
                    src="/figma-assets/b50ab1ca-61a7-44ea-a59d-44716252e794.svg"
                  />
                </div>

                <div className="relative inline-flex size-14 shrink-0 items-center justify-center border border-[rgba(26,42,56,0.9)] bg-[radial-gradient(circle_at_50%_50%,rgba(11,22,32,0)_0%,rgba(11,22,32,0.5)_100%)]">
                  <img alt="" className="max-h-8 max-w-8" src={c.icon} />
                </div>
                <div className="relative min-w-0 flex-1 pt-[2px]">
                  <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                    {copy.cards?.[idx]?.title}
                  </div>
                  <div className="mt-3 max-w-[184px] text-[12px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-300)]">
                    {copy.cards?.[idx]?.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
