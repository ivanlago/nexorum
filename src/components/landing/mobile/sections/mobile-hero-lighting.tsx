const imgHeroLighting = "/figma-assets/mobile-hero-lighting.png";

export function MobileHeroLighting() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 z-0 h-[549px] w-[375px] -translate-x-1/2 overflow-hidden">
      <img alt="" className="block h-[549px] w-[375px]" src={imgHeroLighting} />
    </div>
  );
}
