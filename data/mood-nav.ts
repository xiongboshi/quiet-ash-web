import { JOURNAL_INDEX, MOODS_INDEX, SHOP_INDEX } from "@/lib/site-paths";

/** Mood homepage primary navigation */
export const MOOD_PRIMARY_NAV = [
  { href: SHOP_INDEX, label: "Shop" },
  { href: MOODS_INDEX, label: "Moods" },
  { href: "/about", label: "About" },
  { href: JOURNAL_INDEX, label: "Journal" },
] as const;
