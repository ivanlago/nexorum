import type { LandingDictionary } from "@/i18n/landing-dictionary";

const imgBgVector1 = "https://www.figma.com/api/mcp/asset/20c53c2a-664b-4a61-897c-e9234223a6de";
const imgBgVector2 = "https://www.figma.com/api/mcp/asset/6d9601fe-e979-4187-935e-4cb1914e5472";

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

export function LandingSection01Features({ dict }: { dict: LandingDictionary }) {
  const features = dict.features;

  return (
    <section className="relative z-20 -mt-[116px] w-full overflow-hidden pb-6 pt-0">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgBgVector1} />
        <img alt="" className="absolute inset-0 size-full object-cover mix-blend-lighten" src={imgBgVector2} />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-0">
        <div className="h-px w-full bg-[rgba(167,184,198,0.16)]" />
        <div className="mt-8 overflow-x-auto">
          <div className="mx-auto grid w-full min-w-[980px] max-w-[1216px] grid-cols-5 gap-8">
            {items.map((item, idx) => (
              <div key={item.icon} className="flex flex-col gap-6">
                <div className="[font-family:var(--font-orbitron)] text-[14px] font-semibold leading-[1.6] text-[rgba(167,184,198,0.95)]">
                  {features.items[idx]?.title}
                </div>
                <div className="flex items-start gap-4">
                  <img alt="" className="size-8 opacity-90" src={item.icon} />
                  <div className="text-[14px] font-light leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
                    {features.items[idx]?.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 h-px w-full bg-[rgba(167,184,198,0.16)]" />
      </div>
    </section>
  );
}
