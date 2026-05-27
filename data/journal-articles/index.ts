import type { JournalArticleTemplate } from "@/types/journal-article";
import { buildJournalArticleFromIndexCard } from "@/lib/journal-article-from-index";
import { getJournalIndexArticleCards } from "@/lib/get-journal-index-articles";
import { journalArticleBestIncenseForSleep } from "@/data/journal-articles/best-incense-for-sleep";
import { journalArticleBestIncenseForSmallApartments } from "@/data/journal-articles/best-incense-for-small-apartments";
import { journalArticleIsIncenseSafeForPets } from "@/data/journal-articles/is-incense-safe-for-pets";

/** Full PDP overrides for hand-authored guide templates. */
const journalHandArticleOverrides: Record<string, JournalArticleTemplate> = {
  [journalArticleBestIncenseForSleep.slug]: journalArticleBestIncenseForSleep,
  [journalArticleIsIncenseSafeForPets.slug]: journalArticleIsIncenseSafeForPets,
  [journalArticleBestIncenseForSmallApartments.slug]:
    journalArticleBestIncenseForSmallApartments,
};

/** Index-listed articles — auto-filled from card + `content/essays` MDX when available. */
const articlesFromIndex = Object.fromEntries(
  getJournalIndexArticleCards().map((card) => [
    card.slug,
    buildJournalArticleFromIndexCard(card),
  ]),
) satisfies Record<string, JournalArticleTemplate>;

export const journalArticleRegistry: Record<string, JournalArticleTemplate> = {
  ...articlesFromIndex,
  ...journalHandArticleOverrides,
};

export const journalArticleSlugs = Object.keys(journalArticleRegistry);
