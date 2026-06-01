import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";
import { getJournalIndexArticles } from "@/lib/get-journal-index-articles";

/** Optional card title overrides on the journal index “Latest articles” rail. */
const JOURNAL_DISCOVERY_LATEST_TITLE_OVERRIDES: Partial<Record<string, string>> = {
  "best-incense-for-sleep": "Best Incense for Sleep",
  "good-incense-not-loud": "Good Incense Shouldn't Feel Loud",
  "why-scholars-burned-incense": "Incense Before Writing",
};

export const JOURNAL_DISCOVERY_LATEST_LIMIT = 11;

function sortByNewest(
  articles: readonly JournalIndexArticleResolved[],
): JournalIndexArticleResolved[] {
  return [...articles].sort((a, b) =>
    a.date > b.date ? -1 : a.date < b.date ? 1 : 0,
  );
}

/** Latest index cards for the journal homepage rail — always newest first. */
export function getJournalDiscoveryLatestArticles(
  limit = JOURNAL_DISCOVERY_LATEST_LIMIT,
): { article: JournalIndexArticleResolved; displayTitle?: string }[] {
  return sortByNewest(getJournalIndexArticles())
    .slice(0, limit)
    .map((article) => ({
      article,
      displayTitle: JOURNAL_DISCOVERY_LATEST_TITLE_OVERRIDES[article.slug],
    }));
}
