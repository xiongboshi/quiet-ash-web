import { JOURNAL_INDEX, SHOP_INDEX } from "@/lib/site-paths";

/** Mood homepage primary navigation */
export const MOOD_PRIMARY_NAV = [
  { href: SHOP_INDEX, label: "Shop" },
  { href: JOURNAL_INDEX, label: "Journal" },
  { href: "/about", label: "Our Story" },
] as const;
