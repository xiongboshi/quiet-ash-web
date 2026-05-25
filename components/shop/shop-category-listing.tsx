"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useShopCategory } from "@/components/shop/shop-category-context";
import { ShopProductCard } from "@/components/shop/shop-product-card";

type Props = {
  filtersOpen: boolean;
  filterSelectionCount?: number;
  onToggleFilters: () => void;
};

export function ShopCategoryListing({
  filtersOpen,
  filterSelectionCount = 0,
  onToggleFilters,
}: Props) {
  const { listing, products } = useShopCategory();
  const [sort, setSort] = useState(listing.sortOptions[0]);
  const [sortOpen, setSortOpen] = useState(false);
  const sortWrapRef = useRef<HTMLDivElement>(null);
  const sortMenuId = useId();

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

  return (
    <div className="shop-category-listing">
      <header className="shop-category-listing__head">
        <div className="shop-category-listing__head-row">
          <div className="shop-category-listing__titles">
            <h2 className="shop-category-listing__title">{listing.title}</h2>
            <p className="shop-category-listing__count">
              {listing.productCount} products
            </p>
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
      </header>

      <ul className="shop-category-listing__grid">
        {products.map((item) => (
          <li key={item.title} className="shop-category-listing__cell">
            <ShopProductCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
