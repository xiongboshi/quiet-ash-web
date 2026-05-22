/** Homepage Best Sellers — 6-card product grid (1920 mockup) */

/** Default crop anchor — tune per card until box tops line up in the grid. */
export const bestSellerImageObjectPositionDefault = "50% 42%";

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
    imageSrc: "/images/generated/best-sellers/citrus-grove-v4.png",
    imageAlt: "Citrus Grove mood incense",
    imageObjectPosition: "50% calc(34% - 8px)",
  },
  {
    slug: "brass-incense-stand",
    title: "WHITE JASMINE",
    scentNotes: "Jasmine · White Floral · Green Leaves",
    priceDisplay: "$36.00",
    imageSrc: "/images/generated/best-sellers/white-jasmine-v2.png",
    imageAlt: "White Jasmine mood incense",
    imageObjectPosition: "50% calc(34% - 8px)",
  },
  {
    slug: "paper-incense-sleeve",
    title: "LAVENDER FIELD",
    scentNotes: "Lavender · Clary Sage · Chamomile",
    priceDisplay: "$36.00",
    imageSrc: "/images/generated/best-sellers/lavender-field-v2.png",
    imageAlt: "Lavender Field mood incense",
    imageObjectPosition: "50% calc(34% - 8px)",
  },
  {
    slug: "ceramic-tea-cup",
    title: "ROSE GARDEN",
    scentNotes: "Rose · Geranium · Palmarosa",
    priceDisplay: "$36.00",
    imageSrc: "/images/generated/best-sellers/rose-garden-v2.png",
    imageAlt: "Rose Garden mood incense",
    imageObjectPosition: "50% calc(34% - 8px)",
  },
  {
    slug: "small-agarwood-box",
    title: "SANDALWOOD NIGHT",
    scentNotes: "Sandalwood · Cedarwood · Patchouli",
    priceDisplay: "$36.00",
    imageSrc: "/images/generated/best-sellers/sandalwood-night-v2.png",
    imageAlt: "Sandalwood Night mood incense",
    imageObjectPosition: "50% calc(34% - 8px)",
  },
  {
    slug: "linen-cloth",
    title: "PEACH ORCHARD",
    scentNotes: "Peach · Apricot · Honey",
    priceDisplay: "$36.00",
    imageSrc: "/images/generated/best-sellers/peach-orchard-v2.png",
    imageAlt: "Peach Orchard mood incense",
    imageObjectPosition: "50% calc(34% - 8px)",
  },
];
