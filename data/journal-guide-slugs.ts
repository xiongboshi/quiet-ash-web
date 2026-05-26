import { getEssayBySlug } from "@/lib/essays";

/** Hand-authored guide templates not backed by `content/essays/*.mdx`. */
export const journalGuideArticleSlugs = new Set<string>(["best-incense-for-sleep"]);

export function isJournalGuideArticle(slug: string): boolean {
  const essay = getEssayBySlug(slug);
  if (essay?.journal?.bodyFormat === "guide") return true;
  if (essay?.journal?.bodyFormat === "editorial") return false;
  return journalGuideArticleSlugs.has(slug);
}
