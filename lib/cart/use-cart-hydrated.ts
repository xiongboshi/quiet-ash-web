"use client";

import { useSyncExternalStore } from "react";
import { useCartStore } from "@/stores/cart-store";

/** True after Zustand has read `quietash-cart` from localStorage (client only). */
export function useCartHydrated() {
  const persist = useCartStore.persist;

  return useSyncExternalStore(
    persist ? persist.onFinishHydration : () => () => {},
    () => (persist ? persist.hasHydrated() : true),
    () => false,
  );
}
