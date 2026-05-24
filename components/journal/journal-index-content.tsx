"use client";

import { useMemo, useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
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

export function JournalIndexContent({ articles }: Props) {
  const [activeCategory, setActiveCategory] = useState<JournalCategoryId>("all");
  const [activeTag, setActiveTag] = useState<JournalTagId | null>(null);
  const [sort, setSort] = useState<JournalSortId>("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const visible = useMemo(
    () => filterAndSortJournalArticles(articles, activeCategory, sort, activeTag),
    [articles, activeCategory, sort, activeTag],
  );

  const isQuestionsOnly = activeCategory === "popular-questions";
  const sortLabel =
    journalIndexSortOptions.find((o) => o.id === sort)?.label ?? "Newest";

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
          onCategoryChange={(id) => {
            setActiveCategory(id);
            setFiltersOpen(false);
          }}
          onTagChange={(id) => {
            setActiveTag(id);
            setFiltersOpen(false);
          }}
        />

        <div className="journal-index-main">
          {isQuestionsOnly ? (
            <>
              <header className="journal-index-listing__head">
                <div className="journal-index-listing__titles">
                  <h2 className="journal-index-listing__title">Popular Questions</h2>
                </div>
              </header>
              <JournalIndexQuestions showHeader={false} />
            </>
          ) : (
            <>
              <header id="journal-articles" className="journal-index-listing__head">
                <div className="journal-index-listing__titles">
                  <h2 className="journal-index-listing__title">
                    {sectionHeading(activeCategory)}
                  </h2>
                  <p className="journal-index-listing__count">
                    {visible.length} articles
                  </p>
                </div>

                <div className="journal-index-listing__actions">
                  <button
                    type="button"
                    className="journal-index-listing__filter"
                    aria-expanded={filtersOpen}
                    aria-controls="journal-index-filters"
                    onClick={() => setFiltersOpen((open) => !open)}
                  >
                    <SlidersHorizontal size={14} strokeWidth={1.25} aria-hidden />
                    <span>{filtersOpen ? "Hide filters" : "Filter"}</span>
                  </button>

                  <div className="journal-index-listing__sort-wrap">
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
                            className="journal-index-listing__sort-option"
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
