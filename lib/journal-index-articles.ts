import type { JournalIndexArticleCard } from "@/data/journal-index-articles";
import type {
  JournalCategoryId,
  JournalSortId,
  JournalTagId,
} from "@/data/journal-index";

export type JournalIndexArticleResolved = JournalIndexArticleCard;

export function filterAndSortJournalArticles(
  articles: JournalIndexArticleResolved[],
  category: JournalCategoryId,
  sort: JournalSortId,
  tag: JournalTagId | null,
): JournalIndexArticleResolved[] {
  let list = [...articles];

  if (category !== "all" && category !== "popular-questions") {
    list = list.filter((a) => a.categoryId === category);
  }

  if (tag) {
    list = list.filter((a) => a.tags.includes(tag));
  }

  switch (sort) {
    case "oldest":
      list.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
      break;
    case "newest":
    default:
      list.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0));
      break;
  }

  return list;
}

export function formatJournalArticleDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}
