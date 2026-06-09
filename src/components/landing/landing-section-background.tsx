type Props = {
  className?: string;
};

export function LandingSectionBackground({ className }: Props) {
  return (
    <div className={["pointer-events-none absolute inset-0", className].filter(Boolean).join(" ")}>
      <div className="absolute inset-0 opacity-[0.03] mix-blend-plus-lighter [background-image:radial-gradient(rgba(167,184,198,0.4)_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(108,181,255,0.02),rgba(108,181,255,0)_22%,rgba(108,181,255,0.015)_78%,rgba(108,181,255,0.03))]" />
      <div className="absolute inset-0 bg-[#6cb5ff] opacity-[0.06] mix-blend-color" />
    </div>
  );
}
