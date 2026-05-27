import {
  journalIndexCategoryDefinitions,
  journalIndexTags,
  type JournalCategoryId,
  type JournalTagId,
} from "@/data/journal-index";
import { normalizeJournalTopicCategoryId } from "@/data/journal-topic-hubs";

const CATEGORY_IDS = new Set<JournalCategoryId>([
  "all",
  ...journalIndexCategoryDefinitions.map((c) => c.id),
  "popular-questions",
]);

const TAG_IDS = new Set(journalIndexTags.map((tag) => tag.id));

export function parseJournalCategoryParam(
  value: string | null | undefined,
): JournalCategoryId {
  const normalized = normalizeJournalTopicCategoryId(value ?? undefined);
  if (normalized && CATEGORY_IDS.has(normalized)) {
    return normalized;
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
