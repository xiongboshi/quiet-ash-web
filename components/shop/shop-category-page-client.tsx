"use client";

import { ShopCategoryBody } from "@/components/shop/shop-category-body";
import { ShopCategoryHero } from "@/components/shop/shop-category-hero";
import { ShopCategoryProvider } from "@/components/shop/shop-category-context";
import { ShopCategoryValueBar } from "@/components/shop/shop-category-value-bar";
import { ShopCategoryListingState } from "@/components/shop/shop-category-listing-state";
import type { ResolvedShopCategory } from "@/lib/shop-catalog-resolved";

type Props = {
  category: ResolvedShopCategory;
  initialMood?: string | null;
  initialSearchQuery?: string | null;
};

/** PLP shell — category payload must be resolved on the server and passed in. */
export function ShopCategoryPageClient({
  category,
  initialMood = null,
  initialSearchQuery = null,
}: Props) {
  return (
    <ShopCategoryProvider category={category}>
      <ShopCategoryListingState
        category={category}
        initialMood={initialMood}
        initialSearchQuery={initialSearchQuery}
      >
        <div className="shop-category-page notranslate" translate="no">
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
