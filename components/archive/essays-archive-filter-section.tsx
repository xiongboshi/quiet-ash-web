import Link from "next/link";
import { EssaysArchiveFilterMore } from "@/components/archive/essays-archive-filter-more";
import { Container } from "@/components/layout/container";
import {
  essaysCollectionHref,
  mobileSeriesSplit,
  seriesTitleLabel,
} from "@/lib/essays-collection-nav";
import type { SeriesMeta } from "@/lib/series";

type Props = {
  seriesList: SeriesMeta[];
  activeSlug: string;
};

/** Mobile / tablet — matches `/rituals` compact filter row. */
const filterLinkClassMobile = (active: boolean) =>
  `shrink-0 border-b bg-transparent p-0 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.18em] no-underline transition-opacity duration-[600ms] ease-out sm:text-[12px] sm:tracking-[0.2em] ${
    active
      ? "border-[var(--qa-text)] pb-[3px] text-[var(--qa-text)]"
      : "border-transparent pb-[3px] text-[var(--qa-text)] hover:opacity-70"
  }`;

export function EssaysArchiveFilterSection({ seriesList, activeSlug }: Props) {
  const { inline, overflow } = mobileSeriesSplit(activeSlug, seriesList);

  return (
    <section
      aria-label="Essay archive filters"
      className="overflow-visible border-t border-[#DDD7CF] bg-[var(--qa-bg-soft)] lg:hidden"
    >
      <Container variant="wide" className="overflow-visible">
        <div className="flex flex-nowrap items-center justify-between gap-3 overflow-visible py-3">
          <nav
            className="flex min-w-0 flex-1 flex-nowrap items-center gap-x-4 overflow-visible"
            aria-label="Collections"
          >
            {inline.map((slug) => {
              const active = slug === activeSlug;
              return (
                <Link
                  key={slug}
                  href={essaysCollectionHref(slug)}
                  scroll={false}
                  aria-current={active ? "page" : undefined}
                  className={filterLinkClassMobile(active)}
                >
                  {seriesTitleLabel(slug, seriesList)}
                </Link>
              );
            })}
            <EssaysArchiveFilterMore
              seriesList={seriesList}
              activeSlug={activeSlug}
              overflowSlugs={overflow}
            />
          </nav>
        </div>
      </Container>
    </section>
  );
}
