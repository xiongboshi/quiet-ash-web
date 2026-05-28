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

type PageProps = {
  searchParams: Promise<{ mood?: string }>;
};

export default async function ShopPage({ searchParams }: PageProps) {
  const { mood } = await searchParams;
  return (
    <ShopCategoryPage
      categorySlug={DEFAULT_SHOP_CATEGORY_SLUG}
      initialMood={mood ?? null}
    />
  );
}
