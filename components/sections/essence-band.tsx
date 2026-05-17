import Image from "next/image";
import { Fragment } from "react";

export type EssenceBandProps = {
  eyebrow: string;
  titleLines: readonly string[];
  body: string;
  imageSrc: string;
  /** When false, the figure caps at 1280px on large screens instead of bleeding to the viewport edge. */
  imageBleedToViewport?: boolean;
};

/**
 * Shared paper + two-column rail (text / right-bleed figure) — rituals & objects index.
 */
export function EssenceBand({
  eyebrow,
  titleLines,
  body,
  imageSrc,
  imageBleedToViewport = true,
}: EssenceBandProps) {
  const figureLgLayout = imageBleedToViewport
    ? "lg:w-[calc(100%+max(0px,((100vw-var(--qa-container-width))/2)))] lg:max-w-none"
    : "lg:w-full lg:max-w-[1280px]";

  const imageSizes = imageBleedToViewport
    ? "(max-width: 1024px) 100vw, 55vw"
    : "(max-width: 1024px) 100vw, min(1280px, 55vw)";

  return (
    <section className="overflow-x-clip border-t border-[#DDD7CF] bg-paper py-0">
      <div className="mx-auto grid max-w-[var(--qa-container-width)] grid-cols-1 items-stretch gap-0 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:min-h-[min(560px,58svh)]">
        <div className="max-w-[min(100%,420px)] px-4 py-6 sm:px-6 sm:py-8 md:max-w-[min(100%,36rem)] lg:max-w-[380px] lg:px-12 lg:py-10">
          <p className="mb-5 font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.22em] text-[#6F6A63]">
            {eyebrow}
          </p>
          <h2 className="qa-spec-section-title mb-8 max-w-none tracking-[-0.038em] text-[var(--qa-text)] max-md:whitespace-nowrap md:leading-[1.08] lg:max-w-[min(22ch,100%)] lg:whitespace-normal">
            <span className="lg:hidden">{titleLines.join(" ")}</span>
            <span className="hidden lg:inline">
              {titleLines.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 ? <br /> : null}
                  <span>{line}</span>
                </Fragment>
              ))}
            </span>
          </h2>
          <div
            className="mb-10 h-px w-12 bg-[var(--qa-text)]"
            aria-hidden
          />
          <p className="m-0 max-w-[min(46ch,100%)] font-[family-name:var(--font-sans)] text-[17px] font-normal leading-[32px] text-[color-mix(in_srgb,#1A1A1A_92%,#6F6A63)]">
            {body}
          </p>
        </div>

        <figure
          className={`relative aspect-[4/3] min-h-[min(220px,62vw)] w-full overflow-hidden bg-[#161210] sm:aspect-[16/10] sm:min-h-[min(300px,52vw)] lg:aspect-auto lg:min-h-0 lg:h-full ${figureLgLayout}`}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes={imageSizes}
            unoptimized
            className="object-cover object-center brightness-[0.94] contrast-[1.02] saturate-[0.92]"
          />
        </figure>
      </div>
    </section>
  );
}
