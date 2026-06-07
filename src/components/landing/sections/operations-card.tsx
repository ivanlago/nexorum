type Props = {
  tag: string;
  subtitle: string;
  title: string;
  description: string;
  videoWebmSrc: string;
  videoMp4Src: string;
  videoUnsupportedText: string;
  className?: string;
};

// Figma nodes:
// - Top layer inside card: 300:4856
// - Dust layer outside card: 300:4887
// - Top text+divider: 300:4859
// - Video surround structure: 300:4864
const imgCardTop = "https://www.figma.com/api/mcp/asset/bb91a341-c74a-4e5a-9115-ce61e8fbe3ee";
const imgCardDustTop = "https://www.figma.com/api/mcp/asset/9a4a5b28-bd46-4231-81e9-225f35659d32";
const imgCardDivider = "https://www.figma.com/api/mcp/asset/ce244b82-85a8-4a4a-b342-e47ccdfb2e2c";
const imgCardTexture01 = "https://www.figma.com/api/mcp/asset/7be2047f-b412-4ac4-bc01-ce10cdfcdc6b";
const imgCardTexture02 = "https://www.figma.com/api/mcp/asset/0b60c6d8-aeec-46ba-854b-a62fabcd6838";

export function OperationsCard({
  tag,
  subtitle,
  title,
  description,
  videoWebmSrc,
  videoMp4Src,
  videoUnsupportedText,
  className,
}: Props) {
  return (
    <div className={["relative mx-auto w-full max-w-[280px]", className].filter(Boolean).join(" ")}>
      <div className="pointer-events-none absolute left-0 top-[-85px] z-20 h-[168px] w-[280px] opacity-50">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute right-[-8.57%] top-0 h-full w-[140%] max-w-none" src={imgCardDustTop} />
        </div>
      </div>

      <div
        className={[
          "relative h-[500px] w-full overflow-hidden",
          "border-[0.5px] border-[color:var(--primitive-colors-gray-600)]",
          "bg-gradient-to-b from-[rgba(8,15,22,0.4)] to-[#080f16]",
          "px-8 py-10 shadow-[0px_24px_120px_rgba(0,0,0,0.5)]",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute left-0 top-[-85px] z-0 h-[168px] w-[280px]">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute right-[-8.57%] top-0 h-full w-[140%] max-w-none" src={imgCardTop} />
          </div>
        </div>

        <div className="absolute left-0 top-10 z-10 h-[63px] w-full">
          <div className="flex w-full items-center gap-6 px-8">
            <div className="[font-family:var(--font-orbitron)] text-[14px] font-bold leading-[1.39] text-[color:var(--primitive-colors-primary-400)] whitespace-nowrap">
              {tag}
            </div>
            <div className="h-[32px] w-[158px] overflow-hidden text-[10px] font-light italic leading-[1.6] text-[color:var(--primitive-colors-gray-200)]">
              {subtitle}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-[0.5px] w-[280px]">
            <div className="absolute inset-0">
              <img alt="" className="block size-full max-w-none" src={imgCardDivider} />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-[143px] z-10 h-[171px] w-[175px] -translate-x-1/2">
          <div className="pointer-events-none absolute left-[-53.5px] top-[-136px] h-[97px] w-[280px] opacity-30">
            <img
              alt=""
              className="absolute left-[-5.14px] top-[-34px] h-[131px] w-[430.246px] max-w-none rotate-180"
              src={imgCardTexture02}
            />
          </div>
          <div className="pointer-events-none absolute left-[-53.5px] top-[182px] h-[173px] w-[280px] opacity-30">
            <img
              alt=""
              className="absolute left-[-5.14px] top-[42px] h-[131px] w-[430.246px] max-w-none rotate-180"
              src={imgCardTexture01}
            />
          </div>

          <div
            className="absolute left-1/2 top-1/2 h-[171px] w-[200px] -translate-x-1/2 -translate-y-1/2 opacity-70 mix-blend-lighten"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 64% 58% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 48%, rgba(0,0,0,0.7) 68%, rgba(0,0,0,0.18) 86%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(ellipse 64% 58% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 48%, rgba(0,0,0,0.7) 68%, rgba(0,0,0,0.18) 86%, rgba(0,0,0,0) 100%)",
            }}
          >
            <video className="absolute inset-0 h-full w-full object-cover mix-blend-lighten" muted autoPlay loop playsInline>
              <source src={videoWebmSrc} type="video/webm" />
              <source src={videoMp4Src} type="video/mp4" />
              {videoUnsupportedText}
            </video>
          </div>
        </div>

        <div className="absolute left-0 top-[358px] z-10 h-[0.5px] w-[280px]">
          <div className="absolute inset-0">
            <img alt="" className="block size-full max-w-none" src={imgCardDivider} />
          </div>
        </div>

        <div className="absolute left-8 right-8 top-[398px] z-10 h-[62px]">
          <div className="flex h-[10px] w-full items-center overflow-hidden [font-family:var(--font-orbitron)] text-[14px] font-semibold leading-[0] text-[color:var(--primitive-colors-gray-200)]">
            <span className="block leading-[1.4]">{title}</span>
          </div>
          <div className="mt-6 h-[24px] overflow-hidden text-[12px] font-light leading-3 text-[color:var(--primitive-colors-gray-200)]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
