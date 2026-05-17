import { essaysCollectionHref } from "@/lib/essays-collection";
import type { SeriesMeta } from "@/lib/series";

/** Mobile inline tabs — first N in catalog order; active swaps last slot if in More. */
export const MOBILE_INLINE_COLLECTION_MAX = 2;

export function seriesTitleLabel(slug: string, seriesList: SeriesMeta[]): string {
  const title = seriesList.find((s) => s.slug === slug)?.title ?? slug;
  return title.toUpperCase();
}

/** Stable catalog order on mobile; swap last inline slot only when active is in More. */
export function mobileSeriesSplit(activeSlug: string, seriesList: SeriesMeta[]) {
  const slugs = seriesList.map((s) => s.slug);
  const max = MOBILE_INLINE_COLLECTION_MAX;
  let inline = slugs.slice(0, max);

  if (!inline.includes(activeSlug)) {
    inline = [...inline.slice(0, max - 1), activeSlug];
  }

  const overflow = slugs.filter((slug) => !inline.includes(slug));
  return { inline, overflow };
}

export { essaysCollectionHref };
