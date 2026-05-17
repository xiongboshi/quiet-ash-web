import Link from "next/link";
import { essaysCollectionHref } from "@/lib/archive";
import type { SeriesMeta } from "@/lib/series";

type Props = {
  seriesList: SeriesMeta[];
  activeSlug: string;
};

/** Mobile — horizontal shelf labels, quiet scroll (archive tabs, not chips). */
export function CollectionsRail({ seriesList, activeSlug }: Props) {
  return (
    <nav
      aria-label="Collections"
      className="qa-archive-rail -mx-6 overflow-x-auto px-6 pb-1"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div className="flex w-max min-w-full gap-6 whitespace-nowrap">
        {seriesList.map((s) => {
          const href = essaysCollectionHref(s.slug);
          const active = s.slug === activeSlug;
          return (
            <Link
              key={s.slug}
              href={href}
              scroll={false}
              aria-current={active ? "page" : undefined}
              className={`shrink-0 border-b bg-transparent p-0 pb-1 font-[family-name:var(--font-serif)] text-[14px] font-normal leading-[2] tracking-[0.02em] no-underline transition-none ${
                active
                  ? "border-[color-mix(in_srgb,#1A1A1A_35%,transparent)] text-[#1A1A1A]"
                  : "border-transparent text-[color-mix(in_srgb,#6F6A63_95%,#1A1A1A)]"
              }`}
            >
              {active ? (
                <span className="mr-1 text-[#6F6A63]" aria-hidden>
                  →
                </span>
              ) : null}
              {s.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
