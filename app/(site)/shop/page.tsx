import type { Metadata } from "next";
import { ShopCategoryPage } from "@/components/shop/shop-category-page";
import { getShopCategory, DEFAULT_SHOP_CATEGORY_SLUG } from "@/lib/shop-catalog";
import { resolveShopCategory } from "@/lib/shop-catalog-resolved";
import { SHOP_INDEX } from "@/lib/site-paths";

const categoryMeta = getShopCategory(DEFAULT_SHOP_CATEGORY_SLUG);
const categoryListing = resolveShopCategory(DEFAULT_SHOP_CATEGORY_SLUG);

export const metadata: Metadata = {
  title: categoryMeta.hero.title,
  description: categoryMeta.hero.descriptionLines.join(" "),
  alternates: { canonical: SHOP_INDEX },
};

type PageProps = {
  searchParams: Promise<{ mood?: string; q?: string }>;
};

export default async function ShopPage({ searchParams }: PageProps) {
  const { mood, q } = await searchParams;
  return (
    <ShopCategoryPage
      category={categoryListing}
      categorySlug={DEFAULT_SHOP_CATEGORY_SLUG}
      initialMood={mood ?? null}
      initialSearchQuery={q ?? null}
    />
  );
}
