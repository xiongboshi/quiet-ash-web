import { SHOP_INDEX } from "@/lib/site-paths";
import {
  freeShippingOnOrdersOverCopy,
  freeShippingOverOrdersCopy,
} from "@/lib/shipping-policy";

/** Homepage — 1920 mockup copy & assets */

export const bestSellerEditorial: Record<
  string,
  { mood: string; scentNotes: string }
> = {
  "wood-tray": {
    mood: "Energy",
    scentNotes: "Lemon · Bergamot · Mandarin",
  },
  "brass-incense-stand": {
    mood: "Calm",
    scentNotes: "Jasmine · White Floral · Green Leaves",
  },
  "paper-incense-sleeve": {
    mood: "Focus",
    scentNotes: "Lavender · Clary Sage · Chamomile",
  },
  "ceramic-tea-cup": {
    mood: "Rainy Day",
    scentNotes: "Rose · Geranium · Palmarosa",
  },
  "small-agarwood-box": {
    mood: "Calm",
    scentNotes: "White Tea · Fig · Musk",
  },
  "linen-cloth": {
    mood: "Calm",
    scentNotes: "Peach · Neroli · White Musk",
  },
};

export const brandHome = {
  promo: freeShippingOnOrdersOverCopy(),
  siteTitle: "QUIET ASH",
  siteSubtitle: "INCENSE",
  hero: {
    backgroundSrc: "/images/generated/mood-hero-ins-mockup-lock.webp",
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
        backgroundSrc: "/images/generated/mood-hero-ins-mockup-lock.webp",
        backgroundAlt:
          "Quiet Ash hero: woman at window, 15cm pack and small crystal holder on white marble table",
        objectPosition: "52% 50%",
      },
      {
        backgroundSrc: "/images/generated/mood-hero-still-life.webp",
        backgroundAlt: "Editorial still life: incense with soft smoke",
        objectPosition: "68% 52%",
      },
      {
        backgroundSrc: "/images/generated/mood-hero-slide-03-sleep.webp",
        backgroundAlt: "Moon Sleep mood incense: lilac pack, purple amethyst crystal",
        objectPosition: "68% 52%",
      },
    ] as const,
    autoplayIntervalMs: 6500,
  },
  moods: {
    heading: "CHOOSE YOUR MOOD",
    eyebrow: "Choose your mood",
    viewAllLabel: "SHOP ALL →",
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
  fruity: {
    eyebrow: "NEW ARRIVAL",
    titleLines: ["FRUITY", "COLLECTION"] as const,
    description: "Juicy scents.\nGood vibes.",
    cta: { label: "EXPLORE NOW →", href: SHOP_INDEX },
    /** Shot-lock — mood-hero-fruity-collection-lock-v6.webp */
    imageSrc: "/images/generated/mood-hero-fruity-collection-lock-v6.webp",
    imageAlt: "Fruity collection mood incense still life",
  },
  bestSellers: {
    heading: "BEST SELLERS",
    viewAllLabel: "VIEW ALL BEST SELLERS →",
    viewAllHref: SHOP_INDEX,
  },
  footer: [
    { title: "FREE SHIPPING", body: freeShippingOverOrdersCopy() },
    { title: "SHIPS IN 3–5 DAYS", body: "Unhurried fulfillment from our studio" },
    { title: "SECURE PAYMENT", body: "Safe checkout" },
    { title: "JOIN OUR JOURNEY", body: "hello@quietash.life" },
  ] as const,
} as const;
