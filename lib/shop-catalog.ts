import {
  DEFAULT_SHOP_CATEGORY_SLUG,
  shopCatalog,
  type ShopCatalogSlug,
} from "@/data/shop-catalog";
import type { ShopCategoryDefinition, ShopFilterGroup } from "@/data/shop-catalog-types";

export { DEFAULT_SHOP_CATEGORY_SLUG };

export function listShopCategories(): ShopCategoryDefinition[] {
  return Object.values(shopCatalog);
}

/** PLP / sitemap / category routes — excludes `hiddenFromShop` aisles. */
export function listShopCategoriesForShop(): ShopCategoryDefinition[] {
  return listShopCategories().filter((category) => category.hiddenFromShop !== true);
}

export function getShopCategory(slug: ShopCatalogSlug = DEFAULT_SHOP_CATEGORY_SLUG): ShopCategoryDefinition {
  return shopCatalog[slug];
}

/** URL segment `/shop/[segment]` — category if segment matches a catalog slug. */
export function getShopCategoryBySegment(segment: string): ShopCategoryDefinition | null {
  if (!isShopCategorySegment(segment)) return null;
  return shopCatalog[segment as ShopCatalogSlug];
}

export function isShopCategorySegment(segment: string): boolean {
  if (!(segment in shopCatalog)) return false;
  const category = shopCatalog[segment as ShopCatalogSlug] as ShopCategoryDefinition;
  return category.hiddenFromShop !== true;
}

/** Category pages at `/shop/[slug]` — excludes the default aisle served at `/shop`. */
export function shopCategorySegmentsForStaticParams(): string[] {
  return listShopCategoriesForShop()
    .filter((category) => category.pathname !== "/shop")
    .map((category) => category.slug);
}

export function shopFilterTabLabel(group: ShopFilterGroup): string {
  if (group.tabLabel?.trim()) return group.tabLabel.trim();
  const first = group.label.split(/[\s/]+/).filter(Boolean)[0];
  if (!first) return group.label;
  return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
}
