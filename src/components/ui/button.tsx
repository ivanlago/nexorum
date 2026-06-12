import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonLikeProps =
  | ({
      as?: "button";
    } & Omit<ComponentPropsWithoutRef<"button">, "children">)
  | ({
      as: "a";
    } & Omit<ComponentPropsWithoutRef<"a">, "children">);

type Props = ButtonLikeProps & {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  leftClassName?: string;
  labelClassName?: string;
  rightClassName?: string;
  borderClassName?: string;
  right?: ReactNode;
  highlights?: ReactNode | null;
};

function DefaultChevronRight() {
  return <img alt="" aria-hidden="true" className="size-4 max-w-none" src="/button-image.svg" />;
}

function ButtonInner({
  children,
  className,
  containerClassName,
  leftClassName,
  labelClassName,
  rightClassName,
  borderClassName,
  right,
  highlights,
}: Pick<
  Props,
  | "children"
  | "className"
  | "containerClassName"
  | "leftClassName"
  | "labelClassName"
  | "rightClassName"
  | "borderClassName"
  | "right"
  | "highlights"
>) {
  return (
    <>
      <span
        className={[
          "absolute inset-0 box-border flex h-[54px] w-[235px] gap-1 p-1 transition-colors duration-300",
          "border-[0.5px] border-[color:var(--primitive-colors-primary-800)]",
          borderClassName,
          containerClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span
          className={[
            "relative flex h-[46px] w-[177px] items-center justify-center overflow-hidden bg-gradient-to-r from-[#00619b] to-[#5092d3]",
            "px-[18px] py-0",
            "shadow-[0px_4px_60px_rgba(38,90,127,0.6)] transition-all duration-300",
            "group-hover:from-[#005487] group-hover:to-[#3f81bd] group-hover:shadow-[0px_5px_44px_rgba(27,63,88,0.58)]",
            leftClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span className="pointer-events-none absolute inset-0 bg-[rgba(2,17,29,0.18)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span
            className={["relative whitespace-nowrap text-[14px] font-medium leading-none text-white", labelClassName]
              .filter(Boolean)
              .join(" ")}
          >
            {children}
          </span>
        </span>

        <span
          className={[
            "relative flex h-[46px] w-[46px] items-center justify-center overflow-hidden bg-gradient-to-r from-[#5092d3] to-[#00619b]",
            "p-[15px]",
            "shadow-[0px_4px_60px_rgba(38,90,127,0.6)] transition-all duration-300",
            "group-hover:from-[#3f81bd] group-hover:to-[#005487] group-hover:shadow-[0px_5px_44px_rgba(27,63,88,0.58)]",
            rightClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span className="pointer-events-none absolute inset-0 bg-[rgba(2,17,29,0.18)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative size-4 text-white">
            {right ?? <DefaultChevronRight />}
          </span>
        </span>
      </span>

      {highlights === null ? null : highlights ?? (
        <span className="pointer-events-none absolute inset-1 z-20 overflow-hidden">
          <span className="absolute left-[65.5px] top-px h-px w-[119px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.52)] to-[rgba(255,255,255,0)] transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute bottom-0 left-[0.5px] h-px w-[98px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)] transition-opacity duration-300 group-hover:opacity-100" />
        </span>
      )}
    </>
  );
}

export function Button(props: Props) {
  const {
    as = "button",
    children,
    className,
    containerClassName,
    leftClassName,
    labelClassName,
    rightClassName,
    borderClassName,
    right,
    highlights,
  } = props;

  const sharedClassName = [
    "group relative h-[54px] min-h-[54px] max-h-[54px] w-[235px] min-w-[235px] max-w-[235px] flex-none appearance-none border-0 bg-transparent p-0 align-top",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const innerProps = {
    children,
    className,
    containerClassName,
    leftClassName,
    labelClassName,
    rightClassName,
    borderClassName,
    right,
    highlights,
  };

  if (as === "a") {
    const {
      as: _as,
      children: _children,
      className: _className,
      containerClassName: _containerClassName,
      leftClassName: _leftClassName,
      labelClassName: _labelClassName,
      rightClassName: _rightClassName,
      borderClassName: _borderClassName,
      right: _right,
      highlights: _highlights,
      ...anchorProps
    } = props as Extract<Props, { as: "a" }>;
    return (
      <a className={sharedClassName} {...anchorProps}>
        <ButtonInner {...innerProps} />
      </a>
    );
  }

  const {
    as: _as,
    children: _children,
    className: _className,
    containerClassName: _containerClassName,
    leftClassName: _leftClassName,
    labelClassName: _labelClassName,
    rightClassName: _rightClassName,
    borderClassName: _borderClassName,
    right: _right,
    highlights: _highlights,
    type = "button",
    ...buttonProps
  } = props as Extract<Props, { as?: "button" }>;
  return (
    <button className={sharedClassName} type={type} {...buttonProps}>
      <ButtonInner {...innerProps} />
    </button>
  );
}
