"use client";

import Link from "next/link";
import { JournalIndexCategoryIcon } from "@/components/journal/journal-index-category-icon";
import {
  journalIndexBreadcrumb,
  journalIndexCategories,
  journalIndexTags,
  type JournalCategoryId,
  type JournalTagId,
} from "@/data/journal-index";

type Props = {
  activeCategory: JournalCategoryId;
  activeTag: JournalTagId | null;
  onCategoryChange: (id: JournalCategoryId) => void;
  onTagChange: (id: JournalTagId | null) => void;
};

export function JournalIndexSidebar({
  activeCategory,
  activeTag,
  onCategoryChange,
  onTagChange,
}: Props) {
  return (
    <aside
      id="journal-index-filters"
      className="journal-index-sidebar"
      aria-label="Journal filters"
    >
      <nav className="journal-index-sidebar__breadcrumbs" aria-label="Breadcrumb">
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

      <div className="journal-index-sidebar__block">
        <h2 className="journal-index-sidebar__heading">BROWSE CATEGORIES</h2>
        <ul className="journal-index-sidebar__categories">
          {journalIndexCategories.map((category) => {
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

      <div className="journal-index-sidebar__divider" aria-hidden />

      <div className="journal-index-sidebar__block">
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
                  onClick={() =>
                    onTagChange(active ? null : tag.id)
                  }
                >
                  {tag.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
