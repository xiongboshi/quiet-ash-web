import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const SERIES_DIR = path.join(process.cwd(), "content", "series");

export type SeriesMeta = {
  slug: string;
  title: string;
  /** SEO / long description (not shown on minimal collection UI). */
  description: string;
  /** One line under the title: shown after essay count. */
  tagline?: string;
  /** Hero image path under `public/` (e.g. `/images/collections/incense.jpg`). */
  cover?: string;
  order: number;
  note?: string;
  threads?: string[];
  coverIntro?: string;
  lede: string;
  ledeLine2: string;
  closing: string;
  sequenceLead?: string;
  archiveYear?: string;
  readingMood?: string;
  marginHint?: string;
  shelfAnnotation?: string;
};

export type SeriesRecord = SeriesMeta & { body: string };

function slugFromFile(name: string) {
  return name.replace(/\.mdx$/iu, "");
}

export function getSeriesSlugs(): string[] {
  if (!fs.existsSync(SERIES_DIR)) return [];
  return fs
    .readdirSync(SERIES_DIR, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith(".mdx"))
    .map((d) => slugFromFile(d.name));
}

function parseThreadList(data: Record<string, unknown>, key: string): string[] {
  const raw = data[key];
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((x): x is string => typeof x === "string" && x.trim().length > 0)
    .map((s) => s.trim());
}

export function getSeriesBySlug(fileSlug: string): SeriesRecord | null {
  const file = path.join(SERIES_DIR, `${fileSlug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const source = fs.readFileSync(file, "utf8");
  const { data, content } = matter(source);
  const d = data as Record<string, unknown>;

  const slugRaw = d.slug;
  const slug =
    typeof slugRaw === "string" && slugRaw.trim()
      ? slugRaw.trim()
      : fileSlug;

  const title =
    typeof d.title === "string" && d.title.trim() ? d.title.trim() : slug;

  const desc =
    typeof d.description === "string" ? d.description.trim() : "";
  const sub =
    typeof d.subtitle === "string" ? d.subtitle.trim() : "";
  const description = desc || sub || "";

  const lede =
    typeof d.lede === "string" && d.lede.trim() ? d.lede.trim() : "";
  const ledeLine2 =
    typeof d.ledeLine2 === "string" && d.ledeLine2.trim()
      ? d.ledeLine2.trim()
      : "";
  const closing =
    typeof d.closing === "string" && d.closing.trim()
      ? d.closing.trim()
      : "";

  const coverIntro =
    typeof d.coverIntro === "string" && d.coverIntro.trim()
      ? d.coverIntro.trim()
      : undefined;
  const sequenceLead =
    typeof d.sequenceLead === "string" && d.sequenceLead.trim()
      ? d.sequenceLead.trim()
      : undefined;

  let threads = parseThreadList(d, "threads");
  if (!threads.length) threads = parseThreadList(d, "themes");

  const order =
    typeof d.order === "number" && Number.isFinite(d.order) ? d.order : 999;

  const note =
    typeof d.note === "string" && d.note.trim() ? d.note.trim() : undefined;

  const archiveYear =
    typeof d.archive_year === "string" && d.archive_year.trim()
      ? d.archive_year.trim()
      : undefined;
  const readingMood =
    typeof d.reading_mood === "string" && d.reading_mood.trim()
      ? d.reading_mood.trim()
      : undefined;
  const marginHint =
    typeof d.margin_hint === "string" && d.margin_hint.trim()
      ? d.margin_hint.trim()
      : undefined;
  const shelfAnnotation =
    typeof d.shelf_annotation === "string" && d.shelf_annotation.trim()
      ? d.shelf_annotation.trim()
      : undefined;

  const cover =
    typeof d.cover === "string" && d.cover.trim() ? d.cover.trim() : undefined;
  const tagline =
    typeof d.tagline === "string" && d.tagline.trim()
      ? d.tagline.trim()
      : undefined;

  return {
    slug,
    title,
    description,
    order,
    note,
    threads: threads.length ? threads : undefined,
    cover,
    tagline,
    coverIntro,
    lede,
    ledeLine2,
    closing,
    sequenceLead,
    archiveYear,
    readingMood,
    marginHint,
    shelfAnnotation,
    body: content.trim(),
  };
}

export function getAllSeries(): SeriesMeta[] {
  const rows = getSeriesSlugs()
    .map((slug) => {
      const s = getSeriesBySlug(slug);
      if (!s) return null;
      const { body, ...meta } = s;
      void body;
      return meta;
    })
    .filter((s): s is SeriesMeta => s !== null);

  return rows.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title);
  });
}
