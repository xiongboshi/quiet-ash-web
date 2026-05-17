"use client";

import { CartPageClient } from "@/components/cart/cart-page-client";
import { CartPageSkeleton } from "@/components/cart/cart-page-skeleton";
import { useCartHydrated } from "@/lib/cart/use-cart-hydrated";

/** Client shell for cart — wait for localStorage before rendering line items. */
export function CartPageGate() {
  const hydrated = useCartHydrated();

  if (!hydrated) {
    return <CartPageSkeleton />;
  }

  return <CartPageClient />;
}
