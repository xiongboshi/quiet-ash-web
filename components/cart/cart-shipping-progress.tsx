"use client";

import { Truck } from "lucide-react";
import {
  freeShippingGapFormatted,
  shippingProgressPercent,
} from "@/lib/cart/pricing";
import { freeShippingThresholdLabel } from "@/lib/shipping-policy";

type Props = {
  subtotalCents: number;
  className?: string;
};

export function CartShippingProgress({ subtotalCents, className = "" }: Props) {
  const gap = freeShippingGapFormatted(subtotalCents);
  const percent = shippingProgressPercent(subtotalCents);

  if (!gap) {
    return (
      <p
        className={`cart-ship-msg cart-ship-msg--unlocked ${className}`.trim()}
      >
        You&apos;ve unlocked free shipping.
      </p>
    );
  }

  return (
    <div className={`cart-ship ${className}`.trim()}>
      <p className="cart-ship-msg">
        You&apos;re <span className="cart-ship-msg__amount">{gap}</span> away from
        free shipping.
      </p>
      <div className="cart-ship-bar">
        <div
          className="cart-ship-bar__fill"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={Math.round(percent)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progress toward free shipping"
        />
      </div>
      <div className="cart-ship-labels">
        <span>$0</span>
        <span className="cart-ship-labels__goal">
          <Truck
            className="cart-ship-labels__icon"
            size={16}
            strokeWidth={1.25}
            aria-hidden
          />
          {freeShippingThresholdLabel()}
        </span>
      </div>
    </div>
  );
}
