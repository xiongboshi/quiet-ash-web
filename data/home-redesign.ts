import { SHOP_INDEX, JOURNAL_INDEX } from "@/lib/site-paths";
import { freeShippingOverOrdersCopy } from "@/lib/shipping-policy";

export type HomeBestSellerCard = {
  slug: string;
  title: string;
  scentNotes: string;
  priceDisplay: string;
  reviewCount: number;
  imageSrc: string;
  imageAlt: string;
  imageObjectPosition?: string;
};

export type HomeScentFamilyCard = {
  label: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export type HomeTrustItem = {
  id: string;
  title: string;
  description: string;
  icon: "hand" | "leaf" | "returns" | "shipping";
};

export type HomeStoryFeature = {
  title: string;
  description: string;
  icon: "craft" | "clean" | "support" | "packaging";
};

export const homeRedesign = {
  hero: {
    titleLines: ["Smells that", "help you slow down."],
    descriptionLines: [
      "Quiet Ash explores incense, rituals, and slower ways of living through calming atmospheres, emotional wellness, and sensory routines.",
    ],
    cta: { label: "SHOP BEST SELLERS", href: SHOP_INDEX },
    rating: { score: "4.8/5", value: 4.8, label: "from 2,000+ customers" },
    imageSrc: "/images/generated/mood-hero-ins-mockup-lock.png",
    imageAlt:
      "Quiet Ash citrus incense with lemons, flowers, and incense stick in warm light",
  },
  trust: [
    {
      id: "batch",
      title: "Small Batch",
      description: "Handmade",
      icon: "hand",
    },
    {
      id: "clean",
      title: "Clean Ingredients",
      description: "No harsh chemicals",
      icon: "leaf",
    },
    {
      id: "returns",
      title: "30-Day Returns",
      description: "Love it or return it",
      icon: "returns",
    },
    {
      id: "shipping",
      title: "Free Shipping",
      description: freeShippingOverOrdersCopy(),
      icon: "shipping",
    },
  ] satisfies HomeTrustItem[],
  bestSellers: {
    heading: "BEST SELLERS",
    viewAllLabel: "VIEW ALL PRODUCTS",
    viewAllHref: SHOP_INDEX,
    products: [
      {
        slug: "wood-tray",
        title: "Citrus Grove",
        scentNotes: "Lemon · Bergamot · Mandarin",
        priceDisplay: "$18.00",
        reviewCount: 276,
        imageSrc: "/images/generated/best-sellers/citrus-grove-v5.png",
        imageAlt: "Citrus Grove incense",
      },
      {
        slug: "brass-incense-stand",
        title: "White Jasmine",
        scentNotes: "Jasmine · Green Leaves · Lily",
        priceDisplay: "$18.00",
        reviewCount: 312,
        imageSrc: "/images/generated/best-sellers/white-jasmine-v3.png",
        imageAlt: "White Jasmine incense",
      },
      {
        slug: "small-agarwood-box",
        title: "Sandalwood & Fig",
        scentNotes: "Sandalwood · Fig · Amber",
        priceDisplay: "$18.00",
        reviewCount: 267,
        imageSrc: "/images/generated/best-sellers/sandalwood-night-v2.png",
        imageAlt: "Sandalwood and fig incense",
      },
      {
        slug: "paper-incense-sleeve",
        title: "Lavender & Linen",
        scentNotes: "Lavender · Cotton · Soft Musk",
        priceDisplay: "$18.00",
        reviewCount: 294,
        imageSrc: "/images/generated/best-sellers/lavender-field-v3.png",
        imageAlt: "Lavender and linen incense",
      },
      {
        slug: "ceramic-tea-cup",
        title: "Rose Garden",
        scentNotes: "Rose · Geranium · Palmarosa",
        priceDisplay: "$18.00",
        reviewCount: 246,
        imageSrc: "/images/generated/best-sellers/rose-garden-v3.png",
        imageAlt: "Rose Garden incense",
      },
    ] satisfies HomeBestSellerCard[],
  },
  exploreScents: {
    heading: "EXPLORE SCENTS",
    subheading: "Browse by scent families.",
    cta: { label: "BROWSE ALL SCENTS", href: SHOP_INDEX },
    families: [
      {
        label: "CITRUS",
        imageSrc: "/images/generated/best-sellers/citrus-grove-v5.png",
        imageAlt: "Citrus scent family",
        href: SHOP_INDEX,
      },
      {
        label: "FLORAL",
        imageSrc: "/images/generated/best-sellers/white-jasmine-v3.png",
        imageAlt: "Floral scent family",
        href: SHOP_INDEX,
      },
      {
        label: "TEA",
        imageSrc: "/images/generated/best-sellers/quiet-cloud-v3.png",
        imageAlt: "Tea scent family",
        href: SHOP_INDEX,
      },
      {
        label: "WOOD",
        imageSrc: "/images/generated/best-sellers/sandalwood-night-v2.png",
        imageAlt: "Wood scent family",
        href: SHOP_INDEX,
      },
      {
        label: "HERBAL",
        imageSrc: "/images/generated/best-sellers/lavender-field-v3.png",
        imageAlt: "Herbal scent family",
        href: SHOP_INDEX,
      },
    ] satisfies HomeScentFamilyCard[],
  },
  testimonials: {
    heading: "LOVED BY THOUSANDS",
    quotes: [
      ["This helps me unwind", "after a long day."],
      ["Finally something that", "actually helps me sleep."],
      ["Light, natural and not", "overpowering. Perfect."],
      ["My apartment feels so", "much calmer now."],
      ["Beautiful scents and", "thoughtful packaging."],
    ] as const,
  },
  ourStory: {
    eyebrow: "OUR STORY",
    title: "Built after burnout.",
    bodyLines: [
      "Quiet Ash was created for the nights",
      "when my mind wouldn't stop.",
      "Incense became my way back to calm,",
      "and now it can be yours too.",
    ] as const,
    cta: { label: "READ OUR STORY", href: "/about" },
    imageSrc: "/images/generated/mood-hero-ins-mockup-lock.png",
    imageAlt: "Woman lighting incense in a calm interior",
    features: [
      {
        title: "Handcrafted",
        description: "in small batches",
        icon: "craft",
      },
      {
        title: "Clean & Natural",
        description: "Ingredients you can trust",
        icon: "clean",
      },
      {
        title: "Made to Support",
        description: "Sleep, stress relief, focus",
        icon: "support",
      },
      {
        title: "Thoughtful Packaging",
        description: "Good for you and the planet",
        icon: "packaging",
      },
    ] satisfies HomeStoryFeature[],
  },
} as const;
