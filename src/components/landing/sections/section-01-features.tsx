import type { LandingDictionary } from "@/i18n/landing-dictionary";

const imgBgVector1 = "https://www.figma.com/api/mcp/asset/d4aa8cc6-b602-4995-bbb4-2b24dccb2473";
const imgBgVector2 = "https://www.figma.com/api/mcp/asset/684386e2-e653-490a-92ae-32ea07dfa3f6";
const imgDivider = "https://www.figma.com/api/mcp/asset/112fe459-2ef0-4e47-9934-ba3743afd721";

const items = [
  {
    icon: "https://www.figma.com/api/mcp/asset/82800e39-c1fb-467d-a2c7-a06ceafbef3a",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/d88a6581-62a0-4ee7-9b1f-506f2fed8796",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/2c01e099-3e68-4a02-9e4f-c60ff067a5d5",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/dd065b5c-d02e-4068-8ac4-29341966d676",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/fc64979a-f4f6-4f1c-b587-81c501643811",
  },
];

export function LandingSection01Features({ dict }: { dict: LandingDictionary }) {
  const features = dict.features;

  return (
    <section className="relative z-20 -mt-[116px] w-full overflow-hidden pb-0 pt-0">
      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-0">
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <img alt="" className="absolute inset-0 size-full object-cover" src={imgBgVector1} />
            <img alt="" className="absolute inset-0 size-full object-cover mix-blend-lighten" src={imgBgVector2} />
          </div>

          <div className="flex w-full flex-col items-center gap-12">
            <img alt="" className="h-px w-full opacity-60" src={imgDivider} />

            <div className="flex w-[1216px] items-center gap-8">
              {items.map((item, idx) => (
                <div key={item.icon} className="flex min-w-0 flex-1 flex-col items-start gap-8">
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

            <img alt="" className="h-px w-full opacity-60" src={imgDivider} />
          </div>
        </div>
      </div>
    </section>
  );
}
