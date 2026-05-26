"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { JournalIndexCategoryIcon } from "@/components/journal/journal-index-category-icon";
import {
  journalIndexBreadcrumb,
  journalIndexTags,
  type JournalCategoryId,
  type JournalTagId,
} from "@/data/journal-index";
import type { JournalIndexCategoryRow } from "@/lib/journal-index-categories";

type Props = {
  categories: readonly JournalIndexCategoryRow[];
  activeCategory: JournalCategoryId;
  activeTag: JournalTagId | null;
  filtersOpen?: boolean;
  onCategoryChange: (id: JournalCategoryId) => void;
  onTagChange: (id: JournalTagId | null) => void;
  /** Mobile drawer — apply category + tag together (avoids stale closure on first tap). */
  onApplyFilters: (category: JournalCategoryId, tag: JournalTagId | null) => void;
  onClose?: () => void;
  onSelectionCountChange?: (count: number) => void;
};

type MobileTab = "categories" | "tags";

export function JournalIndexSidebar({
  categories,
  activeCategory,
  activeTag,
  filtersOpen = false,
  onCategoryChange,
  onTagChange,
  onApplyFilters,
  onClose,
  onSelectionCountChange,
}: Props) {
  const [mobileTab, setMobileTab] = useState<MobileTab>("categories");
  const [draftCategory, setDraftCategory] = useState<JournalCategoryId>(activeCategory);
  const [draftTag, setDraftTag] = useState<JournalTagId | null>(activeTag);
  const filtersWereOpen = useRef(false);

  useEffect(() => {
    if (filtersOpen && !filtersWereOpen.current) {
      setDraftCategory(activeCategory);
      setDraftTag(activeTag);
    }
    filtersWereOpen.current = filtersOpen;
  }, [filtersOpen, activeCategory, activeTag]);

  const draftSelectionCount = useMemo(() => {
    let count = 0;
    if (draftCategory !== "all") count += 1;
    if (draftTag) count += 1;
    return count;
  }, [draftCategory, draftTag]);

  useEffect(() => {
    if (!filtersOpen) {
      onSelectionCountChange?.(
        (activeCategory !== "all" ? 1 : 0) + (activeTag ? 1 : 0),
      );
      return;
    }
    onSelectionCountChange?.(draftSelectionCount);
  }, [
    filtersOpen,
    draftSelectionCount,
    activeCategory,
    activeTag,
    onSelectionCountChange,
  ]);

  const applyFilters = () => {
    onApplyFilters(draftCategory, draftTag);
    onClose?.();
  };

  const clearAll = () => {
    setDraftCategory("all");
    setDraftTag(null);
  };

  const selectCategory = (id: JournalCategoryId) => {
    setDraftCategory(id);
    if (id === "popular-questions") setDraftTag(null);
  };

  const toggleTag = (id: JournalTagId) => {
    setDraftTag((current) => (current === id ? null : id));
  };

  const categoriesDot = draftCategory !== "all";
  const tagsDot = Boolean(draftTag);

  return (
    <>
      {filtersOpen ? (
        <button
          type="button"
          className="journal-index-filters-backdrop"
          aria-label="Close filters"
          onClick={onClose}
        />
      ) : null}

      <aside
        id="journal-index-filters"
        className={`journal-index-sidebar${
          filtersOpen ? " journal-index-sidebar--drawer-open" : ""
        }`}
        aria-label="Journal filters"
      >
        <div className="journal-index-sidebar__drawer-head">
          <div className="journal-index-sidebar__handle" aria-hidden />
          <h2 className="journal-index-sidebar__drawer-title">Refine</h2>
          <button
            type="button"
            className="journal-index-sidebar__drawer-done"
            onClick={onClose}
          >
            Done
          </button>
        </div>

        <div className="journal-index-sidebar__sheet-scroll">
          <nav
            className="journal-index-sidebar__breadcrumbs journal-index-sidebar__breadcrumbs--desktop"
            aria-label="Breadcrumb"
          >
            {journalIndexBreadcrumb.map((crumb, index) => (
              <span key={crumb.href} className="journal-index-sidebar__crumb">
                {index > 0 ? (
                  <span className="journal-index-sidebar__crumb-sep" aria-hidden>
                    {" "}
                    &gt;{" "}
                  </span>
                ) : null}
                {index < journalIndexBreadcrumb.length - 1 ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <div className="journal-index-sidebar__block journal-index-sidebar__block--desktop">
            <h2 className="journal-index-sidebar__heading">BROWSE CATEGORIES</h2>
            <ul className="journal-index-sidebar__categories">
              {categories.map((category) => {
                const active = activeCategory === category.id;
                return (
                  <li key={category.id}>
                    <button
                      type="button"
                      className={`journal-index-sidebar__category${
                        active ? " journal-index-sidebar__category--active" : ""
                      }`}
                      aria-current={active ? "true" : undefined}
                      onClick={() => {
                        onTagChange(null);
                        onCategoryChange(category.id);
                      }}
                    >
                      <JournalIndexCategoryIcon categoryId={category.id} />
                      <span className="journal-index-sidebar__category-label">
                        {category.label}
                      </span>
                      <span className="journal-index-sidebar__category-count">
                        {category.count}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="journal-index-sidebar__divider journal-index-sidebar__divider--desktop" aria-hidden />

          <div className="journal-index-sidebar__block journal-index-sidebar__block--desktop">
            <h2 className="journal-index-sidebar__heading">POPULAR TAGS</h2>
            <ul className="journal-index-sidebar__tags">
              {journalIndexTags.map((tag) => {
                const active = activeTag === tag.id;
                return (
                  <li key={tag.id}>
                    <button
                      type="button"
                      className={`journal-index-sidebar__tag${
                        active ? " journal-index-sidebar__tag--active" : ""
                      }`}
                      aria-pressed={active}
                      onClick={() => onTagChange(active ? null : tag.id)}
                    >
                      {tag.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="journal-index-sidebar__mobile-filters">
            <div className="journal-index-sidebar__tabs" role="tablist" aria-label="Filter groups">
              <button
                type="button"
                role="tab"
                id="journal-filter-tab-categories"
                aria-selected={mobileTab === "categories"}
                aria-controls="journal-filter-panel-categories"
                className={`journal-index-sidebar__tab${
                  mobileTab === "categories" ? " journal-index-sidebar__tab--active" : ""
                }`}
                onClick={() => setMobileTab("categories")}
              >
                Topics
                {categoriesDot ? (
                  <span className="journal-index-sidebar__tab-dot" aria-hidden />
                ) : null}
              </button>
              <button
                type="button"
                role="tab"
                id="journal-filter-tab-tags"
                aria-selected={mobileTab === "tags"}
                aria-controls="journal-filter-panel-tags"
                className={`journal-index-sidebar__tab${
                  mobileTab === "tags" ? " journal-index-sidebar__tab--active" : ""
                }`}
                onClick={() => setMobileTab("tags")}
              >
                Tags
                {tagsDot ? <span className="journal-index-sidebar__tab-dot" aria-hidden /> : null}
              </button>
            </div>

            <section
              id="journal-filter-panel-categories"
              role="tabpanel"
              aria-labelledby="journal-filter-tab-categories"
              hidden={mobileTab !== "categories"}
              className="journal-index-sidebar__tab-panel"
            >
              <ul className="journal-index-sidebar__option-list">
                {categories.map((category) => {
                  const active = draftCategory === category.id;
                  return (
                    <li key={category.id}>
                      <button
                        type="button"
                        className={`journal-index-sidebar__option-chip${
                          active ? " journal-index-sidebar__option-chip--active" : ""
                        }`}
                        aria-pressed={active}
                        onClick={() => selectCategory(category.id)}
                      >
                        <span className="journal-index-sidebar__option-chip-label">
                          {category.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section
              id="journal-filter-panel-tags"
              role="tabpanel"
              aria-labelledby="journal-filter-tab-tags"
              hidden={mobileTab !== "tags"}
              className="journal-index-sidebar__tab-panel"
            >
              <ul className="journal-index-sidebar__option-list">
                {journalIndexTags.map((tag) => {
                  const active = draftTag === tag.id;
                  return (
                    <li key={tag.id}>
                      <button
                        type="button"
                        className={`journal-index-sidebar__option-chip${
                          active ? " journal-index-sidebar__option-chip--active" : ""
                        }`}
                        aria-pressed={active}
                        onClick={() => toggleTag(tag.id)}
                      >
                        <span className="journal-index-sidebar__option-chip-label">
                          {tag.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>

        <div className="journal-index-sidebar__sheet-foot">
          {draftSelectionCount > 0 ? (
            <button
              type="button"
              className="journal-index-sidebar__foot-clear"
              onClick={clearAll}
            >
              Clear all
            </button>
          ) : null}
          <button
            type="button"
            className="journal-index-sidebar__foot-apply"
            onClick={applyFilters}
          >
            {draftSelectionCount > 0
              ? `View ${draftSelectionCount} filter${draftSelectionCount === 1 ? "" : "s"}`
              : "View all"}
          </button>
        </div>
      </aside>
    </>
  );
}
