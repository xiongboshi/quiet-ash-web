"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { NavCartIcon } from "@/components/site/site-nav-icons";

type Props = {
  className?: string;
  onNavigate?: () => void;
  variant?: "icon" | "menu";
};

function CartLinkFallback({ className, onNavigate, variant = "icon" }: Props) {
  if (variant === "menu") {
    return (
      <Link
        href="/cart"
        className={`qa-mobile-panel__menu-link qa-mobile-panel__menu-link--cart${className ? ` ${className}` : ""}`}
        aria-label="Cart"
        onClick={onNavigate}
      >
        Cart
      </Link>
    );
  }

  return (
    <Link
      href="/cart"
      className={`nav-icon-btn nav-icon-btn--cart${className ? ` ${className}` : ""}`}
      aria-label="Cart"
      onClick={onNavigate}
    >
      <NavCartIcon size={22} className="nav-cart-icon" />
    </Link>
  );
}

const QaHomeCartLinkInner = dynamic(
  () =>
    import("@/components/qa/qa-home-cart-link-inner").then((m) => ({
      default: m.QaHomeCartLinkInner,
    })),
  {
    ssr: false,
    loading: () => <CartLinkFallback variant="icon" />,
  },
);

export function QaHomeCartLink(props: Props) {
  return <QaHomeCartLinkInner {...props} />;
}
