type Props = {
  label: string;
  className?: string;
};

export function CtaPrimary({ label, className }: Props) {
  return (
    <button
      className={[
        "relative h-[46px] w-[235px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      type="button"
    >
      <span className="absolute left-[-4px] top-[-4px] flex gap-1 border-[0.5px] border-[color:var(--primitive-colors-primary-800)] p-1">
        <span className="flex items-center bg-gradient-to-r from-[#00619b] to-[#5092d3] px-[18px] py-[18px] shadow-[0px_4px_30px_rgba(38,90,127,0.6)]">
          <span className="whitespace-nowrap text-[14px] font-medium leading-none text-white">{label}</span>
        </span>
        <span className="flex items-center bg-gradient-to-r from-[#5092d3] to-[#00619b] px-[15px] py-[15px] shadow-[0px_4px_30px_rgba(38,90,127,0.6)]">
          <span className="relative size-4 text-white">
            <svg aria-hidden="true" className="size-4" viewBox="0 0 16 16">
              <path
                d="M6 3.5 10.5 8 6 12.5l-1-1L8.5 8 5 4.5l1-1Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </span>
      </span>
      <span className="absolute left-[69.5px] top-0 h-px w-[119px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)]" />
      <span className="absolute left-[4.5px] top-[45px] h-px w-[98px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)]" />
    </button>
  );
}
