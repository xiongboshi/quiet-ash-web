import type { JournalIndexArticleCard } from "@/data/journal-index-articles";
import {
  journalCategoryLabels,
  journalEssayCardMeta,
} from "@/data/journal-essay-card-meta";
import { getEssaysInSeries } from "@/lib/essays";

const FALLBACK_IMAGE = "/images/generated/essay-good-incense-not-loud.png";

/** Build journal index cards from a registered `content/essays/{series}` folder. */
export function buildJournalIndexCardsFromEssays(
  seriesSlug: string,
): JournalIndexArticleCard[] {
  return getEssaysInSeries(seriesSlug)
    .slice()
    .sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0))
    .map((essay) => {
      const meta = journalEssayCardMeta[essay.slug];
      const categoryId = meta?.categoryId ?? "scents-ingredients";
      const tags = meta?.tags ?? (["relaxation"] as const);

      return {
        slug: essay.slug,
        categoryId,
        categoryLabel: journalCategoryLabels[categoryId],
        title: essay.title,
        description: essay.excerpt.replace(/\s+/g, " ").trim(),
        readMinutes: essay.readingMinutes,
        date: essay.date,
        imageSrc: essay.coverImage ?? FALLBACK_IMAGE,
        imageAlt: `${essay.title} — Quiet Ash journal`,
        tags,
      };
    });
}
