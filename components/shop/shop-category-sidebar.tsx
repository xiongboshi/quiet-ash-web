"use client";

import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { shopCategory } from "@/data/shop-category";

type Props = {
  onFilterChange?: () => void;
};

export function ShopCategorySidebar({ onFilterChange }: Props) {
  const { breadcrumbs, filters } = shopCategory;
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      filters.groups.map((group) => [group.id, group.defaultOpen]),
    ),
  );
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleOption = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
    onFilterChange?.();
  };

  const clearAll = () => setChecked({});

  return (
    <aside
      id="shop-category-filters"
      className="shop-category-sidebar"
      aria-label="Product filters"
    >
      <nav className="shop-category-sidebar__breadcrumbs" aria-label="Breadcrumb">
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.label} className="shop-category-sidebar__crumb">
            {index > 0 ? (
              <span className="shop-category-sidebar__sep" aria-hidden>
                {" "}
                &gt;{" "}
              </span>
            ) : null}
            {index < breadcrumbs.length - 1 ? (
              <Link href={crumb.href} className="shop-category-sidebar__crumb-link">
                {crumb.label}
              </Link>
            ) : (
              <span className="shop-category-sidebar__crumb-current">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      <h2 className="shop-category-sidebar__heading">{filters.heading}</h2>

      <div className="shop-category-sidebar__groups">
        {filters.groups.map((group) => {
          const isOpen = openGroups[group.id] ?? false;
          const hasOptions = group.options.length > 0;

          return (
            <div key={group.id} className="shop-category-sidebar__group">
              <button
                type="button"
                className="shop-category-sidebar__group-toggle"
                aria-expanded={isOpen}
                onClick={() => toggleGroup(group.id)}
              >
                <span>{group.label}</span>
                {isOpen ? (
                  <Minus size={14} strokeWidth={1.25} aria-hidden />
                ) : (
                  <Plus size={14} strokeWidth={1.25} aria-hidden />
                )}
              </button>

              {isOpen && hasOptions ? (
                <ul className="shop-category-sidebar__options">
                  {group.options.map((option) => (
                    <li key={option.id} className="shop-category-sidebar__option">
                      <label className="shop-category-sidebar__label">
                        <input
                          type="checkbox"
                          className="shop-category-sidebar__checkbox"
                          checked={Boolean(checked[option.id])}
                          onChange={() => toggleOption(option.id)}
                        />
                        <span className="shop-category-sidebar__label-text">
                          {option.label}
                          <span className="shop-category-sidebar__count">
                            ({option.count})
                          </span>
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="shop-category-sidebar__clear"
        onClick={clearAll}
      >
        {filters.clearLabel}
      </button>
    </aside>
  );
}
