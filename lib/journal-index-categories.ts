import {
  journalIndexCategoryDefinitions,
  journalPopularQuestions,
  type JournalCategoryId,
} from "@/data/journal-index";
import type { JournalIndexArticleCard } from "@/data/journal-index-articles";

export type JournalIndexCategoryRow = {
  id: JournalCategoryId;
  label: string;
  count: number;
};

/** Sidebar category counts from live index cards (not static TS). */
export function resolveJournalIndexCategories(
  articles: readonly JournalIndexArticleCard[],
): JournalIndexCategoryRow[] {
  const byCategory = new Map<string, number>();
  for (const article of articles) {
    byCategory.set(
      article.categoryId,
      (byCategory.get(article.categoryId) ?? 0) + 1,
    );
  }

  return [
    { id: "all", label: "All Articles", count: articles.length },
    ...journalIndexCategoryDefinitions.map((row) => ({
      id: row.id,
      label: row.label,
      count: byCategory.get(row.id) ?? 0,
    })),
    {
      id: "popular-questions",
      label: "Popular Questions",
      count: journalPopularQuestions.length,
    },
  ];
}
