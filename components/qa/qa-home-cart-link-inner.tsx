"use client";

import Link from "next/link";
import { NavCartIcon } from "@/components/site/site-nav-icons";
import { useCartHydrated } from "@/lib/cart/use-cart-hydrated";
import { selectCartCount, useCartStore } from "@/stores/cart-store";

type Props = {
  className?: string;
  onNavigate?: () => void;
  variant?: "icon" | "menu";
};

export function QaHomeCartLinkInner({
  className,
  onNavigate,
  variant = "icon",
}: Props) {
  const hydrated = useCartHydrated();
  const count = useCartStore((s) => selectCartCount(s.items));
  const display = hydrated ? count : 0;
  const label = display > 0 ? `Cart, ${display} items` : "Cart";

  if (variant === "menu") {
    return (
      <Link
        href="/cart"
        className={`qa-mobile-panel__menu-link qa-mobile-panel__menu-link--cart${className ? ` ${className}` : ""}`}
        aria-label={label}
        onClick={onNavigate}
      >
        Cart
        {display > 0 ? (
          <span className="qa-mobile-panel__cart-count" aria-hidden>
            {display > 9 ? "9+" : display}
          </span>
        ) : null}
      </Link>
    );
  }

  return (
    <Link
      href="/cart"
      className={`nav-icon-btn nav-icon-btn--cart${className ? ` ${className}` : ""}`}
      aria-label={label}
      onClick={onNavigate}
    >
      <NavCartIcon size={22} className="nav-cart-icon" />
      {display > 0 ? (
        <span className="nav-cart-badge" aria-hidden>
          {display > 9 ? "9+" : display}
        </span>
      ) : null}
    </Link>
  );
}
