"use client";

import { useState } from "react";
import { ShopCategoryListing } from "@/components/shop/shop-category-listing";
import { ShopCategorySidebar } from "@/components/shop/shop-category-sidebar";

export function ShopCategoryBody() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div
      className={`shop-category-page__layout${
        filtersOpen ? " shop-category-page__layout--filters-open" : ""
      }`}
    >
      <ShopCategorySidebar onFilterChange={() => setFiltersOpen(false)} />
      <ShopCategoryListing
        filtersOpen={filtersOpen}
        onToggleFilters={() => setFiltersOpen((open) => !open)}
      />
    </div>
  );
}
