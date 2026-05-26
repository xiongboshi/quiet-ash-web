"use client";

import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { useShopCategory } from "@/components/shop/shop-category-context";
import { useShopListingState } from "@/components/shop/shop-category-listing-state";
import { shopFilterTabLabel } from "@/lib/shop-catalog";
import type { ShopFilterGroup } from "@/data/shop-catalog-types";

type Props = {
  filtersOpen?: boolean;
  onClose?: () => void;
};

function countGroupSelection(group: ShopFilterGroup, checked: Record<string, boolean>) {
  return group.options.filter((option) => checked[option.id]).length;
}

export function ShopCategorySidebar({
  filtersOpen = false,
  onClose,
}: Props) {
  const { breadcrumbs } = useShopCategory();
  const { filters, checked, toggleOption, clearAll } = useShopListingState();
  const filterGroups = filters.groups;

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      filterGroups.map((group) => [group.id, group.defaultOpen ?? false]),
    ),
  );
  const [mobileTab, setMobileTab] = useState(filterGroups[0]?.id ?? "");

  const selectedCount = useMemo(
    () => Object.values(checked).filter(Boolean).length,
    [checked],
  );

  const tabCount = filterGroups.length;
  const tabsScroll = tabCount > 3;
  const activeGroup = filterGroups.find((group) => group.id === mobileTab);

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {filtersOpen ? (
        <button
          type="button"
          className="shop-category-filters-backdrop"
          aria-label="Close filters"
          onClick={onClose}
        />
      ) : null}

      <aside
        id="shop-category-filters"
        className={`shop-category-sidebar${
          filtersOpen ? " shop-category-sidebar--drawer-open" : ""
        }`}
        aria-label="Product filters"
      >
        <div className="shop-category-sidebar__drawer-head">
          <div className="shop-category-sidebar__handle" aria-hidden />
          <h2 className="shop-category-sidebar__drawer-title">Refine</h2>
          <button
            type="button"
            className="shop-category-sidebar__drawer-done"
            onClick={onClose}
          >
            Done
          </button>
        </div>

        <div className="shop-category-sidebar__sheet-scroll">
          <nav
            className="shop-category-sidebar__breadcrumbs shop-category-sidebar__breadcrumbs--desktop"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, index) => (
              <span key={`${crumb.href}-${crumb.label}`} className="shop-category-sidebar__crumb">
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

          <h2 className="shop-category-sidebar__heading shop-category-sidebar__heading--desktop">
            {filters.heading}
          </h2>

          <div className="shop-category-sidebar__groups">
            {filterGroups.map((group) => {
              const isOpen = openGroups[group.id] ?? false;
              const hasOptions = group.options.length > 0;

              return (
                <div key={group.id} className="shop-category-sidebar__group">
                  <div className="shop-category-sidebar__group-desktop">
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
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          {filterGroups.length > 0 ? (
            <div className="shop-category-sidebar__mobile-filters">
              <div
                className={`shop-category-sidebar__tabs${
                  tabsScroll ? " shop-category-sidebar__tabs--scroll" : ""
                }`}
                role="tablist"
                aria-label="Filter categories"
              >
                {filterGroups.map((group) => {
                  const active = mobileTab === group.id;
                  const tabSelected = countGroupSelection(group, checked);
                  return (
                    <button
                      key={group.id}
                      type="button"
                      role="tab"
                      id={`shop-filter-tab-${group.id}`}
                      aria-selected={active}
                      aria-controls={`shop-filter-panel-${group.id}`}
                      className={`shop-category-sidebar__tab${
                        active ? " shop-category-sidebar__tab--active" : ""
                      }`}
                      onClick={() => setMobileTab(group.id)}
                    >
                      {shopFilterTabLabel(group)}
                      {tabSelected > 0 ? (
                        <span className="shop-category-sidebar__tab-dot" aria-hidden />
                      ) : null}
                    </button>
                  );
                })}
              </div>

              {activeGroup ? (
                <section
                  id={`shop-filter-panel-${activeGroup.id}`}
                  role="tabpanel"
                  aria-labelledby={`shop-filter-tab-${activeGroup.id}`}
                  className="shop-category-sidebar__tab-panel"
                >
                  <ul
                    className="shop-category-sidebar__option-list"
                    data-columns={activeGroup.mobileColumns ?? 2}
                  >
                    {activeGroup.options.map((option) => {
                      const isChecked = Boolean(checked[option.id]);
                      return (
                        <li key={option.id}>
                          <button
                            type="button"
                            className={`shop-category-sidebar__option-row${
                              isChecked ? " shop-category-sidebar__option-row--active" : ""
                            }`}
                            aria-pressed={isChecked}
                            onClick={() => toggleOption(option.id)}
                          >
                            <span className="shop-category-sidebar__option-row-label">
                              {option.label}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ) : null}
            </div>
          ) : null}

          <button
            type="button"
            className="shop-category-sidebar__clear shop-category-sidebar__clear--desktop"
            onClick={clearAll}
          >
            {filters.clearLabel}
          </button>
        </div>

        <div className="shop-category-sidebar__sheet-foot">
          {selectedCount > 0 ? (
            <button
              type="button"
              className="shop-category-sidebar__foot-clear"
              onClick={clearAll}
            >
              {filters.clearLabel}
            </button>
          ) : null}
          <button
            type="button"
            className="shop-category-sidebar__foot-apply"
            onClick={onClose}
          >
            {selectedCount > 0
              ? `View ${selectedCount} filter${selectedCount === 1 ? "" : "s"}`
              : "View all"}
          </button>
        </div>
      </aside>
    </>
  );
}
