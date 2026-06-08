import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { LanguageSelector } from "@/components/landing/language-selector";
import { HeroMenu } from "@/components/landing/hero-menu";
import { HowItWorksLink } from "@/components/ui/how-it-works-link";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import type { SupportedLocale } from "@/i18n/locales";
import { Suspense } from "react";

const imgWelcome = "/header-bemvindo.png";
const imgMenu = "/menu.png";

const imgGlowA = "https://www.figma.com/api/mcp/asset/6bbbdb76-dc06-44ae-a9e1-3759c71a4046";
const imgGlowB = "https://www.figma.com/api/mcp/asset/90c7f464-0c0c-42fe-8a75-f369dce989a3";
const imgGlowC = "https://www.figma.com/api/mcp/asset/862871ea-2f19-44f7-9e14-7d78bac6535a";

const imgGlowD = "https://www.figma.com/api/mcp/asset/3ede7e49-c585-4441-8862-3f9ba5c3c47a";
const imgGlowE = "https://www.figma.com/api/mcp/asset/8696c4d5-9129-4f26-89e7-9bd9775044c5";
const imgGlowF = "https://www.figma.com/api/mcp/asset/8436e0b0-6b76-4883-8e0a-1a16504a9657";

export function LandingSection01Hero({ dict, locale }: { dict: LandingDictionary; locale: SupportedLocale }) {
  const headlineLines = dict.hero.headline.split("\n");
  const headlineClassName =
    locale === "en-US"
      ? "[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[color:var(--primitive-colors-gray-200)] font-bold leading-[0] text-[30px] text-transparent to-[119.04%] to-[rgba(195,210,218,0)] tracking-[0.01em] uppercase whitespace-pre-wrap"
      : "[font-family:var(--font-orbitron)] bg-clip-text bg-gradient-to-r from-[color:var(--primitive-colors-gray-200)] font-bold leading-[0] text-[32px] text-transparent to-[119.04%] to-[rgba(195,210,218,0)] tracking-[0.01em] uppercase whitespace-pre-wrap";

  return (
    <section className="relative w-full overflow-hidden pt-0">
	      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_-40%,rgba(255,255,255,0.16),rgba(255,255,255,0)_60%)]" />
	      <div className="relative w-full overflow-hidden">
	        <div className="h-[max(1000px,100vh)] w-full">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-[calc(100vw+24px)] -translate-x-1/2">
            <div className="absolute inset-y-0 left-[-12px] w-[240px]">
              <div className="absolute inset-y-0 left-0 w-[183px] bg-gradient-to-l from-[rgba(5,9,13,0)] via-[rgba(5,9,13,0.84)] via-[72%] to-[#05090d]" />
              <div className="absolute inset-y-0 left-0 w-[228px] bg-[linear-gradient(90deg,#05090d_0%,rgba(5,9,13,0.92)_34%,rgba(5,9,13,0.42)_74%,rgba(5,9,13,0)_100%)]" />
              <div className="absolute inset-y-0 left-[18px] w-[96px] bg-[radial-gradient(ellipse_at_left,rgba(108,181,255,0.08),rgba(108,181,255,0)_72%)] mix-blend-screen" />
            </div>

            <div className="absolute inset-y-0 right-[-12px] w-[240px]">
              <div className="absolute inset-y-0 right-0 w-[183px] bg-gradient-to-l from-[rgba(5,9,13,0)] via-[rgba(5,9,13,0.84)] via-[72%] to-[#05090d] rotate-180" />
              <div className="absolute inset-y-0 right-0 w-[228px] bg-[linear-gradient(270deg,#05090d_0%,rgba(5,9,13,0.92)_34%,rgba(5,9,13,0.42)_74%,rgba(5,9,13,0)_100%)]" />
              <div className="absolute inset-y-0 right-[18px] w-[96px] bg-[radial-gradient(ellipse_at_right,rgba(108,181,255,0.08),rgba(108,181,255,0)_72%)] mix-blend-screen" />
            </div>
          </div>

	          <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-screen min-h-[821px] w-[1440px] -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(180deg,transparent_0%,black_24px,black_calc(100%-24px),transparent_100%),linear-gradient(90deg,transparent_0%,black_24px,black_calc(100%-24px),transparent_100%)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(180deg,transparent_0%,black_24px,black_calc(100%-24px),transparent_100%),linear-gradient(90deg,transparent_0%,black_24px,black_calc(100%-24px),transparent_100%)] [-webkit-mask-composite:source-in]">
	            <video
	              className="absolute left-1/2 top-1/2 h-[calc(100%+4px)] w-[calc(100%+4px)] -translate-x-1/2 -translate-y-1/2 object-cover opacity-70 mix-blend-plus-lighter"
	              muted
	              autoPlay
	              loop
	              playsInline
	            >
	              <source src="/hero-video.webm" type="video/webm" />
	              <source src="/hero-video-h264.mp4" type="video/mp4" />
	              {dict.common.videoUnsupported}
	            </video>
	            <div className="absolute -inset-px bg-[color:var(--primitive-colors-primary-300)] opacity-20 mix-blend-color" />
	            <div className="absolute -left-px -right-px top-0 h-[154px] bg-gradient-to-b from-[#05090d] to-[rgba(5,9,13,0)]" />
	            <div className="absolute -left-px -right-px bottom-0 h-[228px] bg-gradient-to-b from-[rgba(5,9,13,0)] via-[rgba(5,9,13,0.42)] via-[58%] to-[#05090d]" />
	            <div className="absolute -left-px -right-px bottom-0 h-[104px] bg-[linear-gradient(180deg,rgba(5,9,13,0)_0%,rgba(5,9,13,0.72)_72%,#05090d_100%)] blur-[22px]" />
	          </div>

          <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[max(1000px,100vh)] w-[1441px] -translate-x-1/2 overflow-visible opacity-70">
            <div className="absolute left-[-138px] top-0 h-[910px] w-[1208px] overflow-hidden opacity-[0.15] mix-blend-screen">
              <div className="absolute inset-0">
                <img alt="" className="absolute -inset-1 size-[calc(100%+8px)] max-w-none object-contain" src={imgGlowA} />
              </div>
              <div className="absolute inset-0">
                <img alt="" className="absolute -inset-1 size-[calc(100%+8px)] max-w-none object-contain" src={imgGlowB} />
              </div>
              <div className="absolute inset-0">
                <img alt="" className="absolute -inset-1 size-[calc(100%+8px)] max-w-none object-contain" src={imgGlowC} />
              </div>
            </div>

            <div className="absolute left-[-428px] top-0 h-[960px] w-[1208px] overflow-hidden opacity-[0.15] mix-blend-plus-lighter">
              <div className="absolute inset-0">
                <img alt="" className="absolute -inset-1 size-[calc(100%+8px)] max-w-none object-contain" src={imgGlowA} />
              </div>
              <div className="absolute inset-0">
                <img alt="" className="absolute -inset-1 size-[calc(100%+8px)] max-w-none object-contain" src={imgGlowB} />
              </div>
              <div className="absolute inset-0">
                <img alt="" className="absolute -inset-1 size-[calc(100%+8px)] max-w-none object-contain" src={imgGlowC} />
              </div>
            </div>

            <div className="absolute right-[-422px] top-[486px] flex h-[1080px] w-[1559px] -translate-y-1/2 items-center justify-center mix-blend-screen">
              <div className="relative h-[1080px] w-[1559px] rotate-180 overflow-hidden opacity-30 [-webkit-transform:rotate(180deg)_scaleY(-1)] [transform:rotate(180deg)_scaleY(-1)]">
                <img alt="" className="absolute -inset-1 size-[calc(100%+8px)] max-w-none object-contain" src={imgGlowD} />
                <img alt="" className="absolute -inset-1 size-[calc(100%+8px)] max-w-none object-contain" src={imgGlowE} />
                <img alt="" className="absolute -inset-1 size-[calc(100%+8px)] max-w-none object-contain" src={imgGlowF} />
              </div>
            </div>

            <div className="absolute right-[-480px] top-0 h-[1373px] w-[1296px] overflow-visible mix-blend-screen">
              <div className="absolute right-[610px] top-[18px] h-[1454px] w-[214px] rotate-[29.77deg] skew-x-[-0.45deg] bg-gradient-to-b from-[#aab9c9] from-[5%] to-[67%] to-[rgba(170,185,201,0)] opacity-[0.06] blur-[6.864px]" />
              <div className="absolute right-[228px] top-[-224px] h-[1620px] w-[372px] rotate-[29.77deg] skew-x-[-0.45deg] bg-gradient-to-b from-[#b7c8da] from-[4%] via-[rgba(170,185,201,0.72)] via-[22%] to-[67%] to-[rgba(170,185,201,0)] opacity-[0.28] blur-[15px]" />
              <div className="absolute right-[4px] top-[-336px] h-[1260px] w-[214px] rotate-[29.77deg] skew-x-[-0.45deg] bg-gradient-to-b from-[#aab9c9] from-[5%] to-[67%] to-[rgba(170,185,201,0)] opacity-[0.09] blur-[12.202px]" />
            </div>
          </div>

          <div className="absolute inset-x-0 top-0 z-10 flex w-full flex-col items-center">
            <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />
            <div className="relative mt-[39px] w-full max-w-[1216px] px-6 lg:px-0">
              <a
                className="absolute left-0 top-0 -m-4 inline-flex items-center gap-2 p-4 transition-colors duration-200 hover:bg-[#081018]"
                href={`/${locale}`}
              >
                <img alt="Nexorum" className="h-[20.933px] w-auto" src="/nexorum.png" />
              </a>

              <div className="absolute left-[728px] top-0 flex items-center gap-2">
                <img alt="" className="h-6 w-auto object-contain" src={imgWelcome} />
                <span className="text-[14px] font-medium leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                  {dict.common.welcome}
                </span>
              </div>

              <div className="absolute left-[933px] top-0 flex items-center">
                <Suspense fallback={<div className="h-6 w-10" aria-hidden />}>
                  <LanguageSelector locale={locale} labels={dict.language.options} />
                </Suspense>
              </div>

              <div className="absolute right-0 top-0 flex items-center gap-2">
                <HeroMenu
                  locale={locale}
                  iconSrc={imgMenu}
                  buttonClassName="size-8 opacity-90"
                  imgClassName="size-8"
                />
              </div>
            </div>
            <div className="mt-[61px] mb-12 h-px w-full bg-[rgba(118,131,143,0.18)]" />

            <div className="relative grid w-full max-w-[1216px] grid-cols-1 items-start gap-14 px-6 lg:grid-cols-[1fr_488px] lg:items-center lg:px-0">
              <h1 className={headlineClassName}>
                {headlineLines.map((line, idx) => (
                  <p key={idx} className={idx === 1 ? "mb-0 leading-[1.5] pl-[56px]" : "mb-0 leading-[1.5]"}>
                    {line}
                  </p>
                ))}
              </h1>

              <div>
                <p className="text-[14px] font-light leading-[1.6] text-[color:var(--primitive-colors-gray-200)] indent-[48px]">
                  {dict.hero.description}
                </p>
                <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
                  <CtaPrimary label={dict.common.talkToSpecialist} />
                  <HowItWorksLink href="#">{dict.common.seeHowItWorks}</HowItWorksLink>
                </div>
              </div>
            </div>

	          </div>
	        </div>
	      </div>
	    </section>
	  );
}
