import { MOODS_INDEX, SHOP_INDEX } from "@/lib/site-paths";

/** Homepage — 1920 mockup copy & assets */

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
  siteTitle: "QUIET ASH",
  siteSubtitle: "INCENSE",
  nav: {
    left: [
      { label: "SHOP", href: SHOP_INDEX },
      { label: "MOODS", href: MOODS_INDEX },
      { label: "BEST SELLERS", href: "#best-sellers" },
      { label: "ABOUT", href: "/about" },
    ],
    right: [
      { label: "SEARCH", href: SHOP_INDEX },
      { label: "ACCOUNT", href: "/account" },
    ],
  },
  hero: {
    backgroundSrc: "/images/generated/mood-hero-ins-mockup-lock.png",
    /** Bust Next/browser cache when hero asset is replaced */
    backgroundVersion: "20260521-mockup",
    backgroundAlt:
      "Quiet Ash hero: woman at window, 15cm pack and small crystal holder on white marble table",
    objectPosition: "52% 50%",
    eyebrow: "NATURAL INCENSE",
    titleLines: ["SCENTS THAT", "STAY WITH YOU."] as const,
    description:
      "For slow mornings, quiet nights,\nand everything in between.",
    cta: { label: "SHOP COLLECTION →", href: SHOP_INDEX },
    promoBadge: {
      lines: ["NEW", "FRUITY", "COLLECTION"] as const,
      href: SHOP_INDEX,
    },
    title: "Tiny rituals for soft living.",
    subtitleLines: [
      "Mood incense for modern life.",
      "Light a moment, reset your space.",
    ] as const,
    badge: "10.5cm short sticks",
    features: [
      { title: "PLANT-BASED", subtitle: "100% Natural" },
      { title: "NON-TOXIC", subtitle: "Clean & Safe" },
      { title: "HANDMADE", subtitle: "With Care" },
      { title: "SUSTAINABLE", subtitle: "Eco Packaging" },
    ] as const,
    slides: [
      {
        backgroundSrc: "/images/generated/mood-hero-ins-mockup-lock.png",
        backgroundAlt:
          "Quiet Ash hero: woman at window, 15cm pack and small crystal holder on white marble table",
        objectPosition: "52% 50%",
      },
      {
        backgroundSrc: "/images/generated/mood-hero-still-life.png",
        backgroundAlt: "Editorial still life: incense with soft smoke",
        objectPosition: "68% 52%",
      },
      {
        backgroundSrc: "/images/generated/mood-hero-slide-03-sleep.png",
        backgroundAlt: "Moon Sleep mood incense: lilac pack, purple amethyst crystal",
        objectPosition: "68% 52%",
      },
    ] as const,
    autoplayIntervalMs: 6500,
  },
  moods: {
    heading: "CHOOSE YOUR MOOD",
    eyebrow: "Choose your mood",
    viewAllLabel: "VIEW ALL MOODS →",
    viewAllHref: MOODS_INDEX,
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
  fruity: {
    eyebrow: "NEW ARRIVAL",
    titleLines: ["FRUITY", "COLLECTION"] as const,
    description: "Juicy scents.\nGood vibes.",
    cta: { label: "EXPLORE NOW →", href: SHOP_INDEX },
    /** Shot-lock — mood-hero-fruity-collection-lock-v6.png */
    imageSrc: "/images/generated/mood-hero-fruity-collection-lock-v6.png",
    imageAlt: "Fruity collection mood incense still life",
  },
  bestSellers: {
    heading: "BEST SELLERS",
    viewAllLabel: "VIEW ALL BEST SELLERS →",
    viewAllHref: SHOP_INDEX,
  },
  footer: [
    { title: "FREE SHIPPING", body: "On orders over $68" },
    { title: "SHIPS IN 3–5 DAYS", body: "Unhurried fulfillment from our studio" },
    { title: "SECURE PAYMENT", body: "Safe checkout" },
    { title: "JOIN OUR JOURNEY", body: "hello@quietash.life" },
  ] as const,
} as const;
