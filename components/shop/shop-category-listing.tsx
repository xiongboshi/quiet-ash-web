"use client";

import { useId, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useShopCategory } from "@/components/shop/shop-category-context";
import { useShopListingState } from "@/components/shop/shop-category-listing-state";
import { ShopProductCard } from "@/components/shop/shop-product-card";
import {
  shopSortChipLabel,
  sortListingProducts,
} from "@/lib/shop-products";

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
    message: "Adjust your filters or search to discover incense in this aisle.",
  };
}

export function ShopCategoryListing({ filtersOpen, onToggleFilters }: Props) {
  const { listing } = useShopCategory();
  const {
    products,
    allProducts,
    productCount,
    searchQuery,
    setSearchQuery,
    checked,
    clearAll,
  } = useShopListingState();
  const filterSelectionCount = Object.values(checked).filter(Boolean).length;
  const hasSearch = searchQuery.trim().length > 0;
  const hasFilters = filterSelectionCount > 0;
  const [sort, setSort] = useState(listing.sortOptions[0]);
  const searchId = useId();
  const sortGroupId = useId();

  const sortedProducts = useMemo(
    () => sortListingProducts(products, sort),
    [products, sort],
  );

  const isEmpty = sortedProducts.length === 0;
  const emptyCopy = listingEmptyState(
    hasSearch,
    hasFilters,
    allProducts.length > 0,
  );

  const resultLabel = isEmpty
    ? "No matches"
    : productCount === 1
      ? "1 product"
      : `${productCount} products`;

  const resetAll = () => {
    setSearchQuery("");
    clearAll();
  };

  return (
    <div className="shop-category-listing">
      <header className="shop-category-listing__head">
        <div className="shop-category-listing__head-row">
          <div className="shop-category-listing__search-wrap">
            <label className="shop-category-listing__search-label" htmlFor={searchId}>
              Search
            </label>
            <div className="shop-category-listing__search-field">
              <Search
                size={14}
                strokeWidth={1.25}
                className="shop-category-listing__search-icon"
                aria-hidden
              />
              <input
                id={searchId}
                type="search"
                inputMode="search"
                className="shop-category-listing__search"
                placeholder="Search by name or scent"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                autoComplete="off"
                enterKeyHint="search"
                spellCheck={false}
              />
            </div>
          </div>

          <button
            type="button"
            className={`shop-category-listing__filter-trigger${
              filtersOpen ? " shop-category-listing__filter-trigger--open" : ""
            }`}
            aria-expanded={filtersOpen}
            aria-controls="shop-category-filters"
            aria-label={
              filtersOpen
                ? "Close filters"
                : filterSelectionCount > 0
                  ? `Filters, ${filterSelectionCount} selected`
                  : "Filter products"
            }
            onClick={onToggleFilters}
          >
            {filtersOpen ? "Done" : "Filters"}
            {!filtersOpen && filterSelectionCount > 0 ? (
              <span className="shop-category-listing__filter-badge" aria-hidden>
                {filterSelectionCount}
              </span>
            ) : null}
          </button>
        </div>

        <div className="shop-category-listing__toolbar">
          <p className="shop-category-listing__result-count" aria-live="polite">
            {resultLabel}
          </p>

          {listing.sortOptions.length > 0 && !isEmpty ? (
            <div
              id={sortGroupId}
              className="shop-category-listing__sort-segment"
              role="group"
              aria-label="Sort by price"
            >
              {listing.sortOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`shop-category-listing__sort-chip${
                    sort === option ? " shop-category-listing__sort-chip--active" : ""
                  }`}
                  aria-pressed={sort === option}
                  onClick={() => setSort(option)}
                >
                  {shopSortChipLabel(option)}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </header>

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
