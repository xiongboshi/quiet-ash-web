/** Slugs that use the Q&A guide layout (sections + quick answer + takeaways). */
export const journalGuideArticleSlugs = new Set<string>(["best-incense-for-sleep"]);

export function isJournalGuideArticle(slug: string): boolean {
  return journalGuideArticleSlugs.has(slug);
}
