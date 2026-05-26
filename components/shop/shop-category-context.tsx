"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { ResolvedShopCategory } from "@/lib/shop-catalog-resolved";

const ShopCategoryContext = createContext<ResolvedShopCategory | null>(null);

type Props = {
  category: ResolvedShopCategory;
  children: ReactNode;
};

export function ShopCategoryProvider({ category, children }: Props) {
  return (
    <ShopCategoryContext.Provider value={category}>{children}</ShopCategoryContext.Provider>
  );
}

export function useShopCategory(): ResolvedShopCategory {
  const category = useContext(ShopCategoryContext);
  if (!category) {
    throw new Error("useShopCategory must be used within ShopCategoryProvider");
  }
  return category;
}
