import { parsePriceDisplay } from "@/lib/cart/pricing";
import type { ShopListingProduct } from "@/lib/shop-types";
import type {
  ShopCategoryFilters,
  ShopFilterGroup,
} from "@/data/shop-catalog-types";

/** Active filter selections: groupId → selected option ids. */
export type ShopActiveFilters = Record<string, readonly string[]>;

export function activeFiltersFromChecked(
  checked: Record<string, boolean>,
  groups: readonly ShopFilterGroup[],
): ShopActiveFilters {
  const out: Record<string, string[]> = {};
  for (const group of groups) {
    const selected = group.options
      .filter((opt) => checked[opt.id])
      .map((opt) => opt.id);
    if (selected.length) out[group.id] = selected;
  }
  return out;
}

function productMatchesGroup(
  product: ShopListingProduct,
  groupId: string,
  selectedOptionIds: readonly string[],
): boolean {
  const tags = product.filterTags[groupId];
  if (!tags?.length) return false;
  return selectedOptionIds.some((id) => tags.includes(id));
}

/** Fuzzy match on title, notes, and slug — all terms must appear somewhere. */
export function searchListingProducts(
  products: readonly ShopListingProduct[],
  query: string,
): ShopListingProduct[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [...products];

  const terms = normalized.split(/\s+/).filter(Boolean);
  return products.filter((product) => {
    const haystack =
      `${product.title} ${product.scentNotes} ${product.slug}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

export function filterListingProducts(
  products: readonly ShopListingProduct[],
  active: ShopActiveFilters,
): ShopListingProduct[] {
  const entries = Object.entries(active).filter(([, ids]) => ids.length > 0);
  if (!entries.length) return [...products];

  return products.filter((product) =>
    entries.every(([groupId, optionIds]) =>
      productMatchesGroup(product, groupId, optionIds),
    ),
  );
}

function countForOption(
  products: readonly ShopListingProduct[],
  groupId: string,
  optionId: string,
  active: ShopActiveFilters,
): number {
  const otherActive = Object.fromEntries(
    Object.entries(active).filter(([id]) => id !== groupId),
  ) as ShopActiveFilters;

  const pool = filterListingProducts(products, otherActive);
  return pool.filter((p) => productMatchesGroup(p, groupId, [optionId])).length;
}

export function applyComputedFilterCounts(
  filters: ShopCategoryFilters,
  products: readonly ShopListingProduct[],
  active: ShopActiveFilters = {},
): ShopCategoryFilters {
  return {
    ...filters,
    groups: filters.groups.map((group) => ({
      ...group,
      options: group.options.map((option) => ({
        ...option,
        count: countForOption(products, group.id, option.id, active),
      })),
    })),
  };
}

export const SHOP_SORT_LOW_TO_HIGH = "Price, low to high" as const;
export const SHOP_SORT_HIGH_TO_LOW = "Price, high to low" as const;

export function shopSortChipLabel(sortOption: string): string {
  if (sortOption === SHOP_SORT_HIGH_TO_LOW) return "High to low";
  if (sortOption === SHOP_SORT_LOW_TO_HIGH) return "Low to high";
  return sortOption;
}

export function sortListingProducts(
  products: readonly ShopListingProduct[],
  sortOption: string,
): ShopListingProduct[] {
  const items = [...products];
  const byLow =
    sortOption === SHOP_SORT_LOW_TO_HIGH || sortOption === SHOP_SORT_HIGH_TO_LOW
      ? sortOption === SHOP_SORT_LOW_TO_HIGH
      : true;

  return items.sort((a, b) => {
    const diff =
      parsePriceDisplay(a.priceDisplay) - parsePriceDisplay(b.priceDisplay);
    return byLow ? diff : -diff;
  });
}
