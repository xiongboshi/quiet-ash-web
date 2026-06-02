"use client";

import { useMemo } from "react";
import { ShopCategoryListingBar } from "@/components/shop/shop-category-listing-bar";
import { useShopCategory } from "@/components/shop/shop-category-context";
import { useShopListingState } from "@/components/shop/shop-category-listing-state";
import { ShopProductCard } from "@/components/shop/shop-product-card";
import { sortListingProducts } from "@/lib/shop-listing-filters";

type Props = {
  filtersOpen: boolean;
  onToggleFilters: () => void;
};

function listingEmptyState(
  hasSearch: boolean,
  hasFilters: boolean,
  aisleHasProducts: boolean,
): { title: string; message: string } {
  if (!aisleHasProducts) {
    return {
      title: "Nothing here yet",
      message: "We are adding pieces to this collection. Check back soon.",
    };
  }
  if (hasSearch && hasFilters) {
    return {
      title: "No matches",
      message:
        "Nothing fits your search and filters. Try different words or clear a few filters.",
    };
  }
  if (hasSearch) {
    return {
      title: "No matches for your search",
      message: "Try another product name, scent note, or a shorter phrase.",
    };
  }
  if (hasFilters) {
    return {
      title: "No matches for these filters",
      message: "Relax your filters to see more scents in this collection.",
    };
  }
  return {
    title: "No products to show",
    message: "Adjust your filters to discover incense in this aisle.",
  };
}

export function ShopCategoryListing({ filtersOpen, onToggleFilters }: Props) {
  const { listing, breadcrumbs } = useShopCategory();
  const {
    products,
    allProducts,
    searchQuery,
    setSearchQuery,
    checked,
    clearAll,
  } = useShopListingState();
  const filterSelectionCount = Object.values(checked).filter(Boolean).length;
  const hasSearch = searchQuery.trim().length > 0;
  const hasFilters = filterSelectionCount > 0;
  const defaultSort = listing.sortOptions[0];

  const sortedProducts = useMemo(
    () => sortListingProducts(products, defaultSort),
    [products, defaultSort],
  );

  const isEmpty = sortedProducts.length === 0;
  const emptyCopy = listingEmptyState(
    hasSearch,
    hasFilters,
    allProducts.length > 0,
  );

  const resetAll = () => {
    setSearchQuery("");
    clearAll();
  };

  return (
    <div className="shop-category-listing">
      <ShopCategoryListingBar
        breadcrumbs={breadcrumbs}
        filtersOpen={filtersOpen}
        filterCount={filterSelectionCount}
        onToggleFilters={onToggleFilters}
      />

      {isEmpty ? (
        <div className="shop-category-listing__empty" role="status">
          <h2 className="shop-category-listing__empty-title">{emptyCopy.title}</h2>
          <p className="shop-category-listing__empty-message">{emptyCopy.message}</p>
          {allProducts.length > 0 && (hasSearch || hasFilters) ? (
            <div className="shop-category-listing__empty-actions">
              <button
                type="button"
                className="shop-category-listing__empty-btn shop-category-listing__empty-btn--primary"
                onClick={
                  hasSearch && hasFilters
                    ? resetAll
                    : hasSearch
                      ? () => setSearchQuery("")
                      : clearAll
                }
              >
                {hasSearch && hasFilters
                  ? "Clear search & filters"
                  : hasSearch
                    ? "Clear search"
                    : "Clear filters"}
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <ul className="shop-category-listing__grid">
          {sortedProducts.map((item) => (
            <li key={item.slug} className="shop-category-listing__cell">
              <ShopProductCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
