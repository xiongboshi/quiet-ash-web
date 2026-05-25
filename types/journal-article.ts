/** Journal detail page template — one data file per article slug. */

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
  text: string;
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

export type JournalArticleSection = {
  id: string;
  number: number;
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly JournalArticleBullet[];
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
  keyTakeaways: readonly JournalArticleTakeaway[];
  /** Guide layout only */
  sections: readonly JournalArticleSection[];
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
};
