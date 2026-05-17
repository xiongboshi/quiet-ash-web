import { siteContact } from "@/data/site";

/**
 * Homepage + chrome copy — data-driven; ritual bodies live in `content/rituals`.
 *
 * Collections (`data/collections.ts`) are internal taxonomy only — not a primary nav pillar.
 */

/** Homepage featured ritual — must match `content/rituals/*.mdx` */
export const homeFeaturedRitualSlug = "evening-room-ritual" as const;

export const defaultHero = {
  imageSrc: "/images/generated/hero-cinematic.png",
  /** Focal point — incense / vase cluster; left lockup stays clear for type. */
  imagePosition: "63% 58%",
  /** Uppercase cadence — rendered below the display title in `Hero`. */
  kicker: "INCENSE · TEAWARE · TEXTILES · OBJECTS",
  /** Reserved for overrides; default lockup is composed in `Hero`. */
  title: "Objects that shape stillness",
  tagline:
    "A quiet archive for Eastern slow living — ritual first, objects held inside it.",
  primaryCta: { label: "EXPLORE RITUALS", href: "/rituals" },
  secondaryCta: { label: "View objects", href: "/objects" },
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
  eyebrow: "Rituals",
  title: "Small ceremonies for the day",
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
  eyebrow: "Objects",
  title: "Timeless objects,\nmade with intention.",
  description:
    "Weight, edge, material — each piece composed for rooms that soften at night.",
  action: { label: "VIEW ALL OBJECTS", href: "/objects" },
} as const;

export const defaultRitualBanner = {
  imageSrc: "/images/hero-objects.svg",
  eyebrow: "Dusk",
  title: "The room remembers how you leave it.",
  body: "Ash, steam, folded cloth — the small evidence of a day lived without hurry.",
} as const;

export const defaultEssayGridIntro = {
  eyebrow: "FROM THE JOURNAL",
  title:
    "Thoughts on craft,\ntime, and the beauty\nof everyday rituals.",
  description: "Philosophy, culture, and the quiet authority of restraint.",
  action: { label: "VIEW ALL ESSAYS", href: "/essays" },
} as const;

export const defaultCollectionHighlight = {
  seriesSlug: "incense-culture",
  eyebrow: "Featured collection",
  tagline: "Ritual, restraint, and slower evenings.",
  ctaLabel: "View collection",
} as const;

export const defaultFooter = {
  title: "Quiet Ash",
  body: "Objects for a quieter life.",
  columns: {
    shopTitle: "Shop",
    shop: [
      { label: "Shop", href: "/objects" },
      { label: "Rituals", href: "/rituals" },
      { label: "Objects", href: "/objects" },
      { label: "Textiles", href: "/objects" },
      { label: "Gift card", href: "/objects" },
    ],
    infoTitle: "Info",
    info: [
      { label: "Info", href: "/about" },
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
