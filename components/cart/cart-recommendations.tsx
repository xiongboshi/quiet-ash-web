import { Gift } from "lucide-react";
import { ShopProductCard } from "@/components/shop/shop-product-card";
import {
  cartPageCopy,
  cartRecommendations,
  type CartRecommendation,
} from "@/data/cart-page";
import { DEFAULT_SHOP_CATEGORY_SLUG } from "@/data/shop-catalog";
import { getProductBySlug } from "@/lib/catalog";
import { formatMoney } from "@/lib/cart/pricing";
import { catalogProductToListing } from "@/lib/shop-products";
import type { ShopListingProduct } from "@/lib/shop-types";

function toListingProduct(product: CartRecommendation): ShopListingProduct {
  const catalog = getProductBySlug(product.slug);
  const fromCatalog = catalog
    ? catalogProductToListing(catalog, DEFAULT_SHOP_CATEGORY_SLUG)
    : null;

  return {
    slug: product.slug,
    title: product.title,
    scentNotes: fromCatalog?.scentNotes ?? product.type,
    priceDisplay: fromCatalog?.priceDisplay ?? formatMoney(product.priceCents),
    priceCents: fromCatalog?.priceCents ?? product.priceCents,
    reviewCount: fromCatalog?.reviewCount ?? 0,
    imageSrc: product.image,
    imageAlt: fromCatalog?.imageAlt ?? product.title,
    filterTags: fromCatalog?.filterTags ?? {},
  };
}

export function CartRecommendations() {
  return (
    <section className="cart-rec" aria-labelledby="cart-rec-heading">
      <div className="cart-rec__inner">
        <header className="cart-rec__header">
          <h2 id="cart-rec-heading" className="cart-rec__title">
            {cartPageCopy.recommendations.heading}
          </h2>
          <p className="cart-rec__sub">{cartPageCopy.recommendations.subheading}</p>
        </header>

        <ul className="cart-rec__grid shop-category-listing__grid">
          {cartRecommendations.map((product) => (
            <li key={product.slug} className="shop-category-listing__cell">
              <ShopProductCard item={toListingProduct(product)} />
            </li>
          ))}
        </ul>

        <p className="cart-rec__promo">
          <Gift className="cart-rec__promo-icon" size={15} strokeWidth={1.25} aria-hidden />
          {cartPageCopy.recommendations.promo}
        </p>
      </div>
    </section>
  );
}
