/** Inner-page mobile menu — Home first when not on the homepage */
export const HOME_NAV_ITEM = { href: "/", label: "Home" } as const;

/** Primary site navigation — shared by homepage hero nav and inner pages header */
export const PRIMARY_NAV = [
  { href: "/rituals", label: "Rituals" },
  { href: "/objects", label: "Objects" },
  { href: "/essays", label: "Essays" },
  { href: "/about", label: "About" },
] as const;
