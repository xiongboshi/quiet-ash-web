import { BETTER_SLEEP_ARTICLE_SLUGS } from "@/data/journal-sleep-hub";

/** Non–Better-Sleep hand-authored Q&A guides. */
const OTHER_JOURNAL_QA_GUIDE_SLUGS = [
  "is-incense-safe-for-pets",
  "best-incense-for-small-apartments",
  "incense-after-work",
  "tea-and-incense-rituals",
] as const;

/** Hand-authored Q&A guide articles (`data/journal-articles/*.ts`) — client-safe slug list. */
export const JOURNAL_QA_GUIDE_ARTICLE_SLUGS = [
  ...BETTER_SLEEP_ARTICLE_SLUGS,
  ...OTHER_JOURNAL_QA_GUIDE_SLUGS,
] as const;

export type JournalQaGuideArticleSlug = (typeof JOURNAL_QA_GUIDE_ARTICLE_SLUGS)[number];

export const journalGuideArticleSlugs = new Set<string>(JOURNAL_QA_GUIDE_ARTICLE_SLUGS);

export function isJournalQaGuideArticleSlug(slug: string): slug is JournalQaGuideArticleSlug {
  return journalGuideArticleSlugs.has(slug);
}
