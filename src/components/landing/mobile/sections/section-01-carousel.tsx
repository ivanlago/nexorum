import type { LandingDictionary } from "@/i18n/landing-dictionary";

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

export function MobileSection01Carousel({ dict }: { dict: LandingDictionary }) {
  const features = dict.features;

  return (
    <section className="relative mt-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <div className="absolute inset-0 bg-[radial-gradient(58%_260%_at_50%_-24%,rgba(84,150,255,0.68),rgba(36,82,152,0.34)_18%,rgba(7,13,20,0.16)_36%,rgba(5,9,13,0)_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(72%_230%_at_50%_-36%,rgba(129,184,255,0.18),rgba(36,82,152,0.12)_26%,rgba(5,9,13,0)_60%)] mix-blend-lighten" />
      </div>
      <div
        aria-hidden
        className="h-px w-full opacity-60 bg-[linear-gradient(90deg,rgba(118,131,143,0)_0%,rgba(118,131,143,0.28)_8%,rgba(118,131,143,0.28)_92%,rgba(118,131,143,0)_100%)]"
      />
      <div className="relative mt-6 overflow-x-auto px-6">
        <div className="flex w-max gap-8 pb-6">
          {items.map((item, idx) => (
            <div key={item.icon} className="w-[168px]">
              <div className="[font-family:var(--font-orbitron)] text-[12px] font-semibold leading-[1.6] text-[rgba(167,184,198,0.95)]">
                {features.items[idx]?.title}
              </div>
              <div className="mt-4 flex items-center gap-4">
                <img alt="" className="size-6 opacity-90" src={item.icon} />
                <div className="text-[12px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
                  {features.items[idx]?.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        aria-hidden
        className="h-px w-full opacity-60 bg-[linear-gradient(90deg,rgba(118,131,143,0)_0%,rgba(118,131,143,0.28)_8%,rgba(118,131,143,0.28)_92%,rgba(118,131,143,0)_100%)]"
      />
    </section>
  );
}
