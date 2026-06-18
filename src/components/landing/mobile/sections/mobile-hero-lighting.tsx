const imgHeroLighting = "/figma-assets/mobile-hero-lighting.png";

export function MobileHeroLighting() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 z-0 h-[549px] w-screen -translate-x-1/2 overflow-hidden">
      <img alt="" className="block h-full w-full object-cover" src={imgHeroLighting} />
    </div>
  );
}
