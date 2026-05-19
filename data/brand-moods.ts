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
  href: string;
};

export const brandMoods: BrandMood[] = [
  {
    slug: "calm",
    label: "Calm",
    tagline: "Find peace in the little moments.",
    posterBg: "#c5d6c3",
    icon: "calm",
    imageSrc: "/images/generated/products/brass-incense-stand/atmosphere.png",
    imageAlt: "Green crystal incense holder, Calm mood",
    href: SHOP_INDEX,
  },
  {
    slug: "energy",
    label: "Energy",
    tagline: "Bright mood. Boost your good vibes.",
    posterBg: "#f2e8a8",
    icon: "energy",
    imageSrc: "/images/generated/products/wood-tray/atmosphere.png",
    imageAlt: "Yellow crystal incense holder, Energy mood",
    href: SHOP_INDEX,
  },
  {
    slug: "sleep",
    label: "Sleep",
    tagline: "Slow down and drift into dream.",
    posterBg: "#d8cfe8",
    icon: "sleep",
    imageSrc: "/images/generated/products/small-agarwood-box/atmosphere.png",
    imageAlt: "Purple crystal incense holder, Sleep mood",
    href: SHOP_INDEX,
  },
  {
    slug: "focus",
    label: "Focus",
    tagline: "Stay present, clear mind, better flow.",
    posterBg: "#e8cfc6",
    icon: "focus",
    imageSrc: "/images/generated/products/paper-incense-sleeve/atmosphere.png",
    imageAlt: "Pink crystal incense holder, Focus mood",
    href: SHOP_INDEX,
  },
  {
    slug: "rainy-day",
    label: "Rainy Day",
    tagline: "Comforting scents for grey days.",
    posterBg: "#c5d5e3",
    icon: "rainy-day",
    imageSrc: "/images/generated/products/ceramic-tea-cup/atmosphere.png",
    imageAlt: "Blue crystal incense holder, Rainy Day mood",
    href: SHOP_INDEX,
  },
];
