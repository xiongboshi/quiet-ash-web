import {
  journalIndexCategories,
  journalIndexTags,
  type JournalCategoryId,
  type JournalTagId,
} from "@/data/journal-index";

const CATEGORY_IDS = new Set(
  journalIndexCategories.map((category) => category.id),
);

const TAG_IDS = new Set(journalIndexTags.map((tag) => tag.id));

export function parseJournalCategoryParam(
  value: string | null | undefined,
): JournalCategoryId {
  if (value && CATEGORY_IDS.has(value as JournalCategoryId)) {
    return value as JournalCategoryId;
  }
  return "all";
}

export function parseJournalTagParam(
  value: string | null | undefined,
): JournalTagId | null {
  if (value && TAG_IDS.has(value as JournalTagId)) {
    return value as JournalTagId;
  }
  return null;
}

export function journalIndexSearchParams(
  category: JournalCategoryId,
  tag: JournalTagId | null,
): string {
  const params = new URLSearchParams();
  if (category !== "all") params.set("category", category);
  if (tag) params.set("tag", tag);
  const query = params.toString();
  return query ? `?${query}` : "";
}
