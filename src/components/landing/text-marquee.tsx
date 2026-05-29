"use client";

import type { CSSProperties, ReactNode } from "react";

type TextMarqueeProps = {
  children: ReactNode;
  durationSeconds?: number;
  className?: string;
  contentClassName?: string;
};

export function TextMarquee({
  children,
  durationSeconds = 28,
  className = "",
  contentClassName = "",
}: TextMarqueeProps) {
  const style = { ["--logo-marquee-duration" as any]: `${durationSeconds}s` } as CSSProperties;

  return (
    <div
      aria-label="Marquee"
      className={[
        "group relative w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        "[-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      ].join(" ")}
    >
      <div
        className="flex w-max animate-logo-marquee items-center will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={style}
      >
        <div className={["flex items-center pr-16", contentClassName].join(" ")}>
          {children}
        </div>
        <div aria-hidden className={["flex items-center pr-16", contentClassName].join(" ")}>
          {children}
        </div>
      </div>
    </div>
  );
}

