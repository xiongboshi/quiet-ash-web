/** Homepage Best Sellers — 6-card product grid (1920 mockup) */

/** Pack shots — 681×1024 (2:3). Cards use aspect-ratio 2/3 + object-contain for full frame. */
export const bestSellerImageAspectRatio = "2 / 3" as const;
export const bestSellerImageObjectPositionDefault = "50% 50%";

export type HomeBestSeller = {
  slug: string;
  title: string;
  scentNotes: string;
  priceDisplay: string;
  imageSrc: string;
  imageAlt: string;
  /** Vertical crop tweak when source framing differs (object-position). */
  imageObjectPosition: string;
};

export const homeBestSellers: HomeBestSeller[] = [
  {
    slug: "wood-tray",
    title: "CITRUS GROVE",
    scentNotes: "Lemon · Bergamot · Mandarin",
    priceDisplay: "$36.00",
    imageSrc: "/images/generated/best-sellers/citrus-grove-v5.png",
    imageAlt: "Citrus Grove mood incense",
    imageObjectPosition: "50% 50%",
  },
  {
    slug: "brass-incense-stand",
    title: "WHITE JASMINE",
    scentNotes: "Jasmine · White Floral · Green Leaves",
    priceDisplay: "$36.00",
    imageSrc: "/images/generated/best-sellers/white-jasmine-v3.png",
    imageAlt: "White Jasmine mood incense",
    imageObjectPosition: "50% 50%",
  },
  {
    slug: "paper-incense-sleeve",
    title: "LAVENDER FIELD",
    scentNotes: "Lavender · Clary Sage · Chamomile",
    priceDisplay: "$36.00",
    imageSrc: "/images/generated/best-sellers/lavender-field-v3.png",
    imageAlt: "Lavender Field mood incense",
    imageObjectPosition: "50% 50%",
  },
  {
    slug: "ceramic-tea-cup",
    title: "ROSE GARDEN",
    scentNotes: "Rose · Geranium · Palmarosa",
    priceDisplay: "$36.00",
    imageSrc: "/images/generated/best-sellers/rose-garden-v3.png",
    imageAlt: "Rose Garden mood incense",
    imageObjectPosition: "50% 50%",
  },
  {
    slug: "small-agarwood-box",
    title: "QUIET CLOUD",
    scentNotes: "White Tea · Fig · Musk",
    priceDisplay: "$36.00",
    imageSrc: "/images/generated/best-sellers/quiet-cloud-v3.png",
    imageAlt: "Quiet Cloud mood incense",
    imageObjectPosition: "50% 50%",
  },
  {
    slug: "linen-cloth",
    title: "PEACH ORCHARD",
    scentNotes: "Peach · Neroli · White Musk",
    priceDisplay: "$36.00",
    imageSrc: "/images/generated/best-sellers/peach-orchard-v3.png",
    imageAlt: "Peach Orchard mood incense",
    imageObjectPosition: "50% 50%",
  },
];
