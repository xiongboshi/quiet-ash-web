import { ShopProductCard } from "@/components/shop/shop-product-card";
import { DEFAULT_SHOP_CATEGORY_SLUG } from "@/data/shop-catalog";
import { getProductBySlug } from "@/lib/catalog";
import { parsePriceDisplay } from "@/lib/cart/pricing";
import { catalogProductToListing } from "@/lib/shop-products";
import type { ShopListingProduct } from "@/lib/shop-types";
import type { JournalArticleTemplate } from "@/types/journal-article";

type Props = {
  block: JournalArticleTemplate["products"];
};

function toListingProduct(
  item: JournalArticleTemplate["products"]["items"][number],
): ShopListingProduct {
  const product = getProductBySlug(item.slug);
  const fromCatalog = product
    ? catalogProductToListing(product, DEFAULT_SHOP_CATEGORY_SLUG)
    : null;

  return {
    slug: item.slug,
    title: item.title,
    scentNotes: fromCatalog?.scentNotes ?? product?.line ?? "",
    priceDisplay: item.priceDisplay,
    priceCents:
      fromCatalog?.priceCents ??
      (parsePriceDisplay(item.priceDisplay) || 0),
    reviewCount: item.reviewCount,
    imageSrc: item.imageSrc,
    imageAlt: item.imageAlt,
    filterTags: fromCatalog?.filterTags ?? {},
  };
}

export function JournalArticleProducts({ block }: Props) {
  if (!block.items.length) return null;

  return (
    <section
      id="recommended"
      className="journal-article-products"
      aria-labelledby="journal-article-products-heading"
    >
      <h2 id="journal-article-products-heading" className="journal-article-products__heading">
        {block.heading}
      </h2>
      <ul className="journal-article-products__grid shop-category-listing__grid">
        {block.items.map((item) => (
          <li key={item.slug} className="shop-category-listing__cell">
            <ShopProductCard item={toListingProduct(item)} />
          </li>
        ))}
      </ul>
    </section>
  );
}
