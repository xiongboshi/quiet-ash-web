import type { JournalArticleProduct } from "@/types/journal-article";
import { getShopListingForProductSlug } from "@/lib/shop-products";

/** Recommended products block — slugs only; live data from shop catalog. */
export function journalArticleProductRefs(
  slugs: readonly string[],
  heading = "Recommended Incense",
): { heading: string; items: JournalArticleProduct[] } {
  return {
    heading,
    items: slugs.map((slug) => ({ slug })),
  };
}

export function journalArticleProductToListing(slug: string) {
  return getShopListingForProductSlug(slug);
}
