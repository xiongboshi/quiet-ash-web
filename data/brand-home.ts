import { SHOP_INDEX } from "@/lib/site-paths";

/** Mood-brand homepage copy. See QUIET-ASH-VISUAL-ART-DIRECTION-LOCK v1 */

export const bestSellerEditorial: Record<
  string,
  { mood: string; scentNotes: string }
> = {
  "brass-incense-stand": {
    mood: "Calm",
    scentNotes: "White tea · Cedar · Rain",
  },
  "paper-incense-sleeve": {
    mood: "Focus",
    scentNotes: "Ink · Sandalwood · Quiet air",
  },
  "small-agarwood-box": {
    mood: "Sleep",
    scentNotes: "Resin · Warm wood · Dusk",
  },
  "wood-tray": {
    mood: "Energy",
    scentNotes: "Citrus peel · Green tea · Sun",
  },
  "ceramic-tea-cup": {
    mood: "Rainy Day",
    scentNotes: "Wet stone · Rice · Steam",
  },
  "linen-cloth": {
    mood: "Calm",
    scentNotes: "Linen · Soft musk · Morning",
  },
};

export const brandHome = {
  promo: "Free shipping on orders over $50",
  siteTitle: "Quiet Ash",
  siteSubtitle: "Mood Incense",
  hero: {
    title: "Tiny rituals for soft living.",
    subtitleLines: [
      "Mood incense for modern life.",
      "Light a moment, reset your space.",
    ] as const,
    cta: { label: "Shop the moods", href: SHOP_INDEX },
    slides: [
      {
        backgroundSrc: "/images/generated/mood-hero-slide-01-citrus.png",
        backgroundAlt:
          "Citrus Reset mood incense: horizontal yellow pack, green crystal holder, S-curve smoke, floating dewy lemons on warm ivory marble, 4pm sunlight",
      },
      {
        backgroundSrc: "/images/generated/mood-hero-still-life.png",
        backgroundAlt:
          "Editorial still life: incense with soft smoke, warm daylight and citrus on cream surface",
      },
      {
        backgroundSrc: "/images/generated/hero-cinematic02.png",
        backgroundAlt:
          "Quiet Ash mood incense in warm cinematic daylight with soft shadows",
      },
    ] as const,
    badge: "10.5cm short sticks",
    autoplayIntervalMs: 6500,
  },
  moods: {
    eyebrow: "Choose your mood",
  },
  bestSellers: {
    heading: "Best sellers",
    viewAllLabel: "View all",
    viewAllHref: SHOP_INDEX,
  },
  moments: {
    heading: "Made for your moments",
  },
  philosophy: {
    body: "We create modern incense for emotional spaces. Tiny rituals to help you reset, breathe, and live more softly.",
    cta: { label: "Our story", href: "/about" },
  },
  social: {
    eyebrow: "Follow our journey",
    handle: "@quietash.incense",
    instagramCta: "View on Instagram",
  },
} as const;
