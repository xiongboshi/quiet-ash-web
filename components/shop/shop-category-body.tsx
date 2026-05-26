"use client";

import { useEffect, useState } from "react";
import { ShopCategoryListing } from "@/components/shop/shop-category-listing";
import { ShopCategorySidebar } from "@/components/shop/shop-category-sidebar";

export function ShopCategoryBody() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    if (!filtersOpen) return;
    const mq = window.matchMedia("(max-width: 1023px)");
    if (!mq.matches) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [filtersOpen]);

  return (
    <div
      className={`shop-category-page__layout${
        filtersOpen ? " shop-category-page__layout--filters-open" : ""
      }`}
    >
      <ShopCategorySidebar
        filtersOpen={filtersOpen}
        onClose={() => setFiltersOpen(false)}
      />
      <ShopCategoryListing
        filtersOpen={filtersOpen}
        onToggleFilters={() => setFiltersOpen((open) => !open)}
      />
    </div>
  );
}
