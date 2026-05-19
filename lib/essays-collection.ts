import { JOURNAL_INDEX } from "@/lib/site-paths";

/** Default shelf when visiting `/journal` without `?collection=`. */
export const PRIMARY_ARCHIVE_SERIES_SLUG = "incense-culture" as const;

/** Client-safe collection URLs (no `node:fs`). */
export function essaysCollectionHref(seriesSlug: string): string {
  if (seriesSlug === PRIMARY_ARCHIVE_SERIES_SLUG) return JOURNAL_INDEX;
  return `${JOURNAL_INDEX}?collection=${encodeURIComponent(seriesSlug)}`;
}
