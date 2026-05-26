"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ResolvedShopCategory } from "@/lib/shop-catalog-resolved";
import {
  activeFiltersFromChecked,
  applyComputedFilterCounts,
  filterListingProducts,
  searchListingProducts,
} from "@/lib/shop-products";
import type { ShopListingProduct } from "@/lib/shop-types";
import type { ShopCategoryFilters } from "@/data/shop-catalog-types";

type ShopListingState = {
  products: ShopListingProduct[];
  allProducts: ShopListingProduct[];
  filters: ShopCategoryFilters;
  productCount: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  checked: Record<string, boolean>;
  toggleOption: (id: string) => void;
  clearAll: () => void;
};

const ShopListingContext = createContext<ShopListingState | null>(null);

type Props = {
  category: ResolvedShopCategory;
  children: ReactNode;
};

export function ShopCategoryListingState({ category, children }: Props) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");

  const active = useMemo(
    () => activeFiltersFromChecked(checked, category.filters.groups),
    [checked, category.filters.groups],
  );

  const filteredByFilters = useMemo(
    () => filterListingProducts(category.allProducts, active),
    [category.allProducts, active],
  );

  const products = useMemo(
    () => searchListingProducts(filteredByFilters, searchQuery),
    [filteredByFilters, searchQuery],
  );

  const filters = useMemo(
    () =>
      applyComputedFilterCounts(
        category.filters,
        category.allProducts,
        active,
      ),
    [category.filters, category.allProducts, active],
  );

  const toggleOption = useCallback((id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const clearAll = useCallback(() => setChecked({}), []);

  const value = useMemo<ShopListingState>(
    () => ({
      products,
      allProducts: category.allProducts,
      filters,
      productCount: products.length,
      searchQuery,
      setSearchQuery,
      checked,
      toggleOption,
      clearAll,
    }),
    [
      products,
      category.allProducts,
      filters,
      searchQuery,
      checked,
      toggleOption,
      clearAll,
    ],
  );

  return (
    <ShopListingContext.Provider value={value}>{children}</ShopListingContext.Provider>
  );
}

export function useShopListingState(): ShopListingState {
  const ctx = useContext(ShopListingContext);
  if (!ctx) {
    throw new Error(
      "useShopListingState must be used within ShopCategoryListingState",
    );
  }
  return ctx;
}
