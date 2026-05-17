/**
 * Rituals archive — horizontal filter strip (design) maps to ritual slugs.
 * Filters not listed for a slug only match ALL.
 */
export const RITUAL_ARCHIVE_FILTER_IDS = [
  "ALL",
  "MORNING",
  "RAIN",
  "EVENING",
  "WRITING",
  "WINTER",
  "TEA",
  "INCENSE",
  "SOLITUDE",
  "SPACE",
] as const;

export type RitualArchiveFilterId = (typeof RITUAL_ARCHIVE_FILTER_IDS)[number];

export const ritualSlugToArchiveFilters: Record<
  string,
  readonly RitualArchiveFilterId[]
> = {
  "evening-room-ritual": ["EVENING"],
  "tea-after-rain": ["RAIN", "TEA"],
  "incense-before-writing": ["MORNING", "WRITING", "INCENSE"],
  "quiet-desk-ritual": ["SPACE", "WRITING"],
  "smoke-and-silence": ["EVENING", "INCENSE", "SOLITUDE"],
  "why-agarwood-matters": ["WINTER", "SOLITUDE", "INCENSE"],
};

export function ritualMatchesArchiveFilter(
  slug: string,
  filter: RitualArchiveFilterId,
): boolean {
  if (filter === "ALL") return true;
  const tags = ritualSlugToArchiveFilters[slug];
  if (!tags?.length) return false;
  return tags.includes(filter);
}
