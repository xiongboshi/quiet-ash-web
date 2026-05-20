/** Homepage Best Sellers — 6-card product grid (1920 mockup) */

export type HomeBestSeller = {
  slug: string;
  title: string;
  scentNotes: string;
  priceDisplay: string;
  imageSrc: string;
  imageAlt: string;
};

export const homeBestSellers: HomeBestSeller[] = [
  {
    slug: "wood-tray",
    title: "CITRUS GROVE",
    scentNotes: "Lemon · Bergamot · Green Tea",
    priceDisplay: "$18.00",
    imageSrc: "/images/generated/products/wood-tray/hero.png",
    imageAlt: "Citrus Grove mood incense",
  },
  {
    slug: "brass-incense-stand",
    title: "WHITE JASMINE",
    scentNotes: "Jasmine · Lily · Musk",
    priceDisplay: "$18.00",
    imageSrc: "/images/generated/products/brass-incense-stand/hero.png",
    imageAlt: "White Jasmine mood incense",
  },
  {
    slug: "paper-incense-sleeve",
    title: "LAVENDER FIELD",
    scentNotes: "Lavender · Chamomile · Sage",
    priceDisplay: "$18.00",
    imageSrc: "/images/generated/products/paper-incense-sleeve/hero.png",
    imageAlt: "Lavender Field mood incense",
  },
  {
    slug: "ceramic-tea-cup",
    title: "ROSE GARDEN",
    scentNotes: "Rose · Geranium · Musk",
    priceDisplay: "$18.00",
    imageSrc: "/images/generated/products/ceramic-tea-cup/hero.png",
    imageAlt: "Rose Garden mood incense",
  },
  {
    slug: "small-agarwood-box",
    title: "SANDALWOOD NIGHT",
    scentNotes: "Sandalwood · Cedar · Amber",
    priceDisplay: "$18.00",
    imageSrc: "/images/generated/products/small-agarwood-box/hero.png",
    imageAlt: "Sandalwood Night mood incense",
  },
  {
    slug: "linen-cloth",
    title: "PEACH ORCHARD",
    scentNotes: "Peach · Apricot · Vanilla",
    priceDisplay: "$18.00",
    imageSrc: "/images/generated/products/linen-cloth/hero.png",
    imageAlt: "Peach Orchard mood incense",
  },
];
