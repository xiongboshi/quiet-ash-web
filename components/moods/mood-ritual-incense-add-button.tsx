"use client";

import type { CatalogProduct } from "@/lib/catalog";
import { cartItemFromProduct } from "@/lib/cart/from-product";
import {
  CartAddedToast,
  useCartAddedToast,
} from "@/components/cart/cart-added-toast";
import { useCartStore } from "@/stores/cart-store";

type Props = {
  product: CatalogProduct;
  displayTitle: string;
};

export function MoodRitualIncenseAddButton({ product, displayTitle }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const { toast, show, dismiss } = useCartAddedToast();

  return (
    <>
      <button
        type="button"
        className="mood-ritual-incense__cart-btn"
        onClick={() => {
          addItem(cartItemFromProduct(product, 1));
          show(displayTitle);
        }}
      >
        Add to cart
      </button>
      <CartAddedToast toast={toast} onDismiss={dismiss} />
    </>
  );
}
