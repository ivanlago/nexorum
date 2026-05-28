type Props = {
  value: "01" | "02" | "03" | "04" | "05";
  className?: string;
};

export function SectionIndex({ value, className }: Props) {
  return (
    <span
      className={[
        "[font-family:var(--font-orbitron)] text-[14px] font-bold leading-[1.39] text-[color:var(--primitive-colors-primary-400)] whitespace-nowrap",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {`[ ${value} ]`}
    </span>
  );
}

