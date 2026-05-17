"use client";

import { useRouter } from "next/navigation";
import type { CatalogProduct } from "@/lib/catalog";
import { cartItemFromProduct } from "@/lib/cart/from-product";
import {
  CartAddedToast,
  useCartAddedToast,
} from "@/components/cart/cart-added-toast";
import { useCartStore } from "@/stores/cart-store";

const addToCartClass =
  "qa-cta qa-cta--still inline-flex items-center justify-center gap-2 border border-[color-mix(in_srgb,#1a1816_12%,transparent)] bg-[#e8e4dc] px-4 py-3.5 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.2em] text-[#1a1816] no-underline transition-opacity duration-[500ms] ease-out hover:opacity-85";

const buyNowClass =
  "qa-cta qa-cta--still inline-flex items-center justify-center border border-[#1a1816] bg-[#1a1816] px-4 py-3.5 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.2em] text-[#e8e4dc] no-underline transition-opacity duration-[500ms] ease-out hover:opacity-90";

function IconBag({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
      <path d="M5 9h14v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9Z" />
      <path d="M5 9V8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1" />
    </svg>
  );
}

type Props = {
  product: CatalogProduct;
};

function useProductPurchase(product: CatalogProduct) {
  const router = useRouter();
  const addItem = useCartStore((s) => s.addItem);
  const { toast, show, dismiss } = useCartAddedToast();

  function addToCart() {
    addItem(cartItemFromProduct(product, 1));
    show(product.title);
  }

  function buyNow() {
    addItem(cartItemFromProduct(product, 1));
    router.push("/cart");
  }

  return { addToCart, buyNow, toast, dismiss };
}

export function ObjectPurchaseActionsInline({ product }: Props) {
  const { addToCart, buyNow, toast, dismiss } = useProductPurchase(product);

  return (
    <>
      <div className="mt-10 hidden w-full max-w-full flex-col gap-3 lg:flex">
        <button
          type="button"
          onClick={addToCart}
          className={`${addToCartClass} w-full justify-between gap-4 px-5`}
        >
          <span>Add to cart</span>
          <IconBag className="h-[18px] w-[18px] shrink-0 text-[#1a1816]" />
        </button>
        <button
          type="button"
          onClick={buyNow}
          className={`${buyNowClass} w-full px-5`}
        >
          Buy now
        </button>
      </div>
      <CartAddedToast toast={toast} onDismiss={dismiss} />
    </>
  );
}

export function ObjectMobilePurchaseDock({ product }: Props) {
  const { addToCart, buyNow, toast, dismiss } = useProductPurchase(product);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-50 lg:hidden"
        role="region"
        aria-label="Purchase actions"
      >
        <div className="pointer-events-auto border-t border-[color-mix(in_srgb,#ddd7cf_90%,transparent)] bg-[color-mix(in_srgb,var(--qa-bg)_92%,transparent)] px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-[6px]">
          <div className="mx-auto flex w-full max-w-[min(100%,var(--qa-container-width))] gap-3">
            <button
              type="button"
              onClick={addToCart}
              className={`${addToCartClass} min-h-[48px] flex-1`}
            >
              Add to cart
            </button>
            <button
              type="button"
              onClick={buyNow}
              className={`${buyNowClass} min-h-[48px] flex-1`}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
      <CartAddedToast toast={toast} onDismiss={dismiss} />
    </>
  );
}
