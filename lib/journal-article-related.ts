import {
  evergreenGuideBySlug,
  isEvergreenGuideSlug,
} from "@/data/evergreen-guides";
import { getJournalIndexArticleCards } from "@/lib/get-journal-index-articles";
import { journalPath } from "@/lib/site-paths";
import type {
  JournalArticleRelated,
  JournalArticleRelatedRef,
} from "@/types/journal-article";

const FALLBACK_IMAGE = "/images/generated/essay-good-incense-not-loud.webp";

/** Slug-only related refs → cards with image, title, and href from index or guides. */
export function resolveJournalArticleRelatedItems(
  items: readonly JournalArticleRelatedRef[],
): JournalArticleRelated[] {
  const bySlug = new Map(
    getJournalIndexArticleCards().map((card) => [card.slug, card]),
  );

  const resolved: JournalArticleRelated[] = [];

  for (const item of items) {
    const guide = isEvergreenGuideSlug(item.slug)
      ? evergreenGuideBySlug[item.slug]
      : undefined;
    const card = bySlug.get(item.slug);

    const title =
      item.title ?? card?.headline ?? card?.title ?? guide?.title ?? "";
    const readMinutes = item.readMinutes ?? card?.readMinutes ?? 8;
    const imageSrc =
      item.imageSrc?.trim() ||
      card?.imageSrc ||
      guide?.heroImageSrc ||
      FALLBACK_IMAGE;
    const imageAlt =
      item.imageAlt?.trim() ||
      card?.imageAlt ||
      guide?.heroImageAlt ||
      title ||
      "Related article";

    if (!title) continue;

    const href =
      item.href ??
      (guide ? guide.pathname : journalPath(item.slug));

    resolved.push({
      slug: item.slug,
      href,
      title,
      readMinutes,
      imageSrc,
      imageAlt,
    });
  }

  return resolved;
}
