import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
};

export function HowItWorksLink({ children, href, className }: Props) {
  return (
    <a
      className={[
        "inline-flex items-center gap-2 text-[14px] leading-none font-medium text-[color:var(--primitive-colors-gray-200)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      href={href}
    >
      <span>{children}</span>
      <img alt="" aria-hidden="true" className="size-4 opacity-70" src="/chevron.svg" />
    </a>
  );
}

