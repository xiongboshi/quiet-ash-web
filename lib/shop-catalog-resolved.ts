import type { ShopCategoryDefinition } from "@/data/shop-catalog-types";
import type { ShopCatalogSlug } from "@/data/shop-catalog";
import { getShopCategory } from "@/lib/shop-catalog";
import { getAllProducts } from "@/lib/catalog";
import {
  resolveCategoryListing,
  type ShopActiveFilters,
} from "@/lib/shop-products";
import type { ShopListingProduct } from "@/lib/shop-types";
import type { ShopCategoryFilters } from "@/data/shop-catalog-types";

/** Shop PLP payload after resolving products + filter counts from catalog JSON. */
export type ResolvedShopCategory = ShopCategoryDefinition & {
  products: ShopListingProduct[];
  allProducts: ShopListingProduct[];
  filters: ShopCategoryFilters;
  listing: ShopCategoryDefinition["listing"] & { productCount: number };
};

export function resolveShopCategory(
  slug: ShopCatalogSlug,
  active: ShopActiveFilters = {},
): ResolvedShopCategory {
  const definition = getShopCategory(slug);
  const resolved = resolveCategoryListing(
    definition,
    getAllProducts(),
    active,
  );

  return {
    ...definition,
    products: resolved.products,
    allProducts: resolved.allProducts,
    filters: resolved.filters,
    listing: {
      ...definition.listing,
      productCount: resolved.productCount,
    },
  };
}
