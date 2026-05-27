import type { CatalogProduct } from "@/lib/catalog";
import { formatPriceDisplay, parsePriceDisplay } from "@/lib/cart/pricing";
import type {
  ShopFilterTags,
  ShopListingProduct,
  ShopPlpOverride,
  ShopProductConfig,
} from "@/lib/shop-types";
import type {
  ShopCategoryDefinition,
  ShopCategoryFilters,
  ShopFilterGroup,
} from "@/data/shop-catalog-types";

export function catalogProductToListing(
  product: CatalogProduct,
  shopCategorySlug: string,
): ShopListingProduct | null {
  const shop = product.shop;
  if (!shop?.categorySlugs.includes(shopCategorySlug)) return null;

  const categoryPlp = shop.plpByCategory?.[shopCategorySlug];
  const basePlp = shop.plp;

  const materialLine = [product.material, product.origin]
    .filter(Boolean)
    .join(" · ");
  const canonicalNotes = materialLine || product.line;

  const title =
    categoryPlp?.title ?? product.title ?? basePlp?.title ?? "";
  const scentNotes =
    categoryPlp?.scentNotes ??
    canonicalNotes ??
    basePlp?.scentNotes ??
    "";
  const rawPrice =
    categoryPlp?.priceDisplay ??
    product.priceDisplay ??
    basePlp?.priceDisplay ??
    "";
  const priceCents = parsePriceDisplay(rawPrice) || 0;
  const priceDisplay = formatPriceDisplay(rawPrice);
  const reviewCount =
    categoryPlp?.reviewCount ??
    product.shopPdp?.rating?.count ??
    basePlp?.reviewCount ??
    120;
  const imageSrc =
    categoryPlp?.imageSrc ?? product.image ?? basePlp?.imageSrc ?? "";
  const imageAlt =
    categoryPlp?.imageAlt ?? product.title ?? basePlp?.imageAlt ?? "";
  const imageObjectPosition =
    categoryPlp?.imageObjectPosition ?? basePlp?.imageObjectPosition;

  return {
    slug: product.slug,
    title,
    scentNotes,
    priceDisplay,
    priceCents,
    reviewCount,
    imageSrc,
    imageAlt,
    ...(imageObjectPosition ? { imageObjectPosition } : {}),
    filterTags: shop.filterTags ?? {},
  };
}

export function getListingProductsForShopCategory(
  products: CatalogProduct[],
  shopCategorySlug: string,
): ShopListingProduct[] {
  return products
    .map((p) => catalogProductToListing(p, shopCategorySlug))
    .filter((row): row is ShopListingProduct => row !== null);
}

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
    const haystack = `${product.title} ${product.scentNotes} ${product.slug}`.toLowerCase();
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

/** Count products matching facet (other groups' active filters + this option). */
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

export function resolveCategoryListing(
  definition: ShopCategoryDefinition,
  catalogProducts: CatalogProduct[],
  active: ShopActiveFilters = {},
): {
  products: ShopListingProduct[];
  allProducts: ShopListingProduct[];
  filters: ShopCategoryFilters;
  productCount: number;
} {
  const allProducts = getListingProductsForShopCategory(
    catalogProducts,
    definition.slug,
  );
  const filtered = filterListingProducts(allProducts, active);
  const filters = applyComputedFilterCounts(
    definition.filters,
    allProducts,
    active,
  );

  return {
    products: filtered,
    allProducts,
    filters,
    productCount: filtered.length,
  };
}
