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
    imageSrc: "/images/generated/mood-poster-energy-citrus.png",
    imageAlt: "Energy mood — citrus with golden sunlight and water droplets",
    href: SHOP_INDEX,
  },
  {
    slug: "calm",
    label: "CALM",
    scentLine: "Jasmine · Peaceful",
    imageSrc: "/images/generated/mood-poster-calm-jasmine.png",
    imageAlt: "Calm mood — white jasmine blossoms on dewy marble",
    href: SHOP_INDEX,
  },
  {
    slug: "focus",
    label: "FOCUS",
    scentLine: "Lavender · Clear",
    imageSrc: "/images/generated/mood-poster-focus.png",
    imageAlt: "Focus mood incense with rose quartz crystal",
    href: SHOP_INDEX,
  },
  {
    slug: "romance",
    label: "ROMANCE",
    scentLine: "Rose · Floral",
    imageSrc: "/images/generated/mood-poster-focus.png",
    imageAlt: "Romance mood incense with rose quartz crystal",
    href: SHOP_INDEX,
  },
  {
    slug: "sleep",
    label: "SLEEP",
    scentLine: "Sandalwood · Deep",
    imageSrc: "/images/generated/mood-poster-sleep.png",
    imageAlt: "Sleep mood incense with amethyst crystal",
    href: SHOP_INDEX,
  },
];
