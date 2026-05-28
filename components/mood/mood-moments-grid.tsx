import { QaImage as Image } from "@/components/ui/qa-image";
import { homeMoments, homeMomentsKicker } from "@/data/moments-home";
import { brandHome } from "@/data/brand-home";

export function MoodMomentsGrid() {
  const { moments } = brandHome;

  return (
    <section className="qa-mood-moments bg-white px-[var(--mood-px)] py-[28px]">
      <div className="mx-auto max-w-[min(100%,1680px)]">
        <h2 className="qa-mood-section-heading">
          {moments.heading}
        </h2>

        <div className="mt-12 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-14 sm:gap-5 md:grid md:grid-cols-5 md:gap-5 md:overflow-visible lg:gap-6 [&::-webkit-scrollbar]:hidden">
          {homeMoments.map((item) => (
            <figure
              key={item.label}
              className="qa-mood-moment-card group relative min-w-[68%] shrink-0 sm:min-w-[42%] md:min-w-0"
            >
              <div className="qa-mood-moment-visual relative aspect-[16/17] overflow-hidden rounded-[4px]">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="qa-mood-moment-photo object-cover saturate-[0.92]"
                  sizes="(max-width: 768px) 68vw, 20vw"
                  unoptimized
                />
                <div
                  className="qa-mood-moment-scrim pointer-events-none absolute inset-0"
                  aria-hidden
                />
                <figcaption className="qa-mood-moment-caption pointer-events-none absolute inset-0 z-[2] flex flex-col items-center justify-center px-4 text-center text-white sm:px-5">
                  <span className="block text-[10px] font-normal uppercase tracking-[0.14em] text-white/85">
                    {homeMomentsKicker}
                  </span>
                  <span className="mt-1.5 block font-[family-name:var(--font-serif)] text-[clamp(1.05rem,2.2vw,1.35rem)] font-light leading-[1.15] tracking-[-0.01em]">
                    {item.label}
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
