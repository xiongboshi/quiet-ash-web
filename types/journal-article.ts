/** Journal detail page template — one data file per article slug. */

import type { JournalArticleFaq } from "@/types/journal-faq";

export type JournalArticleBreadcrumb = {
  label: string;
  href: string;
};

export type JournalTakeawayIconId = "leaf" | "brain" | "scent" | "shield";

export type JournalArticleHero = {
  breadcrumbs: readonly JournalArticleBreadcrumb[];
  categoryLabel: string;
  title: string;
  subtitle: string;
  readMinutes: number;
  updatedLabel: string;
  imageSrc: string;
  imageAlt: string;
};

export type JournalArticleQuickAnswer = {
  /** Single block (legacy) — use `paragraphs` when multiple lines are needed. */
  text?: string;
  paragraphs?: readonly string[];
};

export type JournalArticleTakeaway = {
  icon: JournalTakeawayIconId;
  text: string;
};

export type JournalArticleBullet = {
  /** Bold lead-in before em dash or rest of line */
  lead?: string;
  text: string;
};

export type JournalArticleBodyFormat = "editorial" | "guide";

export type JournalArticleSubsection = {
  heading?: string;
  paragraphs?: readonly string[];
  bullets?: readonly JournalArticleBullet[];
};

export type JournalArticleSection = {
  id: string;
  /** Omit for unnumbered sections (e.g. Intro). */
  number?: number;
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly JournalArticleBullet[];
  subsections?: readonly JournalArticleSubsection[];
};

export type JournalArticleProduct = {
  slug: string;
  title: string;
  rating: number;
  reviewCount: number;
  priceDisplay: string;
  imageSrc: string;
  imageAlt: string;
};

export type JournalArticleRelated = {
  slug: string;
  /** When set, used instead of `/journal/{slug}` (e.g. evergreen guides). */
  href?: string;
  title: string;
  readMinutes: number;
  imageSrc: string;
  imageAlt: string;
};

export type JournalArticleTemplate = {
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  /** `guide` = numbered sections + insight band; `editorial` = full essay prose */
  bodyFormat: JournalArticleBodyFormat;
  hero: JournalArticleHero;
  quickAnswer: JournalArticleQuickAnswer;
  /** Icon grid — omit when using `keyTakeawayBullets`. */
  keyTakeaways?: readonly JournalArticleTakeaway[];
  /** Simple bullet list under Key takeaways. */
  keyTakeawayBullets?: readonly string[];
  /** Optional intro block after insight band. */
  intro?: { paragraphs: readonly string[] };
  /** Guide layout only */
  sections: readonly JournalArticleSection[];
  /** Optional FAQ — omitted on articles without entries (e.g. sleep guide). */
  faq?: JournalArticleFaq;
  /** Editorial layout — flowing paragraphs from MDX */
  editorialParagraphs?: readonly string[];
  epigraph?: string;
  products: {
    heading: string;
    items: readonly JournalArticleProduct[];
  };
  related: {
    heading: string;
    items: readonly JournalArticleRelated[];
  };
  /** Optional disclaimer shown after related reading. */
  articleNote?: string;
};
