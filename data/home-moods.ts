import { SHOP_INDEX } from "@/lib/site-paths";

/** Homepage mood grid — mockup order & overlay copy */
export type HomeMoodCard = {
  slug: string;
  label: string;
  scentLine: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export const homeMoodCards: HomeMoodCard[] = [
  {
    slug: "energy",
    label: "ENERGY",
    scentLine: "Citrus · Bright",
    imageSrc: "/images/generated/mood-poster-energy-citrus.webp",
    imageAlt: "Energy mood — citrus with golden sunlight and water droplets",
    href: SHOP_INDEX,
  },
  {
    slug: "calm",
    label: "CALM",
    scentLine: "Jasmine · Peaceful",
    imageSrc: "/images/generated/mood-poster-calm-jasmine.webp",
    imageAlt: "Calm mood — white jasmine blossoms on dewy marble",
    href: SHOP_INDEX,
  },
  {
    slug: "focus",
    label: "FOCUS",
    scentLine: "Lavender · Clear",
    imageSrc: "/images/generated/mood-poster-focus-lavender.webp",
    imageAlt: "Focus mood — lavender sprigs on dewy lilac surface",
    href: SHOP_INDEX,
  },
  {
    slug: "romance",
    label: "ROMANCE",
    scentLine: "Rose · Floral",
    imageSrc: "/images/generated/mood-poster-romance-rose.webp",
    imageAlt: "Romance mood — pink rose and petals on dewy blush surface",
    href: SHOP_INDEX,
  },
  {
    slug: "sleep",
    label: "SLEEP",
    scentLine: "Sandalwood · Deep",
    imageSrc: "/images/generated/mood-poster-sleep-white-blossom.webp",
    imageAlt: "Sleep mood — white blossom on dewy linen folds",
    href: SHOP_INDEX,
  },
];
