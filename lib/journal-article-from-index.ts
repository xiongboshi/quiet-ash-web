import type { JournalIndexArticleCard } from "@/data/journal-index-articles";
import type { JournalCategoryId, JournalTagId } from "@/data/journal-index";
import { homeRedesign } from "@/data/home-redesign";
import type {
  JournalArticleBullet,
  JournalArticleSection,
  JournalArticleTakeaway,
  JournalArticleTemplate,
  JournalTakeawayIconId,
} from "@/types/journal-article";
import { isJournalGuideArticle } from "@/data/journal-guide-slugs";
import { getProductBySlug } from "@/lib/catalog";
import { getEssayBySlug } from "@/lib/essays";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";
import { getJournalIndexArticleCards } from "@/lib/get-journal-index-articles";
import { formatPriceDisplay } from "@/lib/cart/pricing";
import { getHomeBestSellersProducts } from "@/lib/shop-best-sellers-home";

/** Module 3 body — matches editorial mock section order & ids */
const BODY_SECTION_META = [
  { id: "why-scents", heading: "Why Scents Affect Sleep" },
  { id: "best-scents", heading: "Best Incense Scents for Sleep" },
  { id: "what-to-avoid", heading: "What to Avoid" },
  { id: "how-to-use", heading: "How to Use Incense for Better Sleep" },
] as const;

const CATEGORY_BREADCRUMB: Record<
  Exclude<JournalCategoryId, "all" | "popular-questions">,
  string
> = {
  "better-sleep": "Better Sleep",
  "small-space-living": "Small Space Living",
  "calm-evenings": "Calm Evenings",
  "quiet-routines": "Quiet Routines",
  "guides-care": "Guides & Care",
  "cozy-home": "Cozy Home",
};

const TAG_TAKEAWAY_ICON: Record<JournalTagId, JournalTakeawayIconId> = {
  sleep: "leaf",
  "stress-relief": "shield",
  focus: "brain",
  meditation: "scent",
  "morning-routine": "scent",
  relaxation: "leaf",
};

const DEFAULT_TAKEAWAY_ICONS: readonly JournalTakeawayIconId[] = [
  "leaf",
  "brain",
  "scent",
  "shield",
];

/** Fallback copy when MDX prose has fewer than four distinct English lines. */
const TAG_TAKEAWAY_BLURB: Record<JournalTagId, string> = {
  sleep: "Soft, low-stimulation scents support winding down before bed.",
  "stress-relief": "Gentle aromas can ease tension without overwhelming the room.",
  focus: "Clear, steady scents help settle attention for reading or desk work.",
  meditation: "A single stick offers a fixed pace for breath and attention.",
  "morning-routine": "Light smoke marks a small threshold between sleep and the day.",
  relaxation: "Restraint in fragrance leaves room for quiet rather than performance.",
};

function truncateTakeawayText(text: string): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= 180) return t;
  return `${t.slice(0, 177)}…`;
}

function uniqueTakeawayCandidates(prose: string, description: string): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const add = (raw: string) => {
    const t = raw.replace(/\s+/g, " ").trim();
    if (!t || seen.has(t)) return;
    seen.add(t);
    out.push(t);
  };
  for (const sentence of sentencesFromProse(prose)) add(sentence);
  add(description);
  return out;
}

function formatUpdatedLabel(isoDate: string): string {
  const d = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(d.getTime())) return "Updated recently";
  return `Updated ${d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`;
}

function isMostlyCjk(text: string): boolean {
  const cjk = text.match(/[\u4e00-\u9fff]/gu)?.length ?? 0;
  return cjk > text.length * 0.25;
}

function normalizeEditorialParagraph(text: string): string {
  return text
    .replace(/\s+/gu, " ")
    .replace(/,\s*\./gu, ".")
    .replace(/\s+\./gu, ".")
    .replace(/\.\s*\./gu, ".")
    .trim();
}

/** Poetic MDX lines → flowing editorial paragraphs (grouped for readable prose). */
export function editorialParagraphsFromMdx(body: string): string[] {
  let cut = body;
  const breakAt = cut.indexOf("<QuietBreak>");
  if (breakAt >= 0) cut = cut.slice(0, breakAt);
  cut = cut.replace(/<[^>]+>/gu, "");

  const lines: string[] = [];
  for (const line of cut.split("\n")) {
    const t = line.trim();
    if (!t || isMostlyCjk(t)) continue;
    lines.push(/[.!?]$/.test(t) ? t : `${t}.`);
  }

  if (lines.length === 0) return [];

  const linesPerParagraph = 6;
  const paragraphs: string[] = [];
  for (let i = 0; i < lines.length; i += linesPerParagraph) {
    const chunk = lines.slice(i, i + linesPerParagraph);
    paragraphs.push(normalizeEditorialParagraph(chunk.join(" ")));
  }

  return paragraphs;
}

/** Poetic MDX lines → one prose string (each line becomes a sentence). */
export function englishProseFromMdx(body: string): string {
  let cut = body;
  const breakAt = cut.indexOf("<QuietBreak>");
  if (breakAt >= 0) cut = cut.slice(0, breakAt);
  cut = cut.replace(/<[^>]+>/gu, "");

  const lines: string[] = [];
  for (const line of cut.split("\n")) {
    const t = line.trim();
    if (!t || isMostlyCjk(t)) continue;
    lines.push(t);
  }

  if (lines.length === 0) return "";

  return lines
    .map((line) => (/[.!?]$/.test(line) ? line : `${line}.`))
    .join(" ");
}

function sentencesFromProse(prose: string): string[] {
  const trimmed = prose.trim();
  if (!trimmed) return [];

  const parts = trimmed
    .split(/(?<=[.!?])\s+/u)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  return parts.length > 0 ? parts : [trimmed];
}

function joinSentences(sentences: readonly string[]): string {
  return sentences.join(" ").replace(/\s+/gu, " ").trim();
}

function bulletsFromSentences(
  sentences: readonly string[],
  withLeads: boolean,
): JournalArticleBullet[] {
  return sentences.map((line) => {
    if (!withLeads) return { text: line };
    const dash = line.match(/^([A-Za-z][A-Za-z\s]{0,24})\s*[-–—]\s*(.+)$/u);
    if (dash) return { lead: dash[1].trim(), text: dash[2].trim() };
    const words = line.split(/\s+/u);
    if (words.length > 6) {
      return { lead: words.slice(0, 2).join(" "), text: words.slice(2).join(" ") };
    }
    return { text: line };
  });
}

/** Four sections like the body mock: ¶ / ¶+list / ¶+list / ¶ */
function buildBodySections(quickAnswer: string, prose: string): JournalArticleSection[] {
  const sentences = sentencesFromProse(prose);
  const pool = sentences.length > 0 ? sentences : [quickAnswer];
  const n = pool.length;

  const c1 = Math.max(1, Math.min(3, Math.round(n * 0.18)));
  const c2 = Math.max(4, Math.min(6, Math.round(n * 0.28)));
  const c3 = Math.max(2, Math.min(4, Math.round(n * 0.18)));

  let cursor = 0;
  const slice = (count: number) => {
    const part = pool.slice(cursor, cursor + count);
    cursor += count;
    return part;
  };

  const s1 = joinSentences(slice(c1));
  const s2Pool = slice(c2);
  const s3Pool = slice(c3);
  const s4 = joinSentences(pool.slice(cursor));

  const sec2Intro =
    s2Pool.length > 4 ? joinSentences(s2Pool.slice(0, 1)) : undefined;
  const sec2Bullets = bulletsFromSentences(
    s2Pool.length > 4 ? s2Pool.slice(1) : s2Pool,
    false,
  );

  const sec3Intro =
    s3Pool.length > 2 ? joinSentences(s3Pool.slice(0, 1)) : undefined;
  const sec3Bullets = bulletsFromSentences(
    s3Pool.length > 2 ? s3Pool.slice(1) : s3Pool,
    false,
  );

  return BODY_SECTION_META.map((meta, index) => {
    const number = index + 1;

    if (index === 0) {
      return {
        id: meta.id,
        number,
        heading: meta.heading,
        paragraphs: [s1 || quickAnswer],
      };
    }

    if (index === 1) {
      const intro =
        sec2Intro ?? (sec2Bullets.length > 1 ? joinSentences(s2Pool.slice(0, 1)) : undefined);
      return {
        id: meta.id,
        number,
        heading: meta.heading,
        paragraphs: intro ? [intro] : undefined,
        bullets:
          sec2Bullets.length > 0
            ? sec2Bullets
            : [{ text: joinSentences(s2Pool) || quickAnswer }],
      };
    }

    if (index === 2) {
      return {
        id: meta.id,
        number,
        heading: meta.heading,
        paragraphs: sec3Intro ? [sec3Intro] : undefined,
        bullets:
          sec3Bullets.length > 0
            ? sec3Bullets
            : [{ text: joinSentences(s3Pool) || quickAnswer }],
      };
    }

    return {
      id: meta.id,
      number,
      heading: meta.heading,
      paragraphs: [s4 || quickAnswer],
    };
  });
}

function buildTakeaways(
  card: JournalIndexArticleCard,
  prose: string,
): JournalArticleTemplate["keyTakeaways"] {
  const candidates = uniqueTakeawayCandidates(prose, card.description);
  const padTags: JournalTagId[] = [
    "relaxation",
    "focus",
    "meditation",
    "sleep",
    "stress-relief",
    "morning-routine",
  ];
  const tags = [...card.tags];
  while (tags.length < 4) {
    tags.push(padTags[tags.length % padTags.length]!);
  }

  const used = new Set<string>();
  const blurbs = Object.values(TAG_TAKEAWAY_BLURB);
  const takeaways: JournalArticleTakeaway[] = [];

  for (let i = 0; i < 4; i++) {
    const tag = tags[i]!;
    const icon = TAG_TAKEAWAY_ICON[tag] ?? DEFAULT_TAKEAWAY_ICONS[i] ?? "leaf";

    let text =
      candidates[i] ??
      candidates.find((c) => !used.has(c)) ??
      TAG_TAKEAWAY_BLURB[tag] ??
      blurbs.find((b) => !used.has(b));

    if (!text || used.has(text)) {
      text = blurbs.find((b) => !used.has(b)) ?? candidates[0] ?? card.description;
    }

    text = truncateTakeawayText(text);
    used.add(text);
    takeaways.push({ icon, text });
  }

  return takeaways;
}

function defaultProducts(): JournalArticleTemplate["products"] {
  const items = getHomeBestSellersProducts().slice(0, 4);
  return {
    heading: "Recommended Incense",
    items: items.map((p: (typeof items)[number]) => ({
      slug: p.slug,
      title: p.title,
      rating: 4.5,
      reviewCount: p.reviewCount,
      priceDisplay: p.priceDisplay,
      imageSrc: p.imageSrc,
      imageAlt: p.imageAlt,
    })),
  };
}

function productsFromSlugs(
  slugs: readonly string[],
): JournalArticleTemplate["products"] {
  const items = slugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 4)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      rating: 4.5,
      reviewCount: 120,
      priceDisplay: formatPriceDisplay(p.priceDisplay ?? ""),
      imageSrc: p.image,
      imageAlt: p.title,
    }));

  if (!items.length) return defaultProducts();
  return { heading: "Recommended Incense", items };
}

function buildRelated(
  slug: string,
  relatedSlugs?: readonly string[],
): JournalArticleTemplate["related"] {
  const cards = getJournalIndexArticleCards();
  const bySlug = new Map(cards.map((c) => [c.slug, c]));

  let peers = cards.filter((c) => c.slug !== slug).slice(0, 4);

  if (relatedSlugs?.length) {
    const picked = relatedSlugs
      .map((s) => bySlug.get(s))
      .filter(
        (c): c is (typeof cards)[number] =>
          c !== undefined && c.slug !== slug,
      )
      .slice(0, 4);
    if (picked.length) peers = picked;
  }

  return {
    heading: "Related Articles",
    items: peers.map((c) => ({
      slug: c.slug,
      title: c.title,
      readMinutes: c.readMinutes,
      imageSrc: c.imageSrc,
      imageAlt: c.imageAlt,
    })),
  };
}

/** Fill `JournalArticleTemplate` from index card + optional `content/essays` MDX body. */
export function buildJournalArticleFromIndexCard(
  card: JournalIndexArticleCard,
): JournalArticleTemplate {
  const essay = getEssayBySlug(card.slug);
  const quickAnswer = essay?.excerpt?.trim() || card.description.trim();
  const prose = essay ? englishProseFromMdx(essay.body) : quickAnswer;
  const isGuide = isJournalGuideArticle(card.slug);
  const editorialParagraphs = editorialParagraphsFromMdx(essay?.body ?? "");
  const sections = isGuide ? buildBodySections(quickAnswer, prose) : [];
  const categoryCrumb = CATEGORY_BREADCRUMB[card.categoryId];

  return {
    slug: card.slug,
    bodyFormat: isGuide ? "guide" : "editorial",
    seoTitle: card.seoTitle,
    seoDescription: card.description,
    hero: {
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Journal", href: JOURNAL_INDEX },
        {
          label: categoryCrumb,
          href: journalPath(card.categoryId),
        },
        { label: card.headline, href: journalPath(card.slug) },
      ],
      categoryLabel: card.categoryLabel,
      title: card.headline,
      subtitle: card.description,
      readMinutes: card.readMinutes,
      updatedLabel: formatUpdatedLabel(card.date),
      imageSrc: card.imageSrc,
      imageAlt: card.imageAlt,
    },
    quickAnswer: { text: quickAnswer },
    keyTakeaways: buildTakeaways(card, prose),
    sections,
    editorialParagraphs:
      editorialParagraphs.length > 0 ? editorialParagraphs : [quickAnswer],
    epigraph: essay?.epigraph?.trim() || undefined,
    products: essay?.journal?.productSlugs?.length
      ? productsFromSlugs(essay.journal.productSlugs)
      : defaultProducts(),
    related: buildRelated(card.slug, essay?.journal?.relatedSlugs),
  };
}
