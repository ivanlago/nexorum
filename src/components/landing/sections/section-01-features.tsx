import type { LandingDictionary } from "@/i18n/landing-dictionary";
import type { SupportedLocale } from "@/i18n/locales";

const items = [
  {
    icon: "/hero-imagem-1.svg",
  },
  {
    icon: "/hero-imagem-2.svg",
  },
  {
    icon: "/hero-imagem-3.svg",
  },
  {
    icon: "/hero-imagem-4.svg",
  },
  {
    icon: "/hero-imagem-5.svg",
  },
];

export function LandingSection01Features({ dict, locale }: { dict: LandingDictionary; locale: SupportedLocale }) {
  const features = dict.features;

  return (
    <section className="relative z-20 -mt-[116px] w-full overflow-hidden pb-0 pt-0">
      <div className="relative w-full px-6 lg:px-0">
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute inset-0 bg-[radial-gradient(46%_260%_at_50%_-34%,rgba(84,150,255,0.72),rgba(36,82,152,0.38)_18%,rgba(7,13,20,0.18)_32%,rgba(5,9,13,0)_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(62%_240%_at_50%_-44%,rgba(129,184,255,0.22),rgba(36,82,152,0.14)_24%,rgba(5,9,13,0)_58%)] mix-blend-lighten" />
          </div>

          <div className="flex w-full flex-col items-center gap-12">
            <div
              aria-hidden
              className="h-px w-full opacity-60 bg-[linear-gradient(90deg,rgba(118,131,143,0)_0%,rgba(118,131,143,0.28)_8%,rgba(118,131,143,0.28)_92%,rgba(118,131,143,0)_100%)]"
            />

            <div className="flex w-[1216px] items-center gap-8">
              {items.map((item, idx) => (
                <div
                  key={item.icon}
                  className={[
                    "flex min-w-0 flex-col items-start gap-8",
                    locale === "en-US" && idx === 3 ? "flex-[1.18]" : "flex-1",
                  ].join(" ")}
                >
                  <div className="[font-family:var(--font-orbitron)] bg-clip-text text-[14px] font-semibold leading-[1.6] text-transparent [background-image:linear-gradient(0deg,#A7B8C6,#A7B8C6)]">
                    {features.items[idx]?.title}
                  </div>
                  <div className="flex h-8 w-full items-center justify-center gap-4">
                    <img alt="" className="size-8 opacity-90" src={item.icon} />
                    <div className="min-w-0 flex-1 text-[14px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                      {features.items[idx]?.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              aria-hidden
              className="h-px w-full opacity-60 bg-[linear-gradient(90deg,rgba(118,131,143,0)_0%,rgba(118,131,143,0.28)_8%,rgba(118,131,143,0.28)_92%,rgba(118,131,143,0)_100%)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
