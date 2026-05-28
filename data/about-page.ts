import { MOODS_INDEX, SHOP_INDEX } from "@/lib/site-paths";

export const aboutPage = {
  hero: {
    eyebrow: "ABOUT QUIET ASH",
    title: "Better incense for everyday spaces.",
    descriptionLines: [
      "We create clean, modern scents with less smoke so you can enjoy",
      "the benefits of incense—anytime, anywhere.",
    ],
    features: [
      {
        id: "batch",
        title: "Small Batch",
        description: "Made in small batches for quality and consistency.",
        icon: "leaf" as const,
      },
      {
        id: "smoke",
        title: "Low Smoke",
        description: "Our formula minimizes smoke for cleaner air.",
        icon: "smoke" as const,
      },
      {
        id: "rated",
        title: "4.8 ★ Rated",
        description: "Loved by thousands of customers worldwide.",
        icon: "star" as const,
      },
      {
        id: "returns",
        title: "30-Day Returns",
        description: "Not the right fit? Return it within 30 days.",
        icon: "returns" as const,
      },
    ],
    cta: { label: "SHOP BEST SELLERS", href: SHOP_INDEX },
    imageSrc: "/images/generated/products/brass-incense-stand/atmosphere.webp",
    imageAlt: "Quiet Ash sandalwood incense with ceramic holder and packaging",
  },
  scentFamilies: {
    heading: "Explore scent families.",
    subheading: "Four scent families, designed to fit your mood and space.",
    exploreAll: { label: "EXPLORE ALL SCENTS →", href: SHOP_INDEX },
    families: [
      {
        id: "citrus",
        title: "Citrus",
        description: "Bright, fresh, and energizing. Great for focus and clarity.",
        cta: "SHOP CITRUS →",
        href: SHOP_INDEX,
        imageSrc: "/images/generated/best-sellers/citrus-grove-v5.webp",
        imageAlt: "Citrus scent family",
      },
      {
        id: "tea",
        title: "Tea",
        description: "Soft, clean, and comforting. Perfect for relaxation.",
        cta: "SHOP TEA →",
        href: SHOP_INDEX,
        imageSrc: "/images/generated/products/ceramic-tea-cup/atmosphere.webp",
        imageAlt: "Tea scent family",
      },
      {
        id: "wood",
        title: "Wood",
        description: "Warm, grounding, and steady. Ideal for calm and presence.",
        cta: "SHOP WOOD →",
        href: SHOP_INDEX,
        imageSrc: "/images/generated/products/wood-tray/gallery-01.webp",
        imageAlt: "Wood scent family",
      },
      {
        id: "floral",
        title: "Floral",
        description: "Light, airy, and soothing. Adds softness to any space.",
        cta: "SHOP FLORAL →",
        href: SHOP_INDEX,
        imageSrc: "/images/generated/best-sellers/white-jasmine-v3.webp",
        imageAlt: "Floral scent family",
      },
    ],
  },
  compare: {
    heading: "Why Quiet Ash is different.",
    subheading: "We rethought traditional incense for modern life.",
    cta: { label: "COMPARE FOR YOURSELF", href: SHOP_INDEX },
    columns: {
      us: "QUIET ASH",
      them: "TRADITIONAL INCENSE",
    },
    rows: [
      {
        id: "smoke",
        feature: "Less Smoke",
        icon: "smoke" as const,
        us: { positive: true, text: "Cleaner burn for better air." },
        them: { positive: false, text: "Often smoky and overwhelming." },
      },
      {
        id: "scent",
        feature: "Softer Scent",
        icon: "leaf" as const,
        us: { positive: true, text: "Balanced, not overpowering." },
        them: { positive: false, text: "Can be too strong or artificial." },
      },
      {
        id: "spaces",
        feature: "Made for Modern Spaces",
        icon: "home" as const,
        us: {
          positive: true,
          text: "Subtle scents that fit small homes and shared spaces.",
        },
        them: {
          positive: false,
          text: "Usually made for large, open areas.",
        },
      },
      {
        id: "beginner",
        feature: "Beginner Friendly",
        icon: "user" as const,
        us: {
          positive: true,
          text: "Easy to enjoy, even if you're new to incense.",
        },
        them: {
          positive: false,
          text: "Can feel intense for beginners.",
        },
      },
    ],
  },
  story: {
    eyebrow: "OUR STORY",
    title: "A quiet brand built for everyday spaces.",
    paragraphs: [
      "We started Quiet Ash with a simple belief: incense can be part of modern life when it's made with care.",
      "That's why we focus on clean ingredients, low smoke, and scents that feel lighter, softer, and easier to live with.",
      "Thank you for supporting small batch and intentional living.",
    ],
    signature: "The Quiet Ash Team",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Hands lighting a Quiet Ash incense stick at a calm table",
  },
  cta: {
    title: "Ready to find your scent?",
    description:
      "Explore our bestsellers or find the perfect scent for your space.",
    primary: { label: "SHOP BEST SELLERS", href: SHOP_INDEX },
    secondary: { label: "FIND YOUR SCENT", href: MOODS_INDEX },
  },
} as const;
