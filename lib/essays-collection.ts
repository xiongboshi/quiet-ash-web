/** Default shelf when visiting `/essays` without `?collection=`. */
export const PRIMARY_ARCHIVE_SERIES_SLUG = "incense-culture" as const;

/** Client-safe collection URLs (no `node:fs`). */
export function essaysCollectionHref(seriesSlug: string): string {
  if (seriesSlug === PRIMARY_ARCHIVE_SERIES_SLUG) return "/essays";
  return `/essays?collection=${encodeURIComponent(seriesSlug)}`;
}
