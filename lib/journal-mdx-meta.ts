import type { JournalCategoryId, JournalTagId } from "@/data/journal-index";

export type JournalBodyFormat = "editorial" | "guide";

export type JournalEssayCategoryId = Exclude<
  JournalCategoryId,
  "all" | "popular-questions"
>;

export const JOURNAL_ESSAY_CATEGORY_IDS = [
  "mind-wellness",
  "scents-ingredients",
  "rituals-practices",
  "living-lifestyle",
  "guides-tips",
] as const satisfies readonly JournalEssayCategoryId[];

const CATEGORY_ID_SET = new Set<string>(JOURNAL_ESSAY_CATEGORY_IDS);

export const JOURNAL_TAG_IDS = [
  "sleep",
  "stress-relief",
  "focus",
  "meditation",
  "morning-routine",
  "relaxation",
] as const satisfies readonly JournalTagId[];

const TAG_ID_SET = new Set<string>(JOURNAL_TAG_IDS);

export const journalCategoryLabels: Record<JournalEssayCategoryId, string> = {
  "mind-wellness": "MIND & WELLNESS",
  "scents-ingredients": "SCENTS & INGREDIENTS",
  "rituals-practices": "RITUALS & PRACTICES",
  "living-lifestyle": "LIVING & LIFESTYLE",
  "guides-tips": "GUIDES & TIPS",
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

export function parseJournalCategoryId(
  value: unknown,
): JournalEssayCategoryId | undefined {
  const raw = optString(value);
  if (!raw || !CATEGORY_ID_SET.has(raw)) return undefined;
  return raw as JournalEssayCategoryId;
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
    "scents-ingredients";

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
