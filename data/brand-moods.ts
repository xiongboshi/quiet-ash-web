/** Mood merchandising — homepage & shop navigation. See docs/QUIET-ASH-BRAND-DIRECTION.md */

export type BrandMood = {
  slug: string;
  label: string;
  tagline: string;
  color: string;
  href: string;
};

export const brandMoods: BrandMood[] = [
  {
    slug: "calm",
    label: "Calm",
    tagline: "For when the room needs to slow down",
    color: "var(--mood-calm)",
    href: "/objects",
  },
  {
    slug: "energy",
    label: "Energy",
    tagline: "A bright start without noise",
    color: "var(--mood-energy)",
    href: "/objects",
  },
  {
    slug: "sleep",
    label: "Sleep",
    tagline: "Soft close to the day",
    color: "var(--mood-sleep)",
    href: "/objects",
  },
  {
    slug: "focus",
    label: "Focus",
    tagline: "Clear desk, clear head",
    color: "var(--mood-focus)",
    href: "/objects",
  },
  {
    slug: "rainy-day",
    label: "Rainy Day",
    tagline: "Grey light, warm cup",
    color: "var(--mood-rain)",
    href: "/objects",
  },
];
