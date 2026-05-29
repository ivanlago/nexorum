type Props = {
  className?: string;
};

// Figma background pattern used across landing sections (texture + subtle blue overlay).
const landingBgTextureSrc = "https://www.figma.com/api/mcp/asset/f1e48560-0add-4c75-b9bd-4596fc90d9a4";

export function LandingSectionBackground({ className }: Props) {
  return (
    <div className={["pointer-events-none absolute inset-0", className].filter(Boolean).join(" ")}>
      <img
        alt=""
        className="absolute inset-0 size-full object-cover opacity-[0.02] mix-blend-plus-lighter"
        src={landingBgTextureSrc}
      />
      <div className="absolute inset-0 bg-[#6cb5ff] opacity-[0.06] mix-blend-color" />
    </div>
  );
}

