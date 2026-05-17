import Link from "next/link";
import type { EssayMeta } from "@/lib/essays";

type Props = {
  prev: EssayMeta | null;
  next: EssayMeta | null;
};

export function EssaySeriesNav({ prev, next }: Props) {
  if (!prev && !next) return null;
  return (
    <nav
      className="mt-[var(--reading-tail)] border-t border-[color-mix(in_srgb,var(--wood)_14%,transparent)] pt-[var(--rhythm-md)]"
      aria-label="Previous and next in the strand"
    >
      <div className="flex flex-col gap-[var(--rhythm-sm)] sm:flex-row sm:justify-between sm:gap-[var(--space-block)]">
        {prev ? (
          <Link
            href={`/essays/${prev.slug}`}
            className="qa-cta qa-label max-w-[min(100%,40ch)] text-[var(--wood)]"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        {next ? (
          <Link
            href={`/essays/${next.slug}`}
            className="qa-cta qa-label max-w-[min(100%,40ch)] text-[var(--wood)] sm:text-right"
          >
            {next.title} →
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
