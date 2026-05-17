"use client";

import {
  formatMoney,
  freeShippingMessage,
  getCartSubtotalCents,
  getShippingCents,
  shippingLabel,
} from "@/lib/cart/pricing";
import type { CartItem } from "@/lib/cart/types";

type Props = {
  items: CartItem[];
  onCheckout: () => void;
  checkoutPending?: boolean;
  variant?: "boxed" | "inline";
  className?: string;
};

export function CartSummary({
  items,
  onCheckout,
  checkoutPending = false,
  variant = "boxed",
  className = "",
}: Props) {
  const subtotalCents = getCartSubtotalCents(items);
  const shippingCents = getShippingCents(subtotalCents);
  const totalCents = subtotalCents + shippingCents;
  const shippingNote = freeShippingMessage(subtotalCents);

  const shell =
    variant === "boxed"
      ? "border border-[#D9D3CA] bg-[#EBE7DF] px-7 py-8 lg:px-8 lg:py-9"
      : "border-t border-[#DDD7CF] pt-10";

  return (
    <aside className={`${shell} ${className}`.trim()}>
      <dl className="m-0 space-y-3">
        <div className="flex items-baseline justify-between gap-4">
          <dt className="font-[family-name:var(--font-sans)] text-[12px] font-normal uppercase tracking-[0.16em] text-[#6F6A63]">
            Subtotal
          </dt>
          <dd className="m-0 font-[family-name:var(--font-sans)] text-[14px] tabular-nums text-[var(--qa-text)]">
            {formatMoney(subtotalCents)}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="font-[family-name:var(--font-sans)] text-[12px] font-normal uppercase tracking-[0.16em] text-[#6F6A63]">
            Shipping
          </dt>
          <dd className="m-0 font-[family-name:var(--font-sans)] text-[14px] tabular-nums text-[var(--qa-text)]">
            {shippingLabel(subtotalCents)}
          </dd>
        </div>
      </dl>

      {shippingNote ? (
        <p className="mt-4 font-[family-name:var(--font-sans)] text-[13px] leading-[1.55] text-[color-mix(in_srgb,#1A1A1A_70%,#6F6A63)]">
          {shippingNote}
        </p>
      ) : null}

      <div
        className={`mt-5 flex items-baseline justify-between gap-4 ${
          variant === "boxed"
            ? "border-t border-[#D9D3CA] pt-5"
            : "border-t border-[#DDD7CF] pt-5"
        }`}
      >
        <span className="font-[family-name:var(--font-serif)] text-[clamp(1.35rem,3vw,1.55rem)] font-light tracking-[-0.02em] text-[var(--qa-text)]">
          Total
        </span>
        <span className="font-[family-name:var(--font-sans)] text-[15px] font-medium tabular-nums text-[var(--qa-text)]">
          {formatMoney(totalCents)}
        </span>
      </div>

      <button
        type="button"
        onClick={onCheckout}
        disabled={checkoutPending || items.length === 0}
        className="qa-cta qa-cta--still mt-6 w-full border border-[#1a1816] bg-[#1a1816] px-6 py-[15px] font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.2em] text-[#e8e4dc] transition-opacity duration-[500ms] ease-out hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {checkoutPending ? "Preparing checkout…" : "Checkout Securely"}
      </button>

      <p className="mt-4 text-center font-[family-name:var(--font-sans)] text-[11px] leading-[1.55] text-[color-mix(in_srgb,#1A1A1A_42%,#6F6A63)]">
        All payments are securely processed through Stripe.
      </p>
    </aside>
  );
}
