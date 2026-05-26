import { ShopCategoryBody } from "@/components/shop/shop-category-body";
import { ShopCategoryHero } from "@/components/shop/shop-category-hero";
import { ShopCategoryProvider } from "@/components/shop/shop-category-context";
import { ShopCategoryValueBar } from "@/components/shop/shop-category-value-bar";
import {
  DEFAULT_SHOP_CATEGORY_SLUG,
} from "@/lib/shop-catalog";
import { resolveShopCategory } from "@/lib/shop-catalog-resolved";
import type { ShopCatalogSlug } from "@/data/shop-catalog";
import { ShopCategoryListingState } from "@/components/shop/shop-category-listing-state";

type Props = {
  categorySlug?: ShopCatalogSlug;
};

export function ShopCategoryPage({
  categorySlug = DEFAULT_SHOP_CATEGORY_SLUG,
}: Props) {
  const category = resolveShopCategory(categorySlug);

  return (
    <ShopCategoryProvider category={category}>
      <ShopCategoryListingState category={category}>
        <div className="shop-category-page">
          <ShopCategoryHero />
          <div className="shop-category-page__body">
            <ShopCategoryBody />
          </div>
          <ShopCategoryValueBar />
        </div>
      </ShopCategoryListingState>
    </ShopCategoryProvider>
  );
}
