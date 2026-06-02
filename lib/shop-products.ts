import type { CatalogProduct } from "@/lib/catalog";
import { getProductBySlug } from "@/lib/catalog";
import { formatPriceDisplay, parsePriceDisplay } from "@/lib/cart/pricing";
import {
  applyComputedFilterCounts,
  filterListingProducts,
  type ShopActiveFilters,
} from "@/lib/shop-listing-filters";
import type { ShopListingProduct } from "@/lib/shop-types";
import type {
  ShopCategoryDefinition,
  ShopCategoryFilters,
} from "@/data/shop-catalog-types";

export {
  activeFiltersFromChecked,
  applyComputedFilterCounts,
  filterListingProducts,
  searchListingProducts,
  shopSortChipLabel,
  sortListingProducts,
  SHOP_SORT_HIGH_TO_LOW,
  SHOP_SORT_LOW_TO_HIGH,
  type ShopActiveFilters,
} from "@/lib/shop-listing-filters";

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
    categoryPlp?.title ?? basePlp?.title ?? product.title ?? "";
  const scentNotes =
    categoryPlp?.scentNotes ??
    basePlp?.scentNotes ??
    canonicalNotes ??
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

/** Resolve PLP card data for a product slug (prefers aisle-specific `plpByCategory`). */
export function getShopListingForProductSlug(
  slug: string,
): ShopListingProduct | null {
  const product = getProductBySlug(slug);
  const categorySlugs = product?.shop?.categorySlugs;
  if (!product || !categorySlugs?.length) return null;

  const withPlpOverride = categorySlugs.filter(
    (id) => product.shop?.plpByCategory?.[id],
  );
  const ordered = [
    ...withPlpOverride,
    ...categorySlugs.filter((id) => !withPlpOverride.includes(id)),
  ];

  for (const categorySlug of ordered) {
    const listing = catalogProductToListing(product, categorySlug);
    if (listing) return listing;
  }

  return null;
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
