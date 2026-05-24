import Image from "next/image";
import Link from "next/link";
import type { Ritual } from "@/lib/rituals";
import { JOURNAL_INDEX } from "@/lib/site-paths";
import { Container } from "@/components/ui/Container";

type Props = {
  rituals: Ritual[];
  eyebrow?: string;
  title?: string;
  /**
   * `cinema` — homepage rituals rail (greige field, 40px vertical padding, 240px images).
   * `daylight` / `neutral` — legacy editorial shelves.
   */
  visualMode?: "neutral" | "daylight" | "cinema";
};

function ritualCover(r: Ritual) {
  return r.coverImage ?? "/images/hero-objects.svg";
}

function RitualCardLink({
  r,
  visualMode,
}: {
  r: Ritual;
  visualMode: "neutral" | "daylight" | "cinema";
}) {
  const cinema = visualMode === "cinema";

  if (cinema) {
    return (
      <Link
        href={`/moods/${r.slug}`}
        className="qa-cta qa-cta--still group block min-w-0 no-underline"
      >
        <div className="relative h-[240px] w-full overflow-hidden bg-[#cac4ba]">
          <Image
            src={ritualCover(r)}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 25vw"
            className="object-cover object-center brightness-[0.98] contrast-[1.02] saturate-[0.9] transition-transform duration-[600ms] ease-out group-hover:scale-[1.01]"
            unoptimized
          />
        </div>
        <h3 className="mb-2 mt-5 max-w-[min(100%,26ch)] font-[family-name:var(--font-serif)] text-[21px] font-normal leading-[1.35] tracking-[-0.015em] text-[#1a1a1a] sm:max-w-[22ch]">
          {r.title}
        </h3>
        <p className="max-w-[min(100%,40ch)] font-[family-name:var(--font-sans)] text-[13px] font-normal leading-[1.5] text-[#555555] whitespace-pre-line sm:max-w-[34ch]">
          {r.excerpt}
        </p>
      </Link>
    );
  }

  const frameClass =
    visualMode === "daylight"
      ? "aspect-[5/4] bg-[#e8e4dc]"
      : "aspect-[5/4] bg-[#141110]";

  return (
    <Link href={`/moods/${r.slug}`} className="qa-cta group block min-w-0 no-underline">
      <div
        className={`qa-media-frame qa-media-frame--archival relative w-full overflow-hidden ${frameClass}`}
      >
        <Image
          src={ritualCover(r)}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 320px"
          className="object-cover object-center opacity-90 transition-[opacity,transform] duration-[600ms] ease-out group-hover:scale-[1.02] group-hover:opacity-[0.85]"
          unoptimized
        />
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${
            visualMode === "daylight"
              ? "from-[#5c5348]/18 to-transparent"
              : "from-[#0c0a09]/48 to-transparent"
          }`}
          aria-hidden
        />
      </div>
      <p className="qa-meta mt-4 text-[var(--qa-muted)]">{r.mood}</p>
      <h3 className="mt-1 font-[family-name:var(--font-serif)] text-[1.08rem] font-medium leading-snug tracking-[-0.02em] text-[var(--qa-text)] transition-opacity duration-[var(--motion-base)] group-hover:opacity-75">
        {r.title}
      </h3>
      <p className="mt-2 line-clamp-2 max-w-[28ch] font-[family-name:var(--font-sans)] text-[11px] leading-relaxed tracking-[0.04em] text-[color-mix(in_srgb,var(--qa-muted)_88%,var(--qa-text))]">
        {r.excerpt}
      </p>
    </Link>
  );
}

export function RitualCarousel({
  rituals,
  eyebrow = "Rituals",
  title = "Small ceremonies for the day",
  visualMode = "neutral",
}: Props) {
  if (!rituals.length) return null;
  const cinema = visualMode === "cinema";

  if (cinema) {
    return (
      <section
        className="qa-ritual-home-rail border-t border-[#c5c0b6] bg-[#d5d0c7] py-[40px] text-[#1a1a1a]"
        aria-label={title}
      >
        <Container variant="wide">
          <header className="mb-16 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0 lg:-mt-1">
              <p className="mb-0 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.12em] text-[#1a1a1a]">
                {eyebrow}
              </p>
            </div>
            <Link
              href={JOURNAL_INDEX}
              className="qa-cta qa-cta--still shrink-0 self-start pb-0.5 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.12em] text-[#1a1a1a] underline decoration-[color-mix(in_srgb,#1a1a1a_22%,transparent)] underline-offset-[6px] transition-opacity duration-[600ms] ease-out hover:opacity-70 lg:self-end"
            >
              View all rituals
            </Link>
          </header>

          {/* Mobile: vertical editorial stack — not the desktop 4-up grid compressed */}
          <div className="qa-ritual-home-rail-m-list flex flex-col gap-16 lg:hidden">
            {rituals.map((r) => (
              <article key={r.slug} className="m-0 border-0 p-0">
                <Link
                  href={`/moods/${r.slug}`}
                  className="qa-cta qa-cta--still block min-w-0 no-underline transition-none"
                >
                  <figure className="relative mb-0 aspect-[16/10] w-full overflow-hidden bg-[#cac4ba]">
                    <Image
                      src={ritualCover(r)}
                      alt=""
                      fill
                      sizes="100vw"
                      className="object-cover object-center brightness-[0.98] contrast-[1.02] saturate-[0.9]"
                      unoptimized
                    />
                  </figure>
                  <div className="mt-5 max-w-[min(40ch,100%)]">
                    <h3 className="font-[family-name:var(--font-serif)] text-[26px] font-normal leading-[1.35] tracking-[-0.015em] text-[#1a1a1a]">
                      {r.title}
                    </h3>
                    <p className="mt-2.5 font-[family-name:var(--font-sans)] text-[13px] font-normal leading-[1.5] tracking-[0.01em] text-[#555555] whitespace-pre-line">
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-4">
            {rituals.map((r) => (
              <RitualCardLink key={r.slug} r={r} visualMode="cinema" />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  const surface =
    visualMode === "daylight"
      ? "border-t border-[#DDD7CF] bg-[color-mix(in_srgb,var(--qa-bg-soft)_55%,var(--qa-bg))]"
      : "border-t border-[#DDD7CF] bg-[var(--qa-bg)]";

  const useGrid = rituals.length <= 4;
  const gridCols =
    rituals.length === 1
      ? "grid-cols-1"
      : rituals.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : rituals.length === 3
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className={`qa-section--editorial ${surface}`.trim()} aria-label={title}>
      <Container variant="wide">
        <header className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-x-8 sm:gap-y-1">
          <div className="min-w-0">
            <p className="qa-eyebrow-brand text-[var(--qa-muted)]">{eyebrow}</p>
            <h2 className="mt-3 max-w-[22ch] font-[family-name:var(--font-serif)] text-[clamp(1.65rem,3.8vw,2.15rem)] font-light leading-[1.08] tracking-[-0.03em] sm:mt-4 text-[var(--qa-text)]">
              {title}
            </h2>
          </div>
          <Link
            href={JOURNAL_INDEX}
            className="qa-meta shrink-0 justify-self-start text-[var(--qa-muted)] underline decoration-[color-mix(in_srgb,var(--qa-muted)_28%,transparent)] underline-offset-[6px] transition-opacity duration-[600ms] ease-out hover:opacity-70 sm:justify-self-end sm:pb-0.5 sm:text-right"
          >
            View all rituals
          </Link>
        </header>

        {useGrid ? (
          <div className={`mt-8 grid gap-8 sm:mt-10 sm:gap-x-7 sm:gap-y-10 lg:mt-11 lg:gap-x-8 ${gridCols}`}>
            {rituals.map((r) => (
              <RitualCardLink key={r.slug} r={r} visualMode={visualMode} />
            ))}
          </div>
        ) : (
          <div className="qa-archive-rail mt-8 flex gap-6 overflow-x-auto pb-3 pt-1 sm:mt-10 sm:gap-7 lg:mt-11 lg:gap-8">
            {rituals.map((r) => (
              <div
                key={r.slug}
                className="w-[min(86vw,20rem)] shrink-0 snap-start sm:w-[min(48vw,18rem)] lg:w-[min(34vw,20rem)]"
              >
                <RitualCardLink r={r} visualMode={visualMode} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
