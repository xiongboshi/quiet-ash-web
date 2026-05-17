import type { EssayMeta } from "@/lib/essays";

/** Card / list image: explicit `cover` in MDX, else series atmosphere art. */
export function essayCardImageUrl(e: Pick<EssayMeta, "series" | "coverImage">): string {
  if (e.coverImage?.trim()) return e.coverImage.trim();
  return `/images/collections/${e.series}.svg`;
}

export function essayCardSubtitle(e: EssayMeta): string {
  if (e.strandNote?.trim()) return e.strandNote.trim();
  return e.excerpt.replace(/\s+/g, " ").trim().slice(0, 72);
}
