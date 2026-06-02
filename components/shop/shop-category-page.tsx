import { ShopCategoryPageClient } from "@/components/shop/shop-category-page-client";
import type { ShopCatalogSlug } from "@/data/shop-catalog";
import { resolveShopCategory } from "@/lib/shop-catalog-resolved";
import type { ResolvedShopCategory } from "@/lib/shop-catalog-resolved";

type Props = {
  categorySlug: ShopCatalogSlug;
  initialMood?: string | null;
  initialSearchQuery?: string | null;
  /** When set, skips catalog resolution (use from RSC page). */
  category?: ResolvedShopCategory;
};

/**
 * Server entry — resolves catalog on the server only, then hands off to the client shell.
 */
export function ShopCategoryPage({
  categorySlug,
  initialMood = null,
  initialSearchQuery = null,
  category: categoryProp,
}: Props) {
  const category = categoryProp ?? resolveShopCategory(categorySlug);

  return (
    <ShopCategoryPageClient
      category={category}
      initialMood={initialMood}
      initialSearchQuery={initialSearchQuery}
    />
  );
}
