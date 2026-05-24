import { ShopCategoryBody } from "@/components/shop/shop-category-body";
import { ShopCategoryHero } from "@/components/shop/shop-category-hero";
import { ShopCategoryValueBar } from "@/components/shop/shop-category-value-bar";

export function ShopCategoryPage() {
  return (
    <div className="shop-category-page">
      <ShopCategoryHero />
      <div className="shop-category-page__body">
        <ShopCategoryBody />
      </div>
      <ShopCategoryValueBar />
    </div>
  );
}
