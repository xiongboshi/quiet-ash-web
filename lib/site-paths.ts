/** Public URL paths (App Router segments). */

export const SHOP_INDEX = "/shop" as const;
export const BEST_SELLERS_INDEX = "/#best-sellers" as const;
export const MOODS_INDEX = "/moods" as const;
export const JOURNAL_INDEX = "/journal" as const;

/** Catalog index + product detail (nav label: Shop). */
export function shopPath(slug?: string): string {
  return slug ? `${SHOP_INDEX}/${slug}` : SHOP_INDEX;
}

/** Category PLP — prefer `category.pathname` from shop catalog when known. */
export function shopCategoryPath(categorySlug: string): string {
  return `${SHOP_INDEX}/${categorySlug}`;
}

export function moodPath(slug?: string): string {
  return slug ? `${MOODS_INDEX}/${slug}` : MOODS_INDEX;
}

export function journalPath(slug?: string): string {
  return slug ? `${JOURNAL_INDEX}/${slug}` : JOURNAL_INDEX;
}
