"use client";

import Link from "next/link";
import type { ShopCategoryDefinition } from "@/data/shop-catalog-types";

type Crumb = ShopCategoryDefinition["breadcrumbs"][number];

type Props = {
  breadcrumbs: readonly Crumb[];
  filtersOpen: boolean;
  filterCount: number;
  onToggleFilters: () => void;
};

function ListingFilterIcon() {
  return (
    <svg
      width={23}
      height={23}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shop-category-listing-bar__filter-svg"
    >
      <path
        d="M10 5H3M12 19H3M14 3v4M16 17v4M21 12h-9M21 19h-5M21 5h-7M8 10v4M8 12H3"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** PLP top bar — breadcrumb path (left) + filter icon (right), no background. */
export function ShopCategoryListingBar({
  breadcrumbs,
  filtersOpen,
  filterCount,
  onToggleFilters,
}: Props) {
  return (
    <header className="shop-category-listing-bar">
      <nav className="shop-category-listing-bar__crumbs" aria-label="Breadcrumb">
        {breadcrumbs.map((crumb, index) => (
          <span key={`${crumb.href}-${crumb.label}`} className="shop-category-listing-bar__crumb">
            {index > 0 ? (
              <span className="shop-category-listing-bar__sep" aria-hidden>
                {" / "}
              </span>
            ) : null}
            {index < breadcrumbs.length - 1 ? (
              <Link href={crumb.href} className="shop-category-listing-bar__link">
                {crumb.label}
              </Link>
            ) : (
              <span className="shop-category-listing-bar__current">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      <button
        type="button"
        className={`shop-category-listing-bar__filter${
          filtersOpen ? " shop-category-listing-bar__filter--open" : ""
        }`}
        aria-expanded={filtersOpen}
        aria-controls="shop-category-filters"
        aria-label={
          filtersOpen
            ? "Close filters"
            : filterCount > 0
              ? `Filters, ${filterCount} selected`
              : "Filter products"
        }
        onClick={onToggleFilters}
      >
        <ListingFilterIcon />
        {!filtersOpen && filterCount > 0 ? (
          <span className="shop-category-listing-bar__filter-count" aria-hidden>
            {filterCount}
          </span>
        ) : null}
      </button>
    </header>
  );
}
