"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { CartItem } from "@/lib/cart/types";

const STORAGE_KEY = "quietash-cart";
const EMPTY_ITEMS: CartItem[] = [];

type CartState = {
  items: CartItem[];
  note: string;
  addItem: (item: Omit<CartItem, "id" | "quantity"> & { quantity?: number }) => void;
  removeItem: (slug: string) => void;
  increaseQty: (slug: string) => void;
  decreaseQty: (slug: string) => void;
  clearCart: () => void;
  setNote: (note: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: EMPTY_ITEMS,
      note: "",
      addItem: (incoming) => {
        const quantity = incoming.quantity ?? 1;
        set((state) => {
          const existing = state.items.find((i) => i.slug === incoming.slug);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.slug === incoming.slug
                  ? { ...i, quantity: i.quantity + quantity }
                  : i,
              ),
            };
          }
          const item: CartItem = {
            ...incoming,
            id: incoming.slug,
            quantity,
          };
          return { items: [...state.items, item] };
        });
      },
      removeItem: (slug) =>
        set((state) => ({
          items: state.items.filter((i) => i.slug !== slug),
        })),
      increaseQty: (slug) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.slug === slug ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        })),
      decreaseQty: (slug) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.slug === slug ? { ...i, quantity: i.quantity - 1 } : i,
            )
            .filter((i) => i.quantity > 0),
        })),
      clearCart: () => set({ items: EMPTY_ITEMS, note: "" }),
      setNote: (note) => set({ note }),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items, note: state.note }),
    },
  ),
);

export function selectCartCount(items: CartItem[]): number {
  return items.reduce((n, i) => n + i.quantity, 0);
}
