"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CartLineItem } from "@/components/cart/cart-line-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { CartCheckoutBand } from "@/components/cart/cart-checkout-band";
import { CartEmpty } from "@/components/cart/cart-empty";
import { CART_TABLE_GRID, CART_TABLE_HEAD_CELL } from "@/components/cart/cart-layout";
import { useCartStore } from "@/stores/cart-store";

export function CartPageClient() {
  const [checkoutPending, setCheckoutPending] = useState(false);

  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const increaseQty = useCartStore((s) => s.increaseQty);
  const decreaseQty = useCartStore((s) => s.decreaseQty);

  const hasItems = items.length > 0;

  async function handleCheckout() {
    setCheckoutPending(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, note: useCartStore.getState().note }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (res.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      console.error(data.error ?? "Checkout unavailable");
    } catch {
      console.error("Checkout request failed");
    } finally {
      setCheckoutPending(false);
    }
  }

  return (
    <Container
      variant="wide"
      className={hasItems ? "pb-4 lg:pb-6" : "pb-0"}
    >
      <header className="mb-[18px] max-w-[42ch]">
        <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.35rem,5.5vw,3.5rem)] font-light leading-[1.06] tracking-[-0.04em] text-[var(--qa-text)]">
          Your Ritual
        </h1>
        {hasItems ? (
          <p className="mt-3 font-[family-name:var(--font-sans)] text-[15px] font-normal leading-[1.65] text-[color-mix(in_srgb,#1A1A1A_80%,#6F6A63)] lg:mt-4 lg:text-[16px]">
            These objects are ready to be part of your space.
          </p>
        ) : null}
      </header>

      {hasItems ? (
        <>
          <div className="hidden lg:block">
            <div className={`border-t border-[#DDD7CF] ${CART_TABLE_GRID}`}>
              <span className={`${CART_TABLE_HEAD_CELL} pb-6 pt-8`}>
                Object
              </span>
              <span className={`${CART_TABLE_HEAD_CELL} pb-6 pt-8`}>
                Price
              </span>
              <span className={`${CART_TABLE_HEAD_CELL} pb-6 pt-8`}>Qty</span>
              <span className={`${CART_TABLE_HEAD_CELL} pb-6 pt-8 text-right`}>
                Total
              </span>
            </div>
            <div>
              {items.map((item) => (
                <CartLineItem
                  key={item.slug}
                  item={item}
                  onDecrease={() => decreaseQty(item.slug)}
                  onIncrease={() => increaseQty(item.slug)}
                  onRemove={() => removeItem(item.slug)}
                />
              ))}
            </div>
          </div>

          <div className="border-t border-[#DDD7CF] lg:hidden">
            {items.map((item) => (
              <CartLineItem
                key={item.slug}
                item={item}
                onDecrease={() => decreaseQty(item.slug)}
                onIncrease={() => increaseQty(item.slug)}
                onRemove={() => removeItem(item.slug)}
              />
            ))}
          </div>

          <div className="lg:hidden">
            <CartSummary
              items={items}
              onCheckout={handleCheckout}
              checkoutPending={checkoutPending}
              variant="inline"
            />
          </div>

          <CartCheckoutBand
            items={items}
            onCheckout={handleCheckout}
            checkoutPending={checkoutPending}
          />
        </>
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
}
