"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { JournalIndexArticleCard } from "@/components/journal/journal-index-article-card";
import { JournalIndexQuestions } from "@/components/journal/journal-index-questions";
import { JournalIndexSidebar } from "@/components/journal/journal-index-sidebar";
import {
  journalIndexCategories,
  journalIndexSortOptions,
  type JournalCategoryId,
  type JournalSortId,
  type JournalTagId,
} from "@/data/journal-index";
import { filterAndSortJournalArticles } from "@/lib/journal-index-articles";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";
import {
  journalIndexSearchParams,
  parseJournalCategoryParam,
  parseJournalTagParam,
} from "@/lib/journal-index-url";
import { JOURNAL_INDEX } from "@/lib/site-paths";

type Props = {
  articles: JournalIndexArticleResolved[];
};

function sectionHeading(category: JournalCategoryId): string {
  if (category === "popular-questions") return "Popular Questions";
  if (category === "all") return "All Articles";
  return (
    journalIndexCategories.find((c) => c.id === category)?.label ?? "Articles"
  );
}

function filtersFromSearchParams(searchParams: URLSearchParams) {
  const category = parseJournalCategoryParam(searchParams.get("category"));
  const tag =
    category === "popular-questions"
      ? null
      : parseJournalTagParam(searchParams.get("tag"));
  return { category, tag };
}

export function JournalIndexContent({ articles }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<JournalCategoryId>(
    () => filtersFromSearchParams(searchParams).category,
  );
  const [activeTag, setActiveTag] = useState<JournalTagId | null>(
    () => filtersFromSearchParams(searchParams).tag,
  );
  const [sort, setSort] = useState<JournalSortId>("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filterSelectionCount, setFilterSelectionCount] = useState(0);
  const sortWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { category, tag } = filtersFromSearchParams(searchParams);
    setActiveCategory(category);
    setActiveTag(tag);
  }, [searchParams]);

  const syncFiltersToUrl = (
    category: JournalCategoryId,
    tag: JournalTagId | null,
  ) => {
    const nextTag = category === "popular-questions" ? null : tag;
    const query = journalIndexSearchParams(category, nextTag);
    router.replace(`${JOURNAL_INDEX}${query}`, { scroll: false });
  };

  const handleCategoryChange = (category: JournalCategoryId) => {
    const nextTag = category === "popular-questions" ? null : activeTag;
    setActiveCategory(category);
    setActiveTag(nextTag);
    syncFiltersToUrl(category, nextTag);
  };

  const handleTagChange = (tag: JournalTagId | null) => {
    setActiveTag(tag);
    syncFiltersToUrl(activeCategory, tag);
  };

  const visible = useMemo(
    () => filterAndSortJournalArticles(articles, activeCategory, sort, activeTag),
    [articles, activeCategory, sort, activeTag],
  );

  const isQuestionsOnly = activeCategory === "popular-questions";
  const sortLabel =
    journalIndexSortOptions.find((o) => o.id === sort)?.label ?? "Newest";

  useEffect(() => {
    if (!filtersOpen) return;
    const mq = window.matchMedia("(max-width: 1023px)");
    if (!mq.matches) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [filtersOpen]);

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

  const closeFilters = () => setFiltersOpen(false);

  return (
    <div className="journal-index-body">
      <div
        className={`journal-index-body__shell${
          filtersOpen ? " journal-index-body__shell--filters-open" : ""
        }`}
      >
        <JournalIndexSidebar
          activeCategory={activeCategory}
          activeTag={activeTag}
          filtersOpen={filtersOpen}
          onCategoryChange={handleCategoryChange}
          onTagChange={handleTagChange}
          onClose={closeFilters}
          onSelectionCountChange={setFilterSelectionCount}
        />

        <div className="journal-index-main">
          {isQuestionsOnly ? (
            <>
              <header className="journal-index-listing__head">
                <div className="journal-index-listing__head-row">
                  <div className="journal-index-listing__titles">
                    <h2 className="journal-index-listing__title">Popular Questions</h2>
                  </div>
                  <button
                    type="button"
                    className={`journal-index-listing__filter-trigger${
                      filtersOpen ? " journal-index-listing__filter-trigger--open" : ""
                    }`}
                    aria-expanded={filtersOpen}
                    aria-controls="journal-index-filters"
                    onClick={() => setFiltersOpen((open) => !open)}
                  >
                    {filtersOpen ? "Done" : "Filter"}
                    {!filtersOpen && filterSelectionCount > 0 ? (
                      <span className="journal-index-listing__filter-badge" aria-hidden>
                        {filterSelectionCount}
                      </span>
                    ) : null}
                  </button>
                </div>
              </header>
              <JournalIndexQuestions showHeader={false} />
            </>
          ) : (
            <>
              <header id="journal-articles" className="journal-index-listing__head">
                <div className="journal-index-listing__head-row">
                  <div className="journal-index-listing__titles">
                    <h2 className="journal-index-listing__title">
                      {sectionHeading(activeCategory)}
                    </h2>
                    <p className="journal-index-listing__count">
                      {visible.length} articles
                    </p>
                  </div>

                  <button
                    type="button"
                    className={`journal-index-listing__filter-trigger${
                      filtersOpen ? " journal-index-listing__filter-trigger--open" : ""
                    }`}
                    aria-expanded={filtersOpen}
                    aria-controls="journal-index-filters"
                    onClick={() => setFiltersOpen((open) => !open)}
                  >
                    {filtersOpen ? "Done" : "Filter"}
                    {!filtersOpen && filterSelectionCount > 0 ? (
                      <span className="journal-index-listing__filter-badge" aria-hidden>
                        {filterSelectionCount}
                      </span>
                    ) : null}
                  </button>
                </div>

                <div className="journal-index-listing__actions">
                  <div
                    ref={sortWrapRef}
                    className={`journal-index-listing__sort-wrap${
                      sortOpen ? " journal-index-listing__sort-wrap--open" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="journal-index-listing__sort"
                      aria-expanded={sortOpen}
                      aria-haspopup="listbox"
                      onClick={() => setSortOpen((open) => !open)}
                    >
                      <span>
                        Sort by:{" "}
                        <span className="journal-index-listing__sort-value">
                          {sortLabel}
                        </span>
                      </span>
                      <ChevronDown size={14} strokeWidth={1.25} aria-hidden />
                    </button>
                    {sortOpen ? (
                      <ul className="journal-index-listing__sort-menu" role="listbox">
                        {journalIndexSortOptions.map((option) => (
                          <li
                            key={option.id}
                            role="option"
                            aria-selected={sort === option.id}
                          >
                            <button
                              type="button"
                              className={`journal-index-listing__sort-option${
                                sort === option.id
                                  ? " journal-index-listing__sort-option--active"
                                  : ""
                              }`}
                              onClick={() => {
                                setSort(option.id);
                                setSortOpen(false);
                              }}
                            >
                              {option.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </header>

              <ul className="journal-index-main__grid">
                {visible.map((article) => (
                  <li key={article.slug}>
                    <JournalIndexArticleCard article={article} />
                  </li>
                ))}
              </ul>

              <JournalIndexQuestions />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
