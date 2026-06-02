type Props = {
  tag: string;
  title: string;
  description: string;
  videoWebmSrc: string;
  videoMp4Src: string;
  videoUnsupportedText: string;
  className?: string;
};

export function OperationsCard({
  tag,
  title,
  description,
  videoWebmSrc,
  videoMp4Src,
  videoUnsupportedText,
  className,
}: Props) {
  return (
    <article className={["mx-auto w-full max-w-[280px]", className].filter(Boolean).join(" ")}>
      <div className="min-h-[420px] overflow-hidden border border-[rgba(26,42,56,0.9)] bg-[linear-gradient(180deg,rgba(8,15,22,0.55),#080f16)]">
        <div className="min-h-[58px] border-b border-[rgba(118,131,143,0.25)] px-5 py-5 [font-family:var(--font-orbitron)] text-[12px] font-bold text-[color:var(--primitive-colors-primary-400)]">
          {tag}
        </div>

        <div className="relative grid h-[240px] place-items-center overflow-hidden bg-[rgba(5,9,13,0.45)] [isolation:isolate] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(118,131,143,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(118,131,143,0.08)_1px,transparent_1px)] before:bg-[size:24px_24px] before:opacity-[0.42] before:content-['']">
          <video
            className="relative z-[1] h-[306px] w-[172px] object-cover mix-blend-lighten [filter:contrast(1.06)_saturate(1.08)]"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src={videoWebmSrc} type="video/webm" />
            <source src={videoMp4Src} type="video/mp4" />
            {videoUnsupportedText}
          </video>
        </div>

        <div className="border-t border-[rgba(118,131,143,0.25)] px-5 py-5">
          <strong className="mb-[10px] block [font-family:var(--font-orbitron)] text-[14px] font-semibold leading-[1.4] text-[color:var(--primitive-colors-gray-200)]">
            {title}
          </strong>
          <span className="block text-[12px] font-light leading-[1.55] text-[color:var(--primitive-colors-gray-300)]">
            {description}
          </span>
        </div>
      </div>
    </article>
  );
}
