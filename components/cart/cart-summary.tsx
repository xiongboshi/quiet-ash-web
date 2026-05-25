"use client";

import {
  CircleHelp,
  Leaf,
  Lock,
  RotateCcw,
  ShoppingBag,
  Truck,
} from "lucide-react";
import {
  formatMoney,
  freeShippingGapFormatted,
  getCartSubtotalCents,
  getCartTotalCents,
  getEstimatedTaxCents,
  shippingSummaryLabel,
} from "@/lib/cart/pricing";
import { freeShippingOnOrdersOverCopy } from "@/lib/shipping-policy";
import type { CartItem } from "@/lib/cart/types";
import type { LucideIcon } from "lucide-react";

type Props = {
  items: CartItem[];
  onCheckout: () => void;
  checkoutPending?: boolean;
  className?: string;
};

type TrustItem = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  iconTone?: "accent" | "ink";
  getSubtitle?: (subtotalCents: number) => string;
};

const TRUST: TrustItem[] = [
  {
    icon: Truck,
    iconTone: "accent",
    title: freeShippingOnOrdersOverCopy(),
    getSubtitle: (subtotalCents) => {
      const gap = freeShippingGapFormatted(subtotalCents);
      return gap
        ? `You're ${gap} away from free shipping.`
        : "Free shipping applied at checkout.";
    },
  },
  {
    icon: RotateCcw,
    iconTone: "ink",
    title: "30-Day Returns",
    subtitle: "Not in love? Return it within 30 days.",
  },
  {
    icon: ShoppingBag,
    iconTone: "ink",
    title: "Secure Checkout",
    subtitle: "Your payment information is encrypted.",
  },
  {
    icon: Leaf,
    iconTone: "ink",
    title: "Sustainably Made",
    subtitle: "Thoughtful materials and responsible production.",
  },
];

function SummaryRow({
  label,
  value,
  info,
}: {
  label: string;
  value: string;
  info?: boolean;
}) {
  return (
    <div className="cart-summary__row">
      <dt className="cart-summary__label">
        {label}
        {info ? (
          <CircleHelp
            className="cart-summary__info"
            size={14}
            strokeWidth={1.5}
            aria-hidden
          />
        ) : null}
      </dt>
      <dd className="cart-summary__value">{value}</dd>
    </div>
  );
}

export function CartSummary({
  items,
  onCheckout,
  checkoutPending = false,
  className = "",
}: Props) {
  const subtotalCents = getCartSubtotalCents(items);
  const taxCents = getEstimatedTaxCents(subtotalCents);
  const totalCents = getCartTotalCents(subtotalCents);

  return (
    <aside className={`cart-summary ${className}`.trim()}>
      <h2 className="cart-summary__heading">Order summary</h2>

      <dl className="cart-summary__lines">
        <SummaryRow label="Subtotal" value={formatMoney(subtotalCents)} />
        <SummaryRow label="Shipping" value={shippingSummaryLabel()} info />
        <SummaryRow
          label="Estimated taxes"
          value={formatMoney(taxCents)}
          info
        />
      </dl>

      <div className="cart-summary__total-row">
        <span className="cart-summary__total-label">Total</span>
        <span className="cart-summary__total-value">
          <span className="cart-summary__currency">USD</span>
          {formatMoney(totalCents)}
        </span>
      </div>

      <button
        type="button"
        onClick={onCheckout}
        disabled={checkoutPending || items.length === 0}
        className="cart-summary__checkout"
      >
        <Lock size={16} strokeWidth={1.75} aria-hidden />
        {checkoutPending ? "Preparing checkout…" : "CHECK OUT"}
      </button>

      <button
        type="button"
        className="cart-summary__shop-pay"
        aria-disabled="true"
        aria-label="Shop Pay"
        onClick={(e) => e.preventDefault()}
      >
        <span className="cart-summary__shop-pay-logo" aria-hidden>
          <span className="cart-summary__shop-pay-mark">shop</span>
          <span className="cart-summary__shop-pay-badge">Pay</span>
        </span>
      </button>

      <ul className="cart-summary__trust">
        {TRUST.map((item) => {
          const Icon = item.icon;
          const subtitle =
            item.getSubtitle?.(subtotalCents) ?? item.subtitle ?? "";
          const iconClass =
            item.iconTone === "accent"
              ? "cart-summary__trust-icon cart-summary__trust-icon--accent"
              : "cart-summary__trust-icon";
          return (
            <li key={item.title} className="cart-summary__trust-item">
              <Icon
                className={iconClass}
                size={20}
                strokeWidth={1.25}
                aria-hidden
              />
              <span className="cart-summary__trust-copy">
                <span className="cart-summary__trust-title">{item.title}</span>
                <span className="cart-summary__trust-sub">{subtitle}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
