"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { shopCategory } from "@/data/shop-category";
import { ShopProductCard } from "@/components/shop/shop-product-card";

type Props = {
  filtersOpen: boolean;
  onToggleFilters: () => void;
};

export function ShopCategoryListing({ filtersOpen, onToggleFilters }: Props) {
  const { listing, products } = shopCategory;
  const [sort, setSort] = useState(listing.sortOptions[0]);
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="shop-category-listing">
      <header className="shop-category-listing__head">
        <div className="shop-category-listing__titles">
          <h2 className="shop-category-listing__title">{listing.title}</h2>
          <p className="shop-category-listing__count">
            {listing.productCount} products
          </p>
        </div>

        <div className="shop-category-listing__actions">
          <button
            type="button"
            className="shop-category-listing__filter"
            aria-expanded={filtersOpen}
            aria-controls="shop-category-filters"
            onClick={onToggleFilters}
          >
            <SlidersHorizontal size={14} strokeWidth={1.25} aria-hidden />
            <span>{filtersOpen ? "Hide filters" : "Filter"}</span>
          </button>

          <div className="shop-category-listing__sort-wrap">
          <button
            type="button"
            className="shop-category-listing__sort"
            aria-expanded={sortOpen}
            aria-haspopup="listbox"
            onClick={() => setSortOpen((open) => !open)}
          >
            <span>
              Sort by: <span className="shop-category-listing__sort-value">{sort}</span>
            </span>
            <ChevronDown size={14} strokeWidth={1.25} aria-hidden />
          </button>
          {sortOpen ? (
            <ul className="shop-category-listing__sort-menu" role="listbox">
              {listing.sortOptions.map((option) => (
                <li key={option} role="option" aria-selected={sort === option}>
                  <button
                    type="button"
                    className="shop-category-listing__sort-option"
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
