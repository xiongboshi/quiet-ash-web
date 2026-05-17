import type { CatalogProduct, ProductRitualBlurb } from "@/lib/catalog";
import type { CartItem, CartProductSnapshot } from "@/lib/cart/types";
import { parsePriceDisplay } from "@/lib/cart/pricing";

export function ritualContextForProduct(
  product: CatalogProduct,
): ProductRitualBlurb | undefined {
  return product.usedInRituals?.[0];
}

export function cartSnapshotFromProduct(
  product: CatalogProduct,
): CartProductSnapshot {
  const ritual = ritualContextForProduct(product);
  return {
    slug: product.slug,
    title: product.title,
    line: product.line,
    priceCents: parsePriceDisplay(product.priceDisplay),
    image: product.image,
    ...(ritual?.slug ? { ritualSlug: ritual.slug } : {}),
    ...(ritual?.title ? { ritualTitle: ritual.title } : {}),
  };
}

export function cartItemFromProduct(
  product: CatalogProduct,
  quantity = 1,
): CartItem {
  const snap = cartSnapshotFromProduct(product);
  return {
    id: snap.slug,
    slug: snap.slug,
    title: snap.title,
    priceCents: snap.priceCents,
    image: snap.image,
    quantity,
    line: snap.line,
    ...(snap.ritualSlug ? { ritualSlug: snap.ritualSlug } : {}),
    ...(snap.ritualTitle ? { ritualTitle: snap.ritualTitle } : {}),
  };
}
