import { DEFAULT_SHOP_CATEGORY_SLUG } from "@/data/shop-catalog";
import {
  homeBestSellersManifest,
  homeBestSellersSection,
} from "@/data/home-best-sellers";
import type { HomeBestSellersManifestEntry } from "@/data/home-best-sellers";
import type { HomeBestSellerCard } from "@/data/home-redesign";
import type { ShopHomeBestSellersSection } from "@/data/shop-catalog-types";
import type { CatalogProduct } from "@/lib/catalog";
import { getProductBySlug } from "@/lib/catalog";
import { catalogProductToListing } from "@/lib/shop-products";

export type ResolvedHomeBestSellersSection = ShopHomeBestSellersSection & {
  products: HomeBestSellerCard[];
};

function materialLine(product: CatalogProduct): string {
  return [product.material, product.origin].filter(Boolean).join(" · ");
}

function productToHomeCard(
  product: CatalogProduct,
  override: HomeBestSellersManifestEntry["card"] = {},
): HomeBestSellerCard {
  const listing = catalogProductToListing(product, DEFAULT_SHOP_CATEGORY_SLUG);
  const canonicalNotes = materialLine(product) || product.line;
  const title = override.title ?? listing?.title ?? product.title;
  const scentNotes =
    override.scentNotes ?? listing?.scentNotes ?? canonicalNotes;
  const priceDisplay = listing?.priceDisplay ?? "";
  const reviewCount =
    override.reviewCount ??
    listing?.reviewCount ??
    product.shopPdp?.rating?.count ??
    120;
  const imageSrc = override.imageSrc ?? listing?.imageSrc ?? product.image;
  const imageAlt = override.imageAlt ?? listing?.imageAlt ?? product.title;

  return {
    slug: product.slug,
    title,
    scentNotes,
    priceDisplay,
    reviewCount,
    imageSrc,
    imageAlt,
    ...(override.imageObjectPosition
      ? { imageObjectPosition: override.imageObjectPosition }
      : {}),
  };
}

function assertShopProduct(product: CatalogProduct, slug: string): void {
  if (!product.shop?.categorySlugs.length) {
    throw new Error(
      `[home-best-sellers] "${slug}" is in the manifest but has no shop.categorySlugs — add the product to at least one shop aisle first.`,
    );
  }
}

/**
 * Resolve manifest → homepage cards.
 * Order follows `homeBestSellersManifest` (top = first on homepage).
 */
export function getHomeBestSellersProducts(): HomeBestSellerCard[] {
  const cards: HomeBestSellerCard[] = [];

  for (const entry of homeBestSellersManifest) {
    const product = getProductBySlug(entry.slug);
    if (!product) {
      throw new Error(
        `[home-best-sellers] Unknown slug "${entry.slug}" — create data/products/**/${entry.slug}.json or remove it from data/home-best-sellers.ts.`,
      );
    }
    assertShopProduct(product, entry.slug);
    cards.push(productToHomeCard(product, entry.card ?? {}));
  }

  return cards;
}

export function getHomeBestSellersSection(): ResolvedHomeBestSellersSection | null {
  const products = getHomeBestSellersProducts();
  if (!products.length) return null;

  return { ...homeBestSellersSection, products };
}
