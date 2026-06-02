import { ShopProductCard } from "@/components/shop/shop-product-card";
import { journalArticleProductToListing } from "@/lib/journal-article-products";
import { parsePriceDisplay } from "@/lib/cart/pricing";
import type { ShopListingProduct } from "@/lib/shop-types";
import type { JournalArticleTemplate } from "@/types/journal-article";

type Props = {
  block: JournalArticleTemplate["products"];
};

function toListingProduct(
  item: JournalArticleTemplate["products"]["items"][number],
): ShopListingProduct | null {
  const fromCatalog = journalArticleProductToListing(item.slug);
  if (fromCatalog) return fromCatalog;

  if (process.env.NODE_ENV === "development") {
    console.warn(
      `[journal-article-products] No shop listing for slug "${item.slug}" — add shop.categorySlugs in data/products.`,
    );
  }

  if (!item.title && !item.priceDisplay && !item.imageSrc) return null;

  return {
    slug: item.slug,
    title: item.title ?? item.slug,
    scentNotes: "",
    priceDisplay: item.priceDisplay ?? "",
    priceCents: parsePriceDisplay(item.priceDisplay ?? "") || 0,
    reviewCount: item.reviewCount ?? 0,
    imageSrc: item.imageSrc ?? "",
    imageAlt: item.imageAlt ?? item.title ?? item.slug,
    filterTags: {},
  };
}

export function JournalArticleProducts({ block }: Props) {
  const items = block.items
    .map((item) => toListingProduct(item))
    .filter((row): row is ShopListingProduct => row !== null);

  if (!items.length) return null;

  return (
    <section
      id="recommended"
      className="journal-article-products"
      aria-labelledby="journal-article-products-heading"
    >
      <h2
        id="journal-article-products-heading"
        className="journal-article-products__heading"
      >
        {block.heading}
      </h2>
      <ul className="journal-article-products__grid shop-category-listing__grid">
        {items.map((item) => (
          <li key={item.slug} className="shop-category-listing__cell">
            <ShopProductCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
