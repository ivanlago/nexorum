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
        "group inline-flex items-center gap-2 text-[14px] leading-none font-medium text-[color:var(--primitive-colors-gray-200)] transition-colors duration-300 hover:text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      href={href}
    >
      <span className="block leading-none">{children}</span>
      <img
        alt=""
        aria-hidden="true"
        className="size-4 shrink-0 self-center opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
        src="/chevron.svg"
      />
    </a>
  );
}
