"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CartLineItem, CartContinueShopping } from "@/components/cart/cart-line-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { CartShippingProgress } from "@/components/cart/cart-shipping-progress";
import { CartEmpty } from "@/components/cart/cart-empty";
import { cartPageCopy } from "@/data/cart-page";
import { getCartSubtotalCents } from "@/lib/cart/pricing";
import { useCartStore } from "@/stores/cart-store";

export function CartPageClient() {
  const [checkoutPending, setCheckoutPending] = useState(false);

  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const increaseQty = useCartStore((s) => s.increaseQty);
  const decreaseQty = useCartStore((s) => s.decreaseQty);

  const hasItems = items.length > 0;
  const subtotalCents = getCartSubtotalCents(items);

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
    <div className="cart-page">
      <Container variant="wide" className="cart-page__main">
        {hasItems ? (
          <div className="cart-page__grid">
            <h1 className="cart-page__title">{cartPageCopy.title}</h1>

            <div className="cart-page__left">
              <CartShippingProgress
                subtotalCents={subtotalCents}
                className="cart-page__ship"
              />

              <div className="cart-page__table-block">
                <div className="cart-table-panel">
                  <div className="cart-table-head">
                    <span className="cart-table-head__cell cart-table-head__cell--product">
                      {cartPageCopy.tableHead.product}
                    </span>
                    <span className="cart-table-head__cell cart-table-head__cell--price">
                      {cartPageCopy.tableHead.price}
                    </span>
                    <span className="cart-table-head__cell cart-table-head__cell--qty">
                      {cartPageCopy.tableHead.quantity}
                    </span>
                    <span className="cart-table-head__cell cart-table-head__cell--total">
                      {cartPageCopy.tableHead.total}
                    </span>
                  </div>

                  <div className="cart-table-body">
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

                <CartContinueShopping />
              </div>
            </div>

            <CartSummary
              className="cart-page__summary"
              items={items}
              onCheckout={handleCheckout}
              checkoutPending={checkoutPending}
            />

            <CartSummary
              className="cart-summary--mobile"
              items={items}
              onCheckout={handleCheckout}
              checkoutPending={checkoutPending}
            />
          </div>
        ) : (
          <>
            <h1 className="cart-page__title">{cartPageCopy.title}</h1>
            <CartEmpty />
          </>
        )}
      </Container>
    </div>
  );
}
