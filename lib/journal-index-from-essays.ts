import type { JournalIndexArticleCard } from "@/data/journal-index-articles";
import { journalCategoryLabels } from "@/lib/journal-mdx-meta";
import { getAllEssays } from "@/lib/essays";

const FALLBACK_IMAGE = "/images/generated/essay-good-incense-not-loud.png";

/** Build journal index cards from a registered `content/essays/{series}` folder. */
export function buildJournalIndexCardsFromEssays(
  seriesSlug: string,
): JournalIndexArticleCard[] {
  return getAllEssays()
    .filter((essay) => essay.series === seriesSlug)
    .slice()
    .sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0))
    .map((essay) => {
      const journal = essay.journal ?? {
        categoryId: "scents-ingredients" as const,
        tags: ["relaxation"] as const,
        headline: essay.title,
        seoTitle: essay.title,
        bodyFormat: "editorial" as const,
      };
      const categoryId = journal.categoryId;
      const headline = journal.headline;
      const seoTitle = journal.seoTitle;

      return {
        slug: essay.slug,
        categoryId,
        categoryLabel: journalCategoryLabels[categoryId],
        headline,
        seoTitle,
        title: headline,
        description: essay.excerpt.replace(/\s+/g, " ").trim(),
        readMinutes: essay.readingMinutes,
        date: essay.date,
        imageSrc: essay.coverImage ?? FALLBACK_IMAGE,
        imageAlt: `${headline} — Quiet Ash journal`,
        tags: journal.tags,
      };
    });
}
