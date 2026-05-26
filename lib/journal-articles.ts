import {
  journalArticleRegistry,
  journalArticleSlugs,
} from "@/data/journal-articles";
import type { JournalArticleTemplate } from "@/types/journal-article";

export function getJournalArticleSlugs(): string[] {
  return journalArticleSlugs;
}

export function getJournalArticle(slug: string): JournalArticleTemplate | null {
  return journalArticleRegistry[slug] ?? null;
}

/** PDP from index card + `content/essays` MDX (and optional hand template override). */
export const resolveJournalArticle = getJournalArticle;

export function hasJournalArticleTemplate(slug: string): boolean {
  return slug in journalArticleRegistry;
}
