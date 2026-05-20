"use client";

import Link from "next/link";
import { useCartHydrated } from "@/lib/cart/use-cart-hydrated";
import { selectCartCount, useCartStore } from "@/stores/cart-store";

type Props = {
  className?: string;
  onNavigate?: () => void;
};

export function QaHomeCartLink({ className, onNavigate }: Props) {
  const hydrated = useCartHydrated();
  const count = useCartStore((s) => selectCartCount(s.items));
  const display = hydrated ? count : 0;

  return (
    <Link href="/cart" className={className} onClick={onNavigate}>
      CART ({display})
    </Link>
  );
}
