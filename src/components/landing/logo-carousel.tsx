import type { CSSProperties } from "react";

type LogoItem = {
  alt: string;
  src: string;
  width?: number;
  height?: number;
};

type LogoCarouselProps = {
  logos: LogoItem[];
  durationSeconds?: number;
  className?: string;
  itemClassName?: string;
};

export function LogoCarousel({ logos, durationSeconds = 22, className = "", itemClassName = "h-9" }: LogoCarouselProps) {
  const style = { ["--logo-marquee-duration" as any]: `${durationSeconds}s` } as CSSProperties;

  return (
    <div
      aria-label="Logos"
      className={[
        "group relative w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        "[-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      ].join(" ")}
    >
      <div className="flex w-max animate-logo-marquee items-center gap-10 will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none" style={style}>
        <div className="flex items-center gap-10 pr-10">
          {logos.map((l) => (
            <img
              key={l.alt}
              alt={l.alt}
              className={[itemClassName, "shrink-0 object-contain"].join(" ")}
              src={l.src}
              style={l.width || l.height ? { width: l.width, height: l.height } : undefined}
            />
          ))}
        </div>
        <div aria-hidden className="flex items-center gap-10 pr-10">
          {logos.map((l) => (
            <img
              key={`${l.alt}-dup`}
              alt=""
              className={[itemClassName, "shrink-0 object-contain"].join(" ")}
              src={l.src}
              style={l.width || l.height ? { width: l.width, height: l.height } : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
