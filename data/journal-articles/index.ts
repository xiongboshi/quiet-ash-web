import type { JournalArticleTemplate } from "@/types/journal-article";
import { buildJournalArticleFromIndexCard } from "@/lib/journal-article-from-index";
import { getJournalIndexArticleCards } from "@/lib/get-journal-index-articles";
import { journalArticleBestIncenseForSleep } from "@/data/journal-articles/best-incense-for-sleep";

/** Index-listed articles — auto-filled from card + `content/essays` MDX when available. */
const articlesFromIndex = Object.fromEntries(
  getJournalIndexArticleCards().map((card) => [
    card.slug,
    buildJournalArticleFromIndexCard(card),
  ]),
) satisfies Record<string, JournalArticleTemplate>;

export const journalArticleRegistry: Record<string, JournalArticleTemplate> = {
  ...articlesFromIndex,
  [journalArticleBestIncenseForSleep.slug]: journalArticleBestIncenseForSleep,
};

export const journalArticleSlugs = Object.keys(journalArticleRegistry);
