/** Mood-brand homepage copy. See docs/QUIET-ASH-BRAND-DIRECTION.md */

export const brandHome = {
  promo: "Free shipping on orders over $50",
  siteTitle: "Quiet Ash",
  siteSubtitle: "Mood Incense",
  hero: {
    title: "Tiny rituals for soft living.",
    cta: { label: "Shop the moods", href: "/objects" },
    imageSrc: "/images/generated/products/ceramic-tea-cup/hero.png",
    imageAlt: "Soft morning lifestyle incense moment",
  },
  moods: {
    eyebrow: "Choose your mood",
    title: "How do you want to feel?",
  },
  bestSellers: {
    eyebrow: "Best sellers",
    title: "Most loved right now",
  },
  moments: {
    eyebrow: "Made for your moments",
    title: "Soft rituals for real days",
    items: [
      { label: "Slow mornings", image: "/images/generated/products/linen-cloth/hero.png" },
      { label: "Focus time", image: "/images/generated/products/wood-tray/hero.png" },
      { label: "Bath & unwind", image: "/images/generated/products/paper-incense-sleeve/hero.png" },
      { label: "Rainy days", image: "/images/generated/products/ceramic-tea-cup/gallery-02.png" },
      { label: "Before bed", image: "/images/generated/products/small-agarwood-box/hero.png" },
    ],
  },
  philosophy: {
    title: "We create modern incense for emotional spaces.",
    body: "Not tradition for tradition's sake — small rituals that match how you actually live.",
    cta: { label: "Our story", href: "/about" },
  },
  social: {
    eyebrow: "Follow our journey",
    handle: "@quietash.life",
    href: "https://instagram.com",
  },
} as const;
