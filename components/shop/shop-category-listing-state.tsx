"use client";

import {
  createContext,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useSearchParams } from "next/navigation";
import type { ResolvedShopCategory } from "@/lib/shop-catalog-resolved";
import {
  activeFiltersFromChecked,
  applyComputedFilterCounts,
  filterListingProducts,
  searchListingProducts,
} from "@/lib/shop-products";
import type { ShopListingProduct } from "@/lib/shop-types";
import type { ShopCatalogSlug } from "@/data/shop-catalog";
import type { ShopCategoryFilters } from "@/data/shop-catalog-types";
import { parseShopMoodFromSearchParams } from "@/lib/shop-filter-url";
import { getMoodFilterOptionIds } from "@/lib/shop-mood-home";

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
  /** From server `searchParams` — avoids suspending the whole PLP. */
  initialMood?: string | null;
  children: ReactNode;
};

function checkedFromMood(
  mood: string | null | undefined,
  moodIds: readonly string[],
): Record<string, boolean> {
  if (!mood || !moodIds.includes(mood)) return {};
  return { [mood]: true };
}

/** Syncs `?mood=` without suspending listing children. */
function ShopMoodParamSync({
  moodIds,
  onApply,
}: {
  moodIds: readonly string[];
  onApply: (checked: Record<string, boolean>) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const mood = parseShopMoodFromSearchParams(searchParams, moodIds);
    onApply(mood ? { [mood]: true } : {});
  }, [searchParams, moodIds, onApply]);

  return null;
}

export function ShopCategoryListingState({
  category,
  initialMood = null,
  children,
}: Props) {
  const moodIds = useMemo(
    () => getMoodFilterOptionIds(category.slug as ShopCatalogSlug),
    [category.slug],
  );

  const [checked, setChecked] = useState<Record<string, boolean>>(() =>
    checkedFromMood(initialMood, moodIds),
  );
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
    <ShopListingContext.Provider value={value}>
      <Suspense fallback={null}>
        <ShopMoodParamSync moodIds={moodIds} onApply={setChecked} />
      </Suspense>
      {children}
    </ShopListingContext.Provider>
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
