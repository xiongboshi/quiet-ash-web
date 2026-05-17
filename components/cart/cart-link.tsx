"use client";

import Link from "next/link";
import { useCartHydrated } from "@/lib/cart/use-cart-hydrated";
import { selectCartCount, useCartStore } from "@/stores/cart-store";

type Props = {
  className?: string;
  onNavigate?: () => void;
};

export function CartLink({ className, onNavigate }: Props) {
  const hydrated = useCartHydrated();
  const count = useCartStore((s) => selectCartCount(s.items));

  const label = hydrated && count > 0 ? `Cart (${count})` : "Cart";

  return (
    <Link href="/cart" className={className} onClick={onNavigate}>
      {label}
    </Link>
  );
}
