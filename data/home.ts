import { siteContact } from "@/data/site";
import { JOURNAL_INDEX, SHOP_INDEX } from "@/lib/site-paths";

/**
 * Homepage + chrome copy — data-driven; ritual bodies live in `content/rituals`.
 *
 * Collections (`data/collections.ts`) are internal taxonomy only — not a primary nav pillar.
 */

/** Homepage featured ritual — must match `content/rituals/*.mdx` */
export const homeFeaturedRitualSlug = "incense-before-writing" as const;

export const defaultHero = {
  imageSrc: "/images/generated/hero-cinematic.webp",
  /** Focal point — short stick incense + smoke; left lockup stays clear for type. */
  imagePosition: "62% 48%",
  /** Uppercase cadence — rendered below the display title in `Hero`. */
  kicker: "INCENSE · AGARWOOD · RITUAL · SMOKE",
  /** Reserved for overrides; default lockup is composed in `Hero`. */
  title: "Stillness shaped by incense",
  tagline:
    "A quiet archive for incense ritual, agarwood, and the slow life around smoke.",
  primaryCta: { label: "EXPLORE RITUALS", href: `/moods/${homeFeaturedRitualSlug}` },
  secondaryCta: { label: "Shop", href: SHOP_INDEX },
} as const;

export const defaultFeaturedRitual = {
  eyebrow: "Featured ritual",
  ctaLabel: "Enter the ritual",
} as const;

/** Mid-page philosophy — use `\n` in `line` for manual line breaks in `spec-quote`. */
export const defaultPhilosophyQuote = {
  line: "The quieter the room, \nthe more clearly you can hear what matters.",
} as const;

export const defaultRitualCarouselIntro = {
  eyebrow: "Incense rituals",
  title: "Small ceremonies of smoke and silence",
} as const;

export const defaultCollectionGridIntro = {
  eyebrow: "Curated atmospheres",
  title: "Collections",
  description:
    "Each shelf is a mood — evening, desk, rain, smoke — so objects arrive as companions to a life, not as impulse.",
} as const;

export const defaultCollectionsPageIntro = {
  eyebrow: "Internal atmospheres",
  title: "Collections",
  description:
    "Taxonomy for editors — the public site is organized as rituals, objects, and essays.",
} as const;

export const defaultFeaturedObjectsIntro = {
  eyebrow: "Incense objects",
  title: "Tools for ritual,\nmade with intention.",
  description:
    "Stands, agarwood, sleeves, and trays — composed for rooms where smoke marks the hour.",
  action: { label: "SHOP", href: SHOP_INDEX },
} as const;

export const defaultRitualBanner = {
  imageSrc: "/images/hero-objects.svg",
  eyebrow: "Dusk",
  title: "The room remembers how you leave it.",
  body: "Ash, smoke, and a thin thread of resin — the small evidence of a day lived without hurry.",
} as const;

export const defaultEssayGridIntro = {
  eyebrow: "FROM THE JOURNAL",
  title:
    "Thoughts on craft,\ntime, and the beauty\nof everyday rituals.",
  description: "Incense culture, agarwood, and the quiet authority of restraint.",
  action: { label: "VIEW ALL ESSAYS", href: "/journal" },
} as const;

export const defaultCollectionHighlight = {
  seriesSlug: "incense-culture",
  eyebrow: "Featured collection",
  tagline: "Ritual, restraint, and slower evenings.",
  ctaLabel: "View collection",
} as const;

export const defaultFooter = {
  title: "Quiet Ash",
  body: "Incense ritual for a quieter life.",
  columns: {
    shopTitle: "Shop",
    shop: [
      { label: "Shop", href: SHOP_INDEX },
      { label: "Journal", href: JOURNAL_INDEX },
    ],
    infoTitle: "Info",
    info: [
      { label: "ABOUT", href: "/about" },
      { label: "Delivery", href: "/delivery" },
      { label: "Care", href: "/care" },
      { label: "Returns", href: "/returns" },
      { label: "FAQ", href: "/faq" },
    ],
    contactTitle: "Contact",
    contactBlurb:
      "Orders, care, and quiet questions — we read every message by hand.",
    contactLinkTitle: "Contact us",
    followTitle: "Follow",
    follow: [
      { label: "Instagram", href: siteContact.instagram, external: true },
      { label: "Pinterest", href: siteContact.pinterest, external: true },
    ],
  },
  legal: "All rights reserved.",
} as const;
