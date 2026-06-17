import { CtaPrimary } from "@/components/landing/sections/cta-primary";
import { LanguageSelector } from "@/components/landing/language-selector";
import { HeroMenu } from "@/components/landing/hero-menu";
import { HowItWorksLink } from "@/components/ui/how-it-works-link";
import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { getLocalePath, type SupportedLocale } from "@/i18n/locales";
import { Suspense } from "react";

const imgWelcome = "/header-bemvindo.png";
const imgMenu = "/menu.png";

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
	        <div className="h-[1000px] w-full">
          <div className="pointer-events-none absolute left-1/2 top-[216px] z-0 h-[822px] w-[calc(100vw+24px)] -translate-x-1/2">
            <div className="absolute left-[-12px] top-0 h-[822px] w-[240px]">
              <div className="absolute left-0 top-0 h-[822px] w-[183px] bg-[linear-gradient(270deg,rgba(5,9,13,0)_0%,rgba(5,9,13,0.14)_18%,rgba(5,9,13,0.58)_52%,rgba(5,9,13,0.9)_82%,#05090d_100%)]" />
              <div className="absolute left-0 top-0 h-[822px] w-[236px] bg-[linear-gradient(90deg,#05090d_0%,rgba(5,9,13,0.88)_28%,rgba(5,9,13,0.44)_62%,rgba(5,9,13,0.12)_84%,rgba(5,9,13,0)_100%)]" />
              <div className="absolute left-[22px] top-0 h-[822px] w-[104px] bg-[radial-gradient(ellipse_at_left,rgba(108,181,255,0.07),rgba(108,181,255,0.02)_42%,rgba(108,181,255,0)_74%)] mix-blend-screen" />
            </div>

            <div className="absolute right-[-12px] top-0 h-[822px] w-[240px]">
              <div className="absolute right-0 top-0 h-[822px] w-[183px] bg-[linear-gradient(90deg,rgba(5,9,13,0)_0%,rgba(5,9,13,0.14)_18%,rgba(5,9,13,0.58)_52%,rgba(5,9,13,0.9)_82%,#05090d_100%)]" />
              <div className="absolute right-0 top-0 h-[822px] w-[236px] bg-[linear-gradient(270deg,#05090d_0%,rgba(5,9,13,0.88)_28%,rgba(5,9,13,0.44)_62%,rgba(5,9,13,0.12)_84%,rgba(5,9,13,0)_100%)]" />
              <div className="absolute right-[22px] top-0 h-[822px] w-[104px] bg-[radial-gradient(ellipse_at_right,rgba(108,181,255,0.07),rgba(108,181,255,0.02)_42%,rgba(108,181,255,0)_74%)] mix-blend-screen" />
            </div>
          </div>

	          <div className="pointer-events-none absolute left-1/2 top-[216px] z-0 h-[821px] w-[1440px] -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(180deg,transparent_0%,black_24px,black_calc(100%-24px),transparent_100%),linear-gradient(90deg,transparent_0%,black_24px,black_calc(100%-24px),transparent_100%)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(180deg,transparent_0%,black_24px,black_calc(100%-24px),transparent_100%),linear-gradient(90deg,transparent_0%,black_24px,black_calc(100%-24px),transparent_100%)] [-webkit-mask-composite:source-in]">
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

          <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[1000px] w-[1441px] -translate-x-1/2 overflow-visible opacity-70">
            <div className="absolute left-[-138px] top-0 h-[910px] w-[1208px] overflow-hidden opacity-[0.15] mix-blend-screen">
              <div className="absolute left-[-12%] top-[-16%] h-[132%] w-[118%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(108,181,255,0.4)_0%,rgba(108,181,255,0.16)_26%,rgba(108,181,255,0.03)_48%,rgba(108,181,255,0)_72%)] blur-[28px]" />
              <div className="absolute left-[8%] top-[-8%] h-[118%] w-[92%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(171,210,255,0.28)_0%,rgba(171,210,255,0.1)_30%,rgba(171,210,255,0)_62%)] blur-[34px]" />
              <div className="absolute left-[16%] top-[6%] h-[98%] w-[72%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(87,144,255,0.22)_0%,rgba(87,144,255,0.06)_34%,rgba(87,144,255,0)_68%)] blur-[40px]" />
            </div>

            <div className="absolute left-[-428px] top-0 h-[960px] w-[1208px] overflow-hidden opacity-[0.15] mix-blend-plus-lighter">
              <div className="absolute left-[-18%] top-[-14%] h-[136%] w-[124%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(108,181,255,0.36)_0%,rgba(108,181,255,0.14)_26%,rgba(108,181,255,0.03)_50%,rgba(108,181,255,0)_74%)] blur-[30px]" />
              <div className="absolute left-[4%] top-[-10%] h-[120%] w-[96%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(171,210,255,0.24)_0%,rgba(171,210,255,0.08)_32%,rgba(171,210,255,0)_62%)] blur-[36px]" />
              <div className="absolute left-[18%] top-[4%] h-[102%] w-[74%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(87,144,255,0.2)_0%,rgba(87,144,255,0.05)_36%,rgba(87,144,255,0)_70%)] blur-[42px]" />
            </div>

            <div className="absolute right-[-422px] top-[486px] flex h-[1080px] w-[1559px] -translate-y-1/2 items-center justify-center mix-blend-screen">
              <div className="relative h-[1080px] w-[1559px] rotate-180 overflow-hidden opacity-30 [-webkit-transform:rotate(180deg)_scaleY(-1)] [transform:rotate(180deg)_scaleY(-1)]">
                <div className="absolute left-[6%] top-[10%] h-[84%] w-[88%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(108,181,255,0.26)_0%,rgba(108,181,255,0.08)_32%,rgba(108,181,255,0)_68%)] blur-[40px]" />
                <div className="absolute left-[22%] top-[18%] h-[66%] w-[58%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(184,217,255,0.2)_0%,rgba(184,217,255,0.05)_38%,rgba(184,217,255,0)_70%)] blur-[34px]" />
                <div className="absolute left-[34%] top-[28%] h-[44%] w-[34%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(118,188,255,0.18)_0%,rgba(118,188,255,0.04)_40%,rgba(118,188,255,0)_72%)] blur-[30px]" />
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
                className="group absolute left-0 top-0 -m-4 inline-flex items-center gap-2 p-4 transition-colors duration-300 hover:text-white"
                href={getLocalePath(locale)}
              >
                <img
                  alt="Nexorum"
                  className="h-[20.933px] w-auto transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  src="/nexorum.png"
                />
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
                  labels={dict.navigation}
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
                  <CtaPrimary label={dict.common.talkToSpecialist} locale={locale} />
                  <HowItWorksLink href="#como-aprende">{dict.common.seeHowItWorks}</HowItWorksLink>
                </div>
              </div>
            </div>

	          </div>
	        </div>
	      </div>
	    </section>
	  );
}
