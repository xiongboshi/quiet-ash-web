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
    { label: "Our Story", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: `mailto:${siteContact.email}` },
  ],
  legal: [
    { label: "Privacy", href: "/about" },
    { label: "Terms", href: "/about" },
    { label: "Shipping & Returns", href: "/returns" },
  ],
} as const;
