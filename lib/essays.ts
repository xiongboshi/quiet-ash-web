import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { homeEditorialSlugs } from "@/data/essays";
import {
  parseEssayJournalFields,
  type EssayJournalFields,
} from "@/lib/journal-mdx-meta";
import { getSeriesSlugs } from "@/lib/series";

const ESSAYS_DIR = path.join(process.cwd(), "content", "essays");

export type EssayMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  series: string;
  order: number;
  language: string;
  /** Hero / card image under `public/` (optional). */
  coverImage?: string;
  /** Curated motifs for this piece (optional). */
  threads?: string[];
  /** Estimated slow read; override with frontmatter `reading_time` (minutes). */
  readingMinutes: number;
  /** One-line curator gloss for archive strand only (optional). */
  strandNote?: string;
  /** Journal PLP/PDP — from MDX frontmatter when present. */
  journal?: EssayJournalFields;
};

export type Essay = EssayMeta & {
  body: string;
  /** Optional pull line above the body — very light, not SEO. */
  epigraph?: string;
  /** Journal PLP/PDP — from MDX frontmatter (`docs/JOURNAL-CMS-SCHEMA.md`). */
  journal?: EssayJournalFields;
};

function slugFromFile(name: string) {
  return name.replace(/\.mdx$/iu, "");
}

/**
 * Series slug from path: `content/essays/{series-slug}/file.mdx`
 * Only subfolders registered in `content/series/*.mdx` are scanned.
 */
function seriesSlugFromEssayPath(filePath: string): string | null {
  const rel = path.relative(ESSAYS_DIR, filePath);
  const first = rel.split(path.sep)[0];
  if (!first || first === "." || first === "..") return null;
  return first;
}

/** All essay MDX under `content/essays/{series-slug}/*.mdx` (one folder per series). */
function listEssayFilePaths(): string[] {
  if (!fs.existsSync(ESSAYS_DIR)) return [];
  const allowed = new Set(getSeriesSlugs());
  if (process.env.NODE_ENV === "development") {
    for (const ent of fs.readdirSync(ESSAYS_DIR, { withFileTypes: true })) {
      if (!ent.isDirectory()) continue;
      if (!allowed.has(ent.name)) {
        console.warn(
          `[essays] Ignoring folder "content/essays/${ent.name}/" — add a matching "content/series/${ent.name}.mdx" to register this series.`,
        );
      }
    }
  }
  const out: string[] = [];
  for (const ent of fs.readdirSync(ESSAYS_DIR, { withFileTypes: true })) {
    if (!ent.isDirectory()) continue;
    if (!allowed.has(ent.name)) continue;
    const dir = path.join(ESSAYS_DIR, ent.name);
    for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
      if (f.isFile() && f.name.endsWith(".mdx")) {
        out.push(path.join(dir, f.name));
      }
    }
  }
  return out.sort();
}

/** Editorial pace (~words per minute); frontmatter `reading_time` wins when set. */
function readingMinutesFromBody(source: string): number {
  const text = source
    .replace(/```[\s\S]*?```/gu, " ")
    .replace(/`[^`]+`/gu, " ")
    .replace(/\{[^}]+\}/gu, " ")
    .replace(/<[A-Za-z][^>]*>/gu, " ")
    .replace(/[#*_[\]|>-]/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
  const words = text.split(/\s+/u).filter(Boolean).length;
  return Math.max(1, Math.round(words / 190));
}

function excerptFrom(data: Record<string, unknown>, body: string): string {
  const raw =
    (typeof data.excerpt === "string" && data.excerpt) ||
    (typeof data.description === "string" && data.description) ||
    "";
  if (raw.trim()) return raw.trim();
  return body
    .replace(/^#[^\n]*\n+/u, "")
    .replace(/<[A-Za-z][^>]*>/gu, " ")
    .slice(0, 180)
    .trim()
    .replace(/\s+/gu, " ");
}

function parseThreads(data: Record<string, unknown>): string[] | undefined {
  const fromThreads = data.threads;
  if (Array.isArray(fromThreads)) {
    const t = fromThreads.filter(
      (x): x is string => typeof x === "string" && x.trim().length > 0,
    );
    if (t.length) return t.map((s) => s.trim());
  }
  return undefined;
}

/** Fallback only when path has no series segment (should not happen with folder layout). */
function parseSeriesSlug(data: Record<string, unknown>): string {
  const s = data.series;
  if (typeof s === "string" && s.trim()) return s.trim();
  if (Array.isArray(s) && s.length > 0 && typeof s[0] === "string" && s[0].trim())
    return s[0].trim();
  return "";
}

/** Frontmatter `series` (for dedupe hints only; runtime `Essay.series` still comes from folder path). */
function declaredSeriesFromMatter(filePath: string): string {
  try {
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);
    return parseSeriesSlug(data as Record<string, unknown>);
  } catch {
    return "";
  }
}

/** True when `series:` in MDX is empty or matches the folder name (recommended for authors). */
function folderMatchesDeclaredSeries(filePath: string): boolean {
  const folder = seriesSlugFromEssayPath(filePath);
  if (!folder) return false;
  const decl = declaredSeriesFromMatter(filePath);
  if (!decl) return true;
  return decl === folder;
}

function readEssayFile(filePath: string): Essay | null {
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const d = data as Record<string, unknown>;
  const basenameSlug = slugFromFile(path.basename(filePath));
  const slugRaw = d.slug;
  const slug =
    typeof slugRaw === "string" && slugRaw.trim()
      ? slugRaw.trim()
      : basenameSlug;

  const folderSeries = seriesSlugFromEssayPath(filePath);
  const series = folderSeries ?? parseSeriesSlug(d);
  if (!series) return null;

  const title =
    typeof d.title === "string" && d.title.trim() ? d.title.trim() : slug;
  const date =
    typeof d.date === "string" && d.date.trim() ? d.date.trim() : "";
  const order =
    typeof d.order === "number" && Number.isFinite(d.order) ? d.order : 999;
  const language =
    typeof d.language === "string" && d.language.trim()
      ? d.language.trim()
      : "en";
  const strandNoteRaw = d.strand_note;
  const strandNote =
    typeof strandNoteRaw === "string" && strandNoteRaw.trim()
      ? strandNoteRaw.trim()
      : undefined;
  const epigraphRaw = d.epigraph;
  const epigraph =
    typeof epigraphRaw === "string" && epigraphRaw.trim()
      ? epigraphRaw.trim()
      : undefined;
  const readingTimeRaw = d.reading_time;
  const readingOverride =
    typeof readingTimeRaw === "number" &&
    Number.isFinite(readingTimeRaw) &&
    readingTimeRaw > 0
      ? Math.min(240, Math.round(readingTimeRaw))
      : undefined;
  const readingMinutes = readingOverride ?? readingMinutesFromBody(content);
  const coverRaw = d.cover ?? d.hero_image;
  const coverImage =
    typeof coverRaw === "string" && coverRaw.trim()
      ? coverRaw.trim()
      : undefined;
  const threads = parseThreads(d);
  const journal = parseEssayJournalFields(d, title);

  return {
    slug,
    title,
    date,
    excerpt: excerptFrom(d, content),
    series,
    order,
    language,
    ...(threads?.length ? { threads } : {}),
    ...(coverImage ? { coverImage } : {}),
    readingMinutes,
    strandNote,
    epigraph,
    journal,
    body: content.trim(),
  };
}

/**
 * Same `slug` may only exist once site-wide (`/journal/[slug]`). If two MDX
 * files share a slug in different folders, pick one winner:
 * 1. Newer `mtime` (editing the file you want wins).
 * 2. If mtime ties: prefer the file whose frontmatter `series:` matches its folder
 *    (avoids “wrong folder wins” when copies share a slug but one has stale YAML).
 * 3. Lexicographically smaller path (stable tie-break).
 *
 * In development, duplicate slugs log which path was chosen and which were skipped.
 */
function loadAllEssays(): Essay[] {
  const rows: { essay: Essay; fp: string; mtime: number }[] = [];
  for (const fp of listEssayFilePaths()) {
    const e = readEssayFile(fp);
    if (!e) continue;
    let mtime = 0;
    try {
      mtime = fs.statSync(fp).mtimeMs;
    } catch {
      mtime = 0;
    }
    rows.push({ essay: e, fp, mtime });
  }
  const bySlug = new Map<string, { essay: Essay; fp: string; mtime: number }[]>();
  for (const row of rows) {
    const slug = row.essay.slug;
    const arr = bySlug.get(slug) ?? [];
    arr.push(row);
    bySlug.set(slug, arr);
  }
  const out: Essay[] = [];
  for (const [slug, group] of bySlug) {
    const sorted = [...group].sort((a, b) => {
      if (b.mtime !== a.mtime) return b.mtime - a.mtime;
      const am = folderMatchesDeclaredSeries(a.fp) ? 1 : 0;
      const bm = folderMatchesDeclaredSeries(b.fp) ? 1 : 0;
      if (bm !== am) return bm - am;
      return a.fp.localeCompare(b.fp);
    });
    const winner = sorted[0]!;
    if (process.env.NODE_ENV === "development" && sorted.length > 1) {
      console.warn(
        `[essays] Duplicate slug "${slug}" in ${sorted.length} files. Using:\n  ${winner.fp}`,
      );
      for (const row of sorted.slice(1)) {
        console.warn(`  skipped: ${row.fp}`);
      }
    }
    out.push(winner.essay);
  }
  return out;
}

export function getEssaySlugs(): string[] {
  return loadAllEssays()
    .map((e) => e.slug)
    .sort();
}

export function getEssayBySlug(slug: string): Essay | null {
  for (const e of loadAllEssays()) {
    if (e.slug === slug) return e;
  }
  return null;
}

export function getAllEssays(): EssayMeta[] {
  const rows = loadAllEssays().map((e) => {
    const meta: EssayMeta = {
      slug: e.slug,
      title: e.title,
      date: e.date,
      excerpt: e.excerpt,
      series: e.series,
      order: e.order,
      language: e.language,
      readingMinutes: e.readingMinutes,
    };
    if (e.threads?.length) meta.threads = e.threads;
    if (e.strandNote) meta.strandNote = e.strandNote;
    if (e.coverImage) meta.coverImage = e.coverImage;
    if (e.journal) meta.journal = e.journal;
    return meta;
  });

  return rows.sort((a, b) => {
    if (a.series !== b.series) return a.series.localeCompare(b.series);
    if (a.order !== b.order) return a.order - b.order;
    return a.date < b.date ? 1 : -1;
  });
}

/** All essays in a series, ordered for archive navigation. */
export function getEssaysInSeries(seriesSlug: string): EssayMeta[] {
  return getAllEssays()
    .filter((e) => e.series === seriesSlug)
    .sort((a, b) => a.order - b.order);
}

export function getAdjacentInSeries(
  seriesSlug: string,
  slug: string,
): { prev: EssayMeta | null; next: EssayMeta | null } {
  const list = getEssaysInSeries(seriesSlug);
  const i = list.findIndex((e) => e.slug === slug);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: i > 0 ? list[i - 1]! : null,
    next: i < list.length - 1 ? list[i + 1]! : null,
  };
}

/** Homepage / “latest breath” — by calendar, not series order. */
export function getEssaysByRecentDate(limit = 3): EssayMeta[] {
  return [...getAllEssays()]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}

/** Homepage journal strip — three pieces max; curated slugs, then recent fill. */
export function getHomeEditorialEssays(): EssayMeta[] {
  const map = new Map(getAllEssays().map((e) => [e.slug, e]));
  const out: EssayMeta[] = [];
  for (const slug of homeEditorialSlugs) {
    const e = map.get(slug);
    if (e) out.push(e);
  }
  if (out.length >= 3) return out;
  for (const e of getEssaysByRecentDate(20)) {
    if (out.some((x) => x.slug === e.slug)) continue;
    out.push(e);
    if (out.length >= 3) break;
  }
  return out.slice(0, 3);
}
