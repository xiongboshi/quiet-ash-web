import type { JournalArticleTemplate } from "@/types/journal-article";
import { buildJournalArticleFromIndexCard } from "@/lib/journal-article-from-index";
import { getJournalIndexArticleCards } from "@/lib/get-journal-index-articles";
import { journalArticleBestIncenseForSleep } from "@/data/journal-articles/best-incense-for-sleep";
import { journalArticleBestIncenseForSmallApartments } from "@/data/journal-articles/best-incense-for-small-apartments";
import { journalArticleIncenseAfterWork } from "@/data/journal-articles/incense-after-work";
import { journalArticleIsIncenseSafeForPets } from "@/data/journal-articles/is-incense-safe-for-pets";
import { journalArticleTeaAndIncenseRituals } from "@/data/journal-articles/tea-and-incense-rituals";

/** Full PDP overrides for hand-authored guide templates. */
const journalHandArticleOverrides: Record<string, JournalArticleTemplate> = {
  [journalArticleBestIncenseForSleep.slug]: journalArticleBestIncenseForSleep,
  [journalArticleIsIncenseSafeForPets.slug]: journalArticleIsIncenseSafeForPets,
  [journalArticleBestIncenseForSmallApartments.slug]:
    journalArticleBestIncenseForSmallApartments,
  [journalArticleIncenseAfterWork.slug]: journalArticleIncenseAfterWork,
  [journalArticleTeaAndIncenseRituals.slug]: journalArticleTeaAndIncenseRituals,
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
