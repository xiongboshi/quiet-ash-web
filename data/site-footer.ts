import { JOURNAL_INDEX, SHOP_INDEX } from "@/lib/site-paths";
import { siteContact } from "@/data/site";

export const siteFooter = {
  brand: "QUIET ASH",
  tagline: "Scent and slower rituals for calmer evenings.",
  newsletterLead: "Join for quiet thoughts, rituals, and early access.",
  emailPlaceholder: "Your email",
  joinLabel: "Join",
  copyright: "© QUIET ASH. ALL RIGHTS RESERVED.",
  nav: [
    { label: "Shop", href: SHOP_INDEX },
    { label: "Journal", href: JOURNAL_INDEX },
    { label: "ABOUT", href: "/about" },
  ],
  /** Customer care — mirrors help centre structure. */
  customerCare: [
    { label: "Help Centre", href: "/help" },
    { label: "Shipping & Delivery", href: "/delivery" },
    { label: "Exchange & Returns", href: "/returns" },
    { label: "Track My Order", href: "/track-order" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/about" },
    { label: "Terms", href: "/about" },
    { label: "Care", href: "/care" },
  ],
} as const;
