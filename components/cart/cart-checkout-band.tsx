"use client";

import { CartPackageImage } from "@/components/cart/cart-package-image";
import { CartShippingInfo } from "@/components/cart/cart-shipping-info";
import { CartSummary } from "@/components/cart/cart-summary";
import type { CartItem } from "@/lib/cart/types";

type Props = {
  items: CartItem[];
  onCheckout: () => void;
  checkoutPending: boolean;
};

/** Desktop: package + shipping (left) | summary box (right). Mobile: shipping below summary. */
export function CartCheckoutBand({ items, onCheckout, checkoutPending }: Props) {
  return (
    <>
      <div className="mt-[18px] hidden border-t border-[#DDD7CF] pt-[18px] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(300px,360px)] lg:items-start lg:gap-x-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-10 lg:gap-14">
          <CartPackageImage />
          <CartShippingInfo className="min-w-0 flex-1 self-start" />
        </div>
        <CartSummary
          items={items}
          onCheckout={onCheckout}
          checkoutPending={checkoutPending}
          variant="boxed"
        />
      </div>

      <div className="mt-12 border-t border-[#DDD7CF] pt-10 lg:hidden">
        <div className="flex flex-col items-center gap-8">
          <CartPackageImage />
          <CartShippingInfo className="!mt-0 w-full max-w-[min(100%,340px)]" />
        </div>
      </div>
    </>
  );
}
