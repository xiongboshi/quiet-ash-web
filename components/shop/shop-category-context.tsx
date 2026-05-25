"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { ShopCategoryDefinition } from "@/data/shop-catalog-types";

const ShopCategoryContext = createContext<ShopCategoryDefinition | null>(null);

type Props = {
  category: ShopCategoryDefinition;
  children: ReactNode;
};

export function ShopCategoryProvider({ category, children }: Props) {
  return (
    <ShopCategoryContext.Provider value={category}>{children}</ShopCategoryContext.Provider>
  );
}

export function useShopCategory(): ShopCategoryDefinition {
  const category = useContext(ShopCategoryContext);
  if (!category) {
    throw new Error("useShopCategory must be used within ShopCategoryProvider");
  }
  return category;
}
