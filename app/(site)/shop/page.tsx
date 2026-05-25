import type { Metadata } from "next";
import { ShopCategoryPage } from "@/components/shop/shop-category-page";
import { getShopCategory, DEFAULT_SHOP_CATEGORY_SLUG } from "@/lib/shop-catalog";
import { SHOP_INDEX } from "@/lib/site-paths";

const category = getShopCategory(DEFAULT_SHOP_CATEGORY_SLUG);

export const metadata: Metadata = {
  title: category.hero.title,
  description: category.hero.descriptionLines.join(" "),
  alternates: { canonical: SHOP_INDEX },
};

export default function ShopPage() {
  return <ShopCategoryPage categorySlug={DEFAULT_SHOP_CATEGORY_SLUG} />;
}
