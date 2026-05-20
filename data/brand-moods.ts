import { SHOP_INDEX } from "@/lib/site-paths";

/** Mood merchandising — poster cards (Choose Your Mood). */

export type MoodIconId =
  | "calm"
  | "energy"
  | "sleep"
  | "focus"
  | "rainy-day";

export type BrandMood = {
  slug: string;
  label: string;
  tagline: string;
  /** Solid poster fill — mockup pastels */
  posterBg: string;
  icon: MoodIconId;
  imageSrc: string;
  imageAlt: string;
  /** Portrait lifestyle crops — keep subject clear under left copy */
  imageObjectPosition?: string;
  href: string;
};

export const brandMoods: BrandMood[] = [
  {
    slug: "calm",
    label: "Calm",
    tagline: "Find peace in the little moments.",
    posterBg: "#c5d6c3",
    icon: "calm",
    imageSrc: "/images/generated/mood-poster-calm-jasmine.png",
    imageAlt: "Calm mood — white jasmine blossoms on dewy marble",
    imageObjectPosition: "68% 72%",
    href: SHOP_INDEX,
  },
  {
    slug: "energy",
    label: "Energy",
    tagline: "Bright mood. Boost your good vibes.",
    posterBg: "#f2e8a8",
    icon: "energy",
    imageSrc: "/images/generated/mood-poster-energy-citrus.png",
    imageAlt: "Energy mood — citrus with golden sunlight and water droplets",
    imageObjectPosition: "68% 72%",
    href: SHOP_INDEX,
  },
  {
    slug: "sleep",
    label: "Sleep",
    tagline: "Slow down and drift into dream.",
    posterBg: "#d8cfe8",
    icon: "sleep",
    imageSrc: "/images/generated/mood-poster-sleep.png",
    imageAlt: "Purple amethyst crystal incense holder on lavender pastel, Sleep mood",
    imageObjectPosition: "68% 72%",
    href: SHOP_INDEX,
  },
  {
    slug: "focus",
    label: "Focus",
    tagline: "Stay present, clear mind, better flow.",
    posterBg: "#e8cfc6",
    icon: "focus",
    imageSrc: "/images/generated/mood-poster-focus.png",
    imageAlt: "Pink rose quartz crystal incense holder on peach pastel, Focus mood",
    imageObjectPosition: "68% 72%",
    href: SHOP_INDEX,
  },
  {
    slug: "rainy-day",
    label: "Rainy Day",
    tagline: "Comforting scents for grey days.",
    posterBg: "#c5d5e3",
    icon: "rainy-day",
    imageSrc: "/images/generated/mood-poster-rainy-day.png",
    imageAlt: "Blue-grey celestite crystal incense holder on rain blue pastel, Rainy Day mood",
    imageObjectPosition: "68% 72%",
    href: SHOP_INDEX,
  },
];
