/** Public URL paths (App Router segments). */

export const SHOP_INDEX = "/shop" as const;
export const MOODS_INDEX = "/moods" as const;
export const JOURNAL_INDEX = "/journal" as const;

/** Catalog index + product detail (nav label: Shop). */
export function shopPath(slug?: string): string {
  return slug ? `${SHOP_INDEX}/${slug}` : SHOP_INDEX;
}

export function moodPath(slug?: string): string {
  return slug ? `${MOODS_INDEX}/${slug}` : MOODS_INDEX;
}

export function journalPath(slug?: string): string {
  return slug ? `${JOURNAL_INDEX}/${slug}` : JOURNAL_INDEX;
}
