"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CatalogProduct } from "@/lib/catalog";
import { objectsArchiveShellClass } from "@/components/sections/objects-archive-shell";
import { ObjectsValueBar } from "@/components/sections/objects-value-bar";
import { ProductCard } from "@/components/ui/ProductCard";
import {
  OBJECT_ARCHIVE_FILTER_IDS,
  type ObjectArchiveFilterId,
  objectMatchesArchiveFilter,
  sortObjectArchiveProducts,
} from "@/data/objects-archive";

type SortId = "default" | "title-asc" | "title-desc";

const sortLabels: Record<SortId, string> = {
  default: "Default order",
  "title-asc": "Title A–Z",
  "title-desc": "Title Z–A",
};

/** Same cap as `/rituals` mobile row — ALL + active + fill; rest in More. */
const MOBILE_INLINE_FILTER_MAX = 3;

const filterBtnClass = (active: boolean) =>
  `shrink-0 border-b bg-transparent p-0 pb-1 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ease-out lg:text-[12px] lg:tracking-[0.14em] ${
    active
      ? "border-[#171412] text-[#171412]"
      : "border-transparent text-black/[0.55] hover:text-[#171412]"
  }`;

function mobileFilterSplit(active: ObjectArchiveFilterId) {
  const inline: ObjectArchiveFilterId[] = [];
  const add = (id: ObjectArchiveFilterId) => {
    if (!inline.includes(id)) inline.push(id);
  };
  add("ALL");
  add(active);
  for (const id of OBJECT_ARCHIVE_FILTER_IDS) {
    if (inline.length >= MOBILE_INLINE_FILTER_MAX) break;
    add(id);
  }
  const overflow = OBJECT_ARCHIVE_FILTER_IDS.filter(
    (id) => !inline.includes(id),
  );
  return { inline, overflow };
}

type Props = {
  products: CatalogProduct[];
};

export function ObjectsArchiveBlock({ products }: Props) {
  const [filter, setFilter] = useState<ObjectArchiveFilterId>("ALL");
  const [sort, setSort] = useState<SortId>("default");
  const [moreOpen, setMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!moreOpen) return;
    const close = (event: PointerEvent) => {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target as Node)
      ) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [moreOpen]);

  const items = useMemo(() => {
    const rows = products.filter((p) => objectMatchesArchiveFilter(p, filter));
    return sortObjectArchiveProducts(rows, sort);
  }, [products, filter, sort]);

  const { inline: mobileInline, overflow: mobileOverflow } =
    mobileFilterSplit(filter);
  const moreFilterActive = mobileOverflow.includes(filter);

  return (
    <div className="bg-[#f5f2ed]">
      <section aria-label="Object archive filters">
        <div className={objectsArchiveShellClass}>
          <div className="flex flex-nowrap items-center justify-between gap-3 py-5 lg:flex-wrap lg:gap-y-2 lg:py-6">
            <nav
              className="flex min-w-0 flex-1 flex-nowrap items-center gap-x-4 lg:hidden"
              aria-label="Filter by category"
            >
              {mobileInline.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setFilter(id);
                    setMoreOpen(false);
                  }}
                  className={filterBtnClass(filter === id)}
                >
                  {id}
                </button>
              ))}
              {mobileOverflow.length > 0 ? (
                <div ref={moreMenuRef} className="relative shrink-0">
                  <button
                    type="button"
                    aria-expanded={moreOpen}
                    aria-haspopup="listbox"
                    onClick={() => setMoreOpen((open) => !open)}
                    className={`flex items-center gap-1 ${filterBtnClass(moreFilterActive)}`}
                  >
                    {moreFilterActive ? filter : "More"}
                    <span
                      className="translate-y-px text-[10px] opacity-80"
                      aria-hidden
                    >
                      ∨
                    </span>
                  </button>
                  {moreOpen ? (
                    <ul
                      role="listbox"
                      className="absolute left-0 top-full z-40 mt-2 min-w-[9.5rem] border border-black/[0.08] bg-[#f5f2ed] py-2 shadow-[0_12px_40px_-20px_rgba(28,20,16,0.18)]"
                    >
                      {mobileOverflow.map((id) => (
                        <li key={id} role="option" aria-selected={filter === id}>
                          <button
                            type="button"
                            aria-current={filter === id ? "true" : undefined}
                            className="w-full px-4 py-2 text-left font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.14em] text-black/[0.62] transition-colors hover:bg-black/[0.04] aria-[current=true]:bg-black/[0.06]"
                            onClick={() => {
                              setFilter(id);
                              setMoreOpen(false);
                            }}
                          >
                            {id}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : null}
            </nav>

            <nav
              className="hidden min-w-0 flex-wrap items-center gap-x-6 gap-y-2 lg:flex lg:flex-1 lg:gap-x-7 xl:gap-x-8"
              aria-label="Filter by category"
            >
              {OBJECT_ARCHIVE_FILTER_IDS.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setFilter(id)}
                  className={filterBtnClass(filter === id)}
                >
                  {id}
                </button>
              ))}
            </nav>

            <details className="group relative shrink-0 lg:ml-auto">
              <summary className="flex cursor-pointer list-none items-center gap-2 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.14em] text-black/[0.55] transition-colors duration-200 ease-out hover:text-[#171412] lg:text-[12px] [&::-webkit-details-marker]:hidden">
                Sort
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  aria-hidden
                >
                  <path d="M2.5 4 5 6.5 7.5 4" />
                </svg>
              </summary>
              <ul className="absolute right-0 z-30 mt-2 min-w-[11rem] border border-black/[0.08] bg-[#f5f2ed] py-2 shadow-[0_12px_40px_-20px_rgba(28,20,16,0.18)]">
                {(Object.keys(sortLabels) as SortId[]).map((id) => (
                  <li key={id}>
                    <button
                      type="button"
                      aria-current={sort === id ? "true" : undefined}
                      className="w-full px-4 py-2 text-left font-[family-name:var(--font-sans)] text-[12px] font-normal tracking-[0.02em] text-black/[0.62] transition-colors hover:bg-black/[0.04] aria-[current=true]:bg-black/[0.06]"
                      onClick={() => {
                        setSort(id);
                        const root = document.activeElement?.closest("details");
                        if (root instanceof HTMLDetailsElement) root.open = false;
                      }}
                    >
                      {sortLabels[id]}
                    </button>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </section>

      <div className={`pb-16 pt-10 sm:pt-12 lg:pb-20 ${objectsArchiveShellClass}`}>
        {items.length === 0 ? (
          <p className="m-0 max-w-[42ch] font-[family-name:var(--font-sans)] text-[15px] font-normal leading-relaxed text-black/[0.58]">
            No objects match this filter.
          </p>
        ) : (
          <section aria-label="Objects">
            <ul className="m-0 grid list-none grid-cols-1 gap-x-8 gap-y-12 p-0 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-16">
              {items.map((p) => (
                <li key={p.slug} className="min-w-0">
                  <ProductCard
                    product={p}
                    presentation="archival"
                    objectsCatalogGrid
                  />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <ObjectsValueBar />
    </div>
  );
}
