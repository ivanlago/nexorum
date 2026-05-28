export function MobileSection01Image() {
  return (
    <section className="relative mt-6">
      <div className="relative h-[369px] w-full overflow-hidden">
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-75 mix-blend-lighten"
          src="/hero-image.png"
        />
        <div className="absolute inset-0 bg-[rgba(108,181,255,0.15)] mix-blend-color" />
        <div className="absolute bottom-0 left-0 h-[98px] w-full bg-gradient-to-b from-[rgba(5,9,13,0)] to-[#05090d]" />
      </div>
    </section>
  );
}
