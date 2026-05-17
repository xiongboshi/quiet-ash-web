/** Minimal fields used by object archive filters (client-safe; no `lib/catalog` import). */
export type ObjectArchiveProduct = {
  slug: string;
  category: string;
  featured?: boolean;
};

/** `/objects` index — filter rail labels (design); map to catalog in `objectMatchesArchiveFilter`. */
export const OBJECT_ARCHIVE_FILTER_IDS = [
  "ALL",
  "TEA",
  "INCENSE",
  "WOOD",
  "TEXTILE",
  "WRITING",
  "LIGHT",
  "TOOLS",
  "OBJECTS",
] as const;

export type ObjectArchiveFilterId = (typeof OBJECT_ARCHIVE_FILTER_IDS)[number];

/** Default `/objects` grid order (design reference), before title sorts. */
export const OBJECTS_CATALOG_DEFAULT_SLUG_ORDER = [
  "ceramic-tea-cup",
  "small-agarwood-box",
  "wood-tray",
  "brass-incense-stand",
  "linen-cloth",
  "paper-incense-sleeve",
] as const;

export function sortObjectArchiveProducts<T extends { slug: string; title: string }>(
  rows: T[],
  sort: "default" | "title-asc" | "title-desc",
): T[] {
  const next = [...rows];
  if (sort === "title-asc") {
    next.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "title-desc") {
    next.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    const order = OBJECTS_CATALOG_DEFAULT_SLUG_ORDER as readonly string[];
    const idx = (slug: string) => {
      const i = order.indexOf(slug);
      return i === -1 ? 999 : i;
    };
    next.sort(
      (a, b) => idx(a.slug) - idx(b.slug) || a.title.localeCompare(b.title),
    );
  }
  return next;
}

/**
 * Which products appear under each rail chip (folder + slug rules for current catalog).
 */
export function objectMatchesArchiveFilter(
  p: ObjectArchiveProduct,
  filter: ObjectArchiveFilterId,
): boolean {
  switch (filter) {
    case "ALL":
      return true;
    case "TEA":
      return p.category === "tea-ware";
    case "INCENSE":
      return p.category === "agarwood" || p.slug === "brass-incense-stand";
    case "WOOD":
      return p.slug === "wood-tray";
    case "TEXTILE":
      return p.slug === "linen-cloth";
    case "WRITING":
      return p.slug === "paper-incense-sleeve";
    case "LIGHT":
      return false;
    case "TOOLS":
      return false;
    case "OBJECTS":
      return p.featured === true;
  }
}
