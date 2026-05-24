import { JOURNAL_INDEX, SHOP_INDEX } from "@/lib/site-paths";

/** Inner-page mobile menu — Home first when not on the homepage */
export const HOME_NAV_ITEM = { href: "/", label: "Home" } as const;

/** Primary site navigation — shared by homepage hero nav and inner pages header */
export const PRIMARY_NAV = [
  { href: SHOP_INDEX, label: "Shop" },
  { href: JOURNAL_INDEX, label: "Journal" },
  { href: "/about", label: "Our Story" },
] as const;
