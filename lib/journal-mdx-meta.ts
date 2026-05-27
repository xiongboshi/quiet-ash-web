import type { JournalTagId } from "@/data/journal-index";
import {
  JOURNAL_TOPIC_HUB_IDS,
  journalLegacyCategoryToTopicHub,
  isJournalTopicHubId,
  type JournalTopicHubId,
} from "@/data/journal-topic-hubs";

export type JournalBodyFormat = "editorial" | "guide";

export type JournalEssayCategoryId = JournalTopicHubId;

export const JOURNAL_ESSAY_CATEGORY_IDS = JOURNAL_TOPIC_HUB_IDS;

const CATEGORY_ID_SET = new Set<string>([
  ...JOURNAL_ESSAY_CATEGORY_IDS,
  ...Object.keys(journalLegacyCategoryToTopicHub),
]);

export const JOURNAL_TAG_IDS = [
  "sleep",
  "stress-relief",
  "focus",
  "meditation",
  "morning-routine",
  "relaxation",
] as const satisfies readonly JournalTagId[];

const TAG_ID_SET = new Set<string>(JOURNAL_TAG_IDS);

export const journalCategoryLabels: Record<JournalTopicHubId, string> = {
  "better-sleep": "BETTER SLEEP",
  "small-space-living": "SMALL SPACE LIVING",
  "calm-evenings": "CALM EVENINGS",
  "quiet-routines": "QUIET ROUTINES",
  "guides-care": "GUIDES & CARE",
};

function optString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const t = value.trim();
  return t || undefined;
}

function parseStringList(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const items = value
    .filter((x): x is string => typeof x === "string")
    .map((s) => s.trim())
    .filter(Boolean);
  return items.length ? items : undefined;
}

export function normalizeEssayCategoryId(
  raw: string | undefined,
): JournalTopicHubId | undefined {
  if (!raw) return undefined;
  if (isJournalTopicHubId(raw)) return raw;
  return journalLegacyCategoryToTopicHub[raw];
}

export function parseJournalCategoryId(
  value: unknown,
): JournalEssayCategoryId | undefined {
  const raw = optString(value);
  if (!raw || !CATEGORY_ID_SET.has(raw)) return undefined;
  return normalizeEssayCategoryId(raw) ?? undefined;
}

export function parseJournalTags(value: unknown): JournalTagId[] {
  const list = parseStringList(value);
  if (!list?.length) return [];
  return list.filter((id): id is JournalTagId => TAG_ID_SET.has(id));
}

export function parseJournalBodyFormat(
  value: unknown,
): JournalBodyFormat | undefined {
  const raw = optString(value);
  if (raw === "editorial" || raw === "guide") return raw;
  return undefined;
}

/** Journal PLP/PDP fields from MDX frontmatter (see docs/JOURNAL-CMS-SCHEMA.md). */
export type EssayJournalFields = {
  categoryId: JournalEssayCategoryId;
  tags: JournalTagId[];
  headline: string;
  seoTitle: string;
  bodyFormat: JournalBodyFormat;
  relatedSlugs?: string[];
  productSlugs?: string[];
};

export function parseEssayJournalFields(
  data: Record<string, unknown>,
  fallbackTitle: string,
): EssayJournalFields {
  const headline =
    optString(data.headline) ?? optString(data.title) ?? fallbackTitle;
  const seoTitle =
    optString(data.seoTitle) ??
    optString(data.seo_title) ??
    headline;

  const categoryId =
    parseJournalCategoryId(data.categoryId) ??
    parseJournalCategoryId(data.category_id) ??
    "calm-evenings";

  const tags = parseJournalTags(data.tags);
  const resolvedTags: JournalTagId[] =
    tags.length > 0 ? tags : (["relaxation"] as JournalTagId[]);

  const bodyFormat =
    parseJournalBodyFormat(data.bodyFormat) ??
    parseJournalBodyFormat(data.body_format) ??
    "editorial";

  const relatedSlugs =
    parseStringList(data.relatedSlugs) ?? parseStringList(data.related_slugs);
  const productSlugs =
    parseStringList(data.productSlugs) ?? parseStringList(data.product_slugs);

  return {
    categoryId,
    tags: resolvedTags,
    headline,
    seoTitle,
    bodyFormat,
    ...(relatedSlugs ? { relatedSlugs } : {}),
    ...(productSlugs ? { productSlugs } : {}),
  };
}
