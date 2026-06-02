import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Props = Omit<ComponentPropsWithoutRef<"button">, "children"> & {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  leftClassName?: string;
  rightClassName?: string;
  borderClassName?: string;
  right?: ReactNode;
  highlights?: ReactNode | null;
};

function DefaultChevronRight() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 16 16">
      <path d="M6 3.5 10.5 8 6 12.5l-1-1L8.5 8 5 4.5l1-1Z" fill="currentColor" />
    </svg>
  );
}

export function Button({
  children,
  className,
  containerClassName,
  leftClassName,
  rightClassName,
  borderClassName,
  right,
  highlights,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      className={["relative h-[46px] w-[235px]", className].filter(Boolean).join(" ")}
      type={type}
      {...props}
    >
      <span
        className={[
          "absolute left-[-4px] top-[-4px] flex gap-1 p-1",
          "border-[0.5px] border-[color:var(--primitive-colors-primary-800)]",
          borderClassName,
          containerClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span
          className={[
            "flex items-center justify-center bg-gradient-to-r from-[#00619b] to-[#5092d3]",
            "px-[18px] py-[18px]",
            "shadow-[0px_4px_60px_rgba(38,90,127,0.6)]",
            leftClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span className="whitespace-nowrap text-[14px] font-medium leading-none text-white">{children}</span>
        </span>

        <span
          className={[
            "flex items-center justify-center bg-gradient-to-r from-[#5092d3] to-[#00619b]",
            "px-[15px] py-[15px]",
            "shadow-[0px_4px_60px_rgba(38,90,127,0.6)]",
            rightClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span className="relative size-4 text-white">{right ?? <DefaultChevronRight />}</span>
        </span>
      </span>

      {highlights === null ? null : highlights ?? (
        <>
          <span className="absolute left-[69.5px] top-0 h-px w-[119px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)]" />
          <span className="absolute left-[4.5px] top-[45px] h-px w-[98px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)]" />
        </>
      )}
    </button>
  );
}
