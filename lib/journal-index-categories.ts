import {
  journalIndexCategoryDefinitions,
  journalPopularQuestions,
  type JournalCategoryId,
} from "@/data/journal-index";
import type { JournalIndexArticleCard } from "@/data/journal-index-articles";
import { isJournalGuideArticle } from "@/data/journal-guide-slugs";
import { isJournalTopicHubId } from "@/data/journal-topic-hubs";

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
    if (isJournalTopicHubId(article.categoryId) && !isJournalGuideArticle(article.slug)) {
      continue;
    }
    byCategory.set(
      article.categoryId,
      (byCategory.get(article.categoryId) ?? 0) + 1,
    );
  }

  const qaArticleCount = articles.filter((article) =>
    isJournalGuideArticle(article.slug),
  ).length;

  return [
    { id: "all", label: "All Articles", count: qaArticleCount },
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
