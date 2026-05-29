/** Hand-authored Q&A guide articles (`data/journal-articles/*.ts`) — client-safe slug list. */
export const JOURNAL_QA_GUIDE_ARTICLE_SLUGS = [
  "best-incense-for-sleep",
  "bedroom-scents-for-better-sleep",
  "evening-wind-down-rituals-for-better-sleep",
  "is-incense-safe-for-pets",
  "best-incense-for-small-apartments",
  "incense-after-work",
  "tea-and-incense-rituals",
] as const;

export type JournalQaGuideArticleSlug = (typeof JOURNAL_QA_GUIDE_ARTICLE_SLUGS)[number];

export const journalGuideArticleSlugs = new Set<string>(JOURNAL_QA_GUIDE_ARTICLE_SLUGS);

export function isJournalQaGuideArticleSlug(slug: string): slug is JournalQaGuideArticleSlug {
  return journalGuideArticleSlugs.has(slug);
}
