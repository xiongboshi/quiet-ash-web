import { journalIndexSeriesSlugs } from "@/data/journal-index-config";
import {
  journalGuidesTipsHandCards,
  type JournalIndexArticleCard,
} from "@/data/journal-index-articles";
import { getEssayBySlug } from "@/lib/essays";
import { buildJournalIndexCardsFromEssays } from "@/lib/journal-index-from-essays";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";

/** All journal index cards — design showcase + configured essay series (server-only). */
export function getJournalIndexArticleCards(): JournalIndexArticleCard[] {
  const seen = new Set<string>();
  const fromSeries: JournalIndexArticleCard[] = [];

  for (const seriesSlug of journalIndexSeriesSlugs) {
    for (const card of buildJournalIndexCardsFromEssays(seriesSlug)) {
      if (seen.has(card.slug)) continue;
      seen.add(card.slug);
      fromSeries.push(card);
    }
  }

  const handCards = journalGuidesTipsHandCards.filter((card) => {
    if (seen.has(card.slug)) return false;
    seen.add(card.slug);
    return true;
  });

  return [...handCards, ...fromSeries];
}

export function getJournalIndexArticles(): JournalIndexArticleResolved[] {
  return getJournalIndexArticleCards().map((card) => {
    const essay = getEssayBySlug(card.slug);
    return {
      ...card,
      readMinutes: essay?.readingMinutes ?? card.readMinutes,
      date: essay?.date ?? card.date,
    };
  });
}
