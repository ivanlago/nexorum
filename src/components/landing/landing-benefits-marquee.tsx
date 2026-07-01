import { TextMarquee } from "@/components/landing/text-marquee";

type Props = {
  labels: readonly string[];
  className?: string;
  marqueeClassName?: string;
};

export function LandingBenefitsMarquee({ labels, className = "", marqueeClassName = "" }: Props) {
  return (
    <div
      className={[
        "h-[111px] w-full overflow-hidden bg-gradient-to-r from-[rgba(8,16,24,0)] via-[#081018] via-[52.885%] to-[rgba(8,16,24,0)] px-6 lg:px-0",
        className,
      ].join(" ")}
    >
      <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />
      <div className="flex h-[109px] w-full items-center">
        <TextMarquee className={marqueeClassName} durationSeconds={26} contentClassName="gap-16 whitespace-nowrap">
          {labels.map((label) => (
            <div key={label} className="flex items-center gap-16">
              <div className="[font-family:var(--font-orbitron)] text-[16px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-300)]">
                {label}
              </div>
              <div
                aria-hidden="true"
                className="[font-family:var(--font-orbitron)] text-[28px] font-black leading-[1.4] text-[color:var(--primitive-colors-primary-500)]"
              >
                /
              </div>
            </div>
          ))}
        </TextMarquee>
      </div>
      <div className="h-px w-full bg-[rgba(118,131,143,0.25)]" />
    </div>
  );
}
