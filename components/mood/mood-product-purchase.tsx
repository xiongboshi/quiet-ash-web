"use client";

import Link from "next/link";
import type { CatalogProduct } from "@/lib/catalog";
import { cartItemFromProduct } from "@/lib/cart/from-product";
import {
  CartAddedToast,
  useCartAddedToast,
} from "@/components/cart/cart-added-toast";
import { useCartHydrated } from "@/lib/cart/use-cart-hydrated";
import { selectCartCount, useCartStore } from "@/stores/cart-store";

const pillBtn =
  "rounded-full bg-[#1C1C1C] text-[11px] uppercase tracking-[0.16em] text-[#F8F5EE] transition duration-500 hover:scale-[1.02]";

type Props = {
  product: CatalogProduct;
  displayTitle: string;
  priceDisplay: string;
};

function useMoodProductPurchase(product: CatalogProduct, displayTitle: string) {
  const addItem = useCartStore((s) => s.addItem);
  const { toast, show, dismiss } = useCartAddedToast();

  function addToCart() {
    addItem(cartItemFromProduct(product, 1));
    show(displayTitle);
  }

  return { addToCart, toast, dismiss };
}

export function MoodProductCartButton({ className }: { className?: string }) {
  const hydrated = useCartHydrated();
  const count = useCartStore((s) => selectCartCount(s.items));
  const label = hydrated && count > 0 ? `Cart (${count})` : "Cart";

  return (
    <Link
      href="/cart"
      className={`${pillBtn} inline-block px-5 py-2 no-underline ${className ?? ""}`}
    >
      {label}
    </Link>
  );
}

export function MoodProductPurchaseInline({
  product,
  displayTitle,
  priceDisplay,
}: Props) {
  const { addToCart, toast, dismiss } = useMoodProductPurchase(
    product,
    displayTitle,
  );

  return (
    <>
      <div className="mt-10 flex items-center gap-5">
        <span className="text-[20px]">{priceDisplay}</span>
        <button
          type="button"
          onClick={addToCart}
          className={`${pillBtn} px-8 py-4`}
        >
          Add to cart
        </button>
      </div>
      <CartAddedToast toast={toast} onDismiss={dismiss} />
    </>
  );
}

export function MoodProductMobileDock({
  product,
  displayTitle,
  priceDisplay,
}: Props) {
  const { addToCart, toast, dismiss } = useMoodProductPurchase(
    product,
    displayTitle,
  );

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/5 bg-[#F8F5EE]/95 p-4 backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[14px] font-medium">{displayTitle}</p>
            <p className="mt-1 text-[13px] text-[#666]">{priceDisplay}</p>
          </div>
          <button
            type="button"
            onClick={addToCart}
            className={`${pillBtn} px-6 py-3`}
          >
            Add to cart
          </button>
        </div>
      </div>
      <CartAddedToast toast={toast} onDismiss={dismiss} />
    </>
  );
}
