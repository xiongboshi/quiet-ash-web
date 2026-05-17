import type { SeriesMeta } from "@/lib/series";

type Props = {
  series: SeriesMeta;
  essayCount: number;
  /** Sticky on desktop — pass from parent */
  className?: string;
};

/** Right rail / mobile metadata — low contrast, threads always vertical. */
export function ArchiveMarginalia({
  series,
  essayCount,
  className = "",
}: Props) {
  return (
    <aside
      className={`font-[family-name:var(--font-sans)] max-lg:text-[13px] max-lg:leading-[1.9] max-lg:opacity-[0.62] lg:text-[12px] lg:leading-[1.9] lg:opacity-60 ${className}`.trim()}
    >
      <div className="space-y-6 max-lg:space-y-7">
        <p className="m-0 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--wood)]">
          Collection
        </p>
        <p className="m-0 max-w-[24ch] font-[family-name:var(--font-serif)] font-normal normal-case tracking-[-0.01em] text-[color-mix(in_srgb,var(--charcoal)_88%,var(--wood))]">
          {essayCount} {essayCount === 1 ? "essay" : "essays"}
          {series.archiveYear ? (
            <>
              <span className="text-[color-mix(in_srgb,var(--wood)_50%,transparent)]">
                {" "}
                ·{" "}
              </span>
              {series.archiveYear}
            </>
          ) : null}
        </p>
        {series.shelfAnnotation ? (
          <p className="m-0 max-w-[24ch] font-[family-name:var(--font-serif)] font-normal normal-case tracking-[-0.01em] text-[color-mix(in_srgb,var(--charcoal)_82%,var(--wood))]">
            {series.shelfAnnotation}
          </p>
        ) : null}
        {series.note ? (
          <p className="m-0 max-w-[26ch] font-[family-name:var(--font-serif)] font-normal italic normal-case tracking-[-0.01em] text-[color-mix(in_srgb,var(--charcoal)_78%,var(--wood))]">
            {series.note}
          </p>
        ) : null}
        {series.readingMood ? (
          <p className="m-0 max-w-[26ch] font-[family-name:var(--font-serif)] font-normal italic normal-case tracking-[-0.01em] text-[color-mix(in_srgb,var(--charcoal)_78%,var(--wood))]">
            {series.readingMood}
          </p>
        ) : null}
        {series.marginHint ? (
          <p className="m-0 max-w-[26ch] font-[family-name:var(--font-serif)] font-normal normal-case tracking-[-0.01em] text-[color-mix(in_srgb,var(--charcoal)_76%,var(--wood))]">
            {series.marginHint}
          </p>
        ) : null}
        {series.threads && series.threads.length > 0 ? (
          <div className="space-y-2 normal-case">
            <p className="m-0 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--wood)]">
              Threads
            </p>
            <ul className="m-0 list-none space-y-1.5 p-0 font-[family-name:var(--font-serif)] font-normal normal-case tracking-[0.03em] text-[color-mix(in_srgb,var(--charcoal)_80%,var(--wood))]">
              {series.threads.map((t) => (
                <li key={t} className="leading-[1.9]">
                  {t.toLowerCase()}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
