"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { useShopCategory } from "@/components/shop/shop-category-context";
import { useShopListingState } from "@/components/shop/shop-category-listing-state";
import { ShopProductCard } from "@/components/shop/shop-product-card";

type Props = {
  filtersOpen: boolean;
  onToggleFilters: () => void;
};

export function ShopCategoryListing({ filtersOpen, onToggleFilters }: Props) {
  const { listing } = useShopCategory();
  const { products, productCount, searchQuery, setSearchQuery, checked } =
    useShopListingState();
  const filterSelectionCount = Object.values(checked).filter(Boolean).length;
  const [sort, setSort] = useState(listing.sortOptions[0]);
  const [sortOpen, setSortOpen] = useState(false);
  const sortWrapRef = useRef<HTMLDivElement>(null);
  const sortMenuId = useId();
  const searchId = useId();

  useEffect(() => {
    if (!sortOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!sortWrapRef.current?.contains(event.target as Node)) {
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [sortOpen]);

  const resultLabel =
    productCount === 1 ? "1 product" : `${productCount} products`;

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
                type="text"
                inputMode="search"
                className="shop-category-listing__search"
                placeholder="Search products"
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
            onClick={onToggleFilters}
          >
            {filtersOpen ? "Done" : "Filter"}
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

          <div className="shop-category-listing__actions">
            <div
              ref={sortWrapRef}
              className={`shop-category-listing__sort-wrap${
                sortOpen ? " shop-category-listing__sort-wrap--open" : ""
              }`}
            >
              <button
                type="button"
                className="shop-category-listing__sort"
                aria-expanded={sortOpen}
                aria-haspopup="listbox"
                aria-controls={sortMenuId}
                aria-label={`Sort products, currently ${sort}`}
                onClick={() => setSortOpen((open) => !open)}
              >
                <span className="shop-category-listing__sort-prefix">Sort by </span>
                <span className="shop-category-listing__sort-value">{sort}</span>
                <ChevronDown
                  size={14}
                  strokeWidth={1.25}
                  className="shop-category-listing__sort-chevron"
                  aria-hidden
                />
              </button>
              {sortOpen ? (
                <ul
                  id={sortMenuId}
                  className="shop-category-listing__sort-menu"
                  role="listbox"
                >
                  {listing.sortOptions.map((option) => (
                    <li key={option} role="option" aria-selected={sort === option}>
                      <button
                        type="button"
                        className={`shop-category-listing__sort-option${
                          sort === option ? " shop-category-listing__sort-option--active" : ""
                        }`}
                        onClick={() => {
                          setSort(option);
                          setSortOpen(false);
                        }}
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <ul className="shop-category-listing__grid">
        {products.map((item) => (
          <li key={item.slug} className="shop-category-listing__cell">
            <ShopProductCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
