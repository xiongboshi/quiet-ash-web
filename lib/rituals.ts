import fs from "node:fs";
import { SHOP_INDEX } from "@/lib/site-paths";
import path from "node:path";
import matter from "gray-matter";

const RITUALS_DIR = path.join(process.cwd(), "content", "rituals");

export type RitualStep = {
  title: string;
  body: string;
  image: string;
};

/** “USED IN THIS EVENING” rail — copy lives in MDX / JSON for new rituals. */
export type ObjectsSectionSpec = {
  label: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
};

export type RitualMeta = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  mood: string;
  relatedProducts: string[];
  /** Optional — shown as “READ TIME N MIN” on spec ritual templates. */
  readTime?: number;
  /** “THE RITUAL” grid — required for the editorial ritual page. */
  steps: RitualStep[];
  /** Section label above the step grid (default: “The ritual”). */
  ritualSectionLabel: string;
  /** Objects strip header + CTA — required for the editorial ritual page. */
  objectsSection: ObjectsSectionSpec;
  /** Narrow column image beside MDX intro (defaults to cover). */
  introAsideImage?: string;
  closingQuote?: string;
  nextRitualSlug?: string;
  relatedEssaySlug?: string;
};

export type Ritual = RitualMeta & {
  body: string;
};

function slugFromFile(name: string) {
  return name.replace(/\.mdx$/iu, "");
}

function parseRelatedProducts(data: Record<string, unknown>): string[] {
  const raw = data.relatedProducts ?? data.related_products;
  if (!Array.isArray(raw)) return [];
  return raw.filter(
    (x): x is string => typeof x === "string" && x.trim().length > 0,
  );
}

function parseStepsArray(raw: unknown[]): RitualStep[] {
  const out: RitualStep[] = [];
  for (const row of raw) {
    if (!row || typeof row !== "object") continue;
    const o = row as Record<string, unknown>;
    const title = typeof o.title === "string" ? o.title.trim() : "";
    const body = typeof o.body === "string" ? o.body.trim() : "";
    const image = typeof o.image === "string" ? o.image.trim() : "";
    if (title && body && image) out.push({ title, body, image });
  }
  return out;
}

function parseRitualSteps(data: Record<string, unknown>): RitualStep[] {
  const raw = data.ritual_steps ?? data.steps;
  if (!Array.isArray(raw)) return [];
  return parseStepsArray(raw);
}

/** Prefer `ritual_section.steps`; fall back to root `ritual_steps`. */
function parseAllRitualSteps(data: Record<string, unknown>): RitualStep[] {
  const rs = data.ritual_section;
  if (rs && typeof rs === "object") {
    const stepsRaw = (rs as Record<string, unknown>).steps;
    if (Array.isArray(stepsRaw) && stepsRaw.length) return parseStepsArray(stepsRaw);
  }
  return parseRitualSteps(data);
}

function parseRitualSectionLabel(data: Record<string, unknown>): string {
  const rs = data.ritual_section;
  if (rs && typeof rs === "object") {
    const l = (rs as Record<string, unknown>).label;
    if (typeof l === "string" && l.trim()) return l.trim();
  }
  const flat = data.ritual_section_label ?? data.ritualSectionLabel;
  if (typeof flat === "string" && flat.trim()) return flat.trim();
  return "The ritual";
}

const DEFAULT_OBJECTS_SECTION: ObjectsSectionSpec = {
  label: "Used in this evening",
  subtext: "Objects that shape this quiet moment.",
  ctaLabel: "View all objects →",
  ctaHref: SHOP_INDEX,
};

function parseObjectsSection(data: Record<string, unknown>): ObjectsSectionSpec {
  const raw = data.objects_section ?? data.objectsSection;
  if (raw && typeof raw === "object") {
    const o = raw as Record<string, unknown>;
    const label =
      typeof o.label === "string" && o.label.trim()
        ? o.label.trim()
        : DEFAULT_OBJECTS_SECTION.label;
    const subtext =
      (typeof o.subtext === "string" && o.subtext.trim()
        ? o.subtext.trim()
        : typeof o.title === "string" && o.title.trim()
          ? o.title.trim()
          : null) ?? DEFAULT_OBJECTS_SECTION.subtext;
    const ctaLabel =
      typeof o.cta_label === "string" && o.cta_label.trim()
        ? o.cta_label.trim()
        : typeof o.ctaLabel === "string" && o.ctaLabel.trim()
          ? o.ctaLabel.trim()
          : DEFAULT_OBJECTS_SECTION.ctaLabel;
    const ctaHref =
      typeof o.cta_href === "string" && o.cta_href.trim()
        ? o.cta_href.trim()
        : typeof o.ctaHref === "string" && o.ctaHref.trim()
          ? o.ctaHref.trim()
          : typeof o.cta_link === "string" && o.cta_link.trim()
            ? o.cta_link.trim()
            : DEFAULT_OBJECTS_SECTION.ctaHref;
    return { label, subtext, ctaLabel, ctaHref };
  }
  return { ...DEFAULT_OBJECTS_SECTION };
}

function listRitualPaths(): string[] {
  if (!fs.existsSync(RITUALS_DIR)) return [];
  return fs
    .readdirSync(RITUALS_DIR, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".mdx"))
    .map((e) => path.join(RITUALS_DIR, e.name))
    .sort();
}

function parseRitual(filePath: string): Ritual | null {
  let rawFile: string;
  try {
    rawFile = fs.readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
  const { data, content } = matter(rawFile) as {
    data: Record<string, unknown>;
    content: string;
  };
  const slug =
    typeof data.slug === "string" && data.slug.trim()
      ? data.slug.trim()
      : slugFromFile(path.basename(filePath));
  const title =
    typeof data.title === "string" && data.title.trim()
      ? data.title.trim()
      : slug;
  const excerpt =
    typeof data.excerpt === "string" && data.excerpt.trim()
      ? data.excerpt.trim()
      : "";
  const mood =
    typeof data.mood === "string" && data.mood.trim()
      ? data.mood.trim()
      : "";
  const coverImage =
    typeof data.coverImage === "string" && data.coverImage.trim()
      ? data.coverImage.trim()
      : undefined;
  const relatedProducts = parseRelatedProducts(data);
  const body = typeof content === "string" ? content.trim() : "";
  const readTimeRaw = data.reading_time ?? data.readTime;
  const readTime =
    typeof readTimeRaw === "number" && Number.isFinite(readTimeRaw)
      ? Math.max(1, Math.round(readTimeRaw))
      : undefined;

  const steps = parseAllRitualSteps(data);
  const ritualSectionLabel = parseRitualSectionLabel(data);
  const objectsSection = parseObjectsSection(data);
  const introAsideRaw = data.intro_aside_image ?? data.introAsideImage;
  const introAsideImage =
    typeof introAsideRaw === "string" && introAsideRaw.trim()
      ? introAsideRaw.trim()
      : undefined;
  const closingRaw = data.closing_quote ?? data.closingQuote;
  const closingQuote =
    typeof closingRaw === "string" && closingRaw.trim()
      ? closingRaw.trim()
      : undefined;
  const nextRaw = data.next_ritual ?? data.nextRitual ?? data.nextRitualSlug;
  const nextRitualSlug =
    typeof nextRaw === "string" && nextRaw.trim() ? nextRaw.trim() : undefined;
  const essayRaw = data.related_essay ?? data.relatedEssay ?? data.relatedEssaySlug;
  const relatedEssaySlug =
    typeof essayRaw === "string" && essayRaw.trim() ? essayRaw.trim() : undefined;

  if (!excerpt || !mood || !body) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        `[rituals] Missing excerpt/mood/body — skipping: ${filePath}`,
      );
    }
    return null;
  }

  if (process.env.NODE_ENV === "development" && steps.length === 0) {
    console.warn(
      `[rituals] Add ritual_section.steps (or ritual_steps) for editorial layout: ${filePath}`,
    );
  }

  return {
    slug,
    title,
    excerpt,
    mood,
    relatedProducts,
    steps,
    ritualSectionLabel,
    objectsSection,
    body,
    ...(coverImage ? { coverImage } : {}),
    ...(readTime !== undefined ? { readTime } : {}),
    ...(introAsideImage ? { introAsideImage } : {}),
    ...(closingQuote ? { closingQuote } : {}),
    ...(nextRitualSlug ? { nextRitualSlug } : {}),
    ...(relatedEssaySlug ? { relatedEssaySlug } : {}),
  };
}

function loadAllRituals(): Ritual[] {
  const out: Ritual[] = [];
  for (const fp of listRitualPaths()) {
    const r = parseRitual(fp);
    if (r) out.push(r);
  }
  return out.sort((a, b) => a.title.localeCompare(b.title));
}

let cache: Ritual[] | null = null;

function allRituals(): Ritual[] {
  if (!cache) cache = loadAllRituals();
  return cache;
}

export function getRitualSlugs(): string[] {
  return allRituals().map((r) => r.slug);
}

export function getRitualBySlug(slug: string): Ritual | undefined {
  return allRituals().find((r) => r.slug === slug);
}

export function getAllRituals(): Ritual[] {
  return [...allRituals()];
}

export function getRitualsBySlugs(slugs: readonly string[]): Ritual[] {
  const map = new Map(allRituals().map((r) => [r.slug, r]));
  const out: Ritual[] = [];
  for (const s of slugs) {
    const r = map.get(s);
    if (r) out.push(r);
  }
  return out;
}

/** Rituals whose `relatedProducts` includes this object slug — object detail “used in” rail. */
export function getRitualsUsingProduct(productSlug: string): Ritual[] {
  return allRituals().filter((r) => r.relatedProducts.includes(productSlug));
}

/** Stable slug order — used when `nextRitualSlug` is omitted. */
export function getNextRitualAfter(slug: string): Ritual | undefined {
  const list = [...allRituals()].sort((a, b) => a.slug.localeCompare(b.slug));
  const i = list.findIndex((r) => r.slug === slug);
  if (i < 0) return undefined;
  return list[(i + 1) % list.length];
}
