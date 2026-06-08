import type { LandingDictionary } from "@/i18n/landing-dictionary";

const imgDivider = "https://www.figma.com/api/mcp/asset/4bb21cb0-3d1f-4d49-87c4-5311bcb87e87";
const imgBgVector1 = "https://www.figma.com/api/mcp/asset/d4aa8cc6-b602-4995-bbb4-2b24dccb2473";
const imgBgVector2 = "https://www.figma.com/api/mcp/asset/684386e2-e653-490a-92ae-32ea07dfa3f6";

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
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgBgVector1} />
        <img alt="" className="absolute inset-0 size-full object-cover mix-blend-lighten" src={imgBgVector2} />
      </div>
      <img alt="" className="h-px w-full opacity-60" src={imgDivider} />
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
      <img alt="" className="h-px w-full opacity-60" src={imgDivider} />
    </section>
  );
}
