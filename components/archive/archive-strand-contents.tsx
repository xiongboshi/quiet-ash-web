import Link from "next/link";
import type { EssayMeta } from "@/lib/essays";

type Props = {
  essays: EssayMeta[];
};

/**
 * Archive strand — sequence, not chronology: no dates, no excerpts.
 * `strand_note` + reading time (`readingMinutes` / optional `reading_time` in MDX).
 */
export function ArchiveStrandContents({ essays }: Props) {
  if (essays.length === 0) {
    return (
      <p className="qa-body py-7 text-[color-mix(in_srgb,var(--wood)_82%,var(--ash))]">
        This shelf is still gathering notes.
      </p>
    );
  }

  return (
    <ol className="list-none space-y-0 p-0">
      {essays.map((e, i) => (
        <li key={e.slug}>
          {i > 0 ? (
            <div
              className="my-[var(--rhythm-md)] h-px w-full bg-[color-mix(in_srgb,var(--wood)_10%,transparent)]"
              aria-hidden
            />
          ) : null}
          <Link
            href={`/journal/${e.slug}`}
            className="grid gap-x-[var(--space-block)] gap-y-[var(--rhythm-xs)] py-7 no-underline sm:grid-cols-[minmax(2.5rem,auto)_1fr] lg:py-[var(--rhythm-md)]"
          >
            <span className="qa-meta pt-[0.2em] tabular-nums tracking-[0.18em] text-[var(--wood)] opacity-75">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.12rem,2.6vw,1.28rem)] font-medium leading-snug tracking-[-0.025em] text-[var(--charcoal)] max-lg:text-[1.125rem]">
                {e.title}
              </h2>
              <p className="qa-meta mt-[var(--rhythm-xs)] max-w-[min(100%,48ch)] text-[color-mix(in_srgb,var(--wood)_90%,var(--ash))] opacity-90">
                {e.strandNote ? (
                  <>
                    {e.strandNote}
                    <span className="text-[color-mix(in_srgb,var(--wood)_45%,var(--ash))]">
                      {" "}
                      ·{" "}
                    </span>
                  </>
                ) : null}
                <span className="tabular-nums tracking-[0.06em]">
                  {e.readingMinutes} min
                </span>
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
