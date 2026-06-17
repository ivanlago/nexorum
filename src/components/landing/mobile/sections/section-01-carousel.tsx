import type { LandingDictionary } from "@/i18n/landing-dictionary";

const imgCarouselBackground = "/figma-assets/mobile-hero-carousel-bg.png";

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
      <div className="pointer-events-none absolute inset-0">
        <img alt="" className="h-full w-full object-cover opacity-90" src={imgCarouselBackground} />
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
