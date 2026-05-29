import type { LandingDictionary } from "@/i18n/landing-dictionary";
import { LandingSectionBackground } from "@/components/landing/landing-section-background";

const imgDivider = "https://www.figma.com/api/mcp/asset/4bb21cb0-3d1f-4d49-87c4-5311bcb87e87";

const items = [
  {
    icon: "/detecta.png",
  },
  {
    icon: "/alerta.png",
  },
  {
    icon: "/recomenda.png",
  },
  {
    icon: "/simula.png",
  },
  {
    icon: "/governa.png",
  },
];

export function MobileSection01Carousel({ dict }: { dict: LandingDictionary }) {
  const features = dict.features;

  return (
    <section className="relative mt-8 overflow-hidden">
      <LandingSectionBackground />
      <img alt="" className="h-px w-full opacity-60" src={imgDivider} />
      <div className="mt-6 overflow-x-auto px-6">
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
      <img alt="" className="h-px w-full opacity-60" src={imgDivider} />
    </section>
  );
}
