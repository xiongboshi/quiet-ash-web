import type { CustomerCarePageContent } from "@/types/customer-care";
import { CUSTOMER_CARE_EMAIL } from "@/data/customer-care/shared";

export const contactPage: CustomerCarePageContent = {
  slug: "contact",
  title: "Contact Us",
  description: "Reach the Quiet Ash team — orders, shipping, returns, and product questions.",
  eyebrow: "Customer care",
  intro: [
    "We welcome your questions. Email is the most reliable way to reach us.",
    `Write to ${CUSTOMER_CARE_EMAIL} or use the form below. We read messages in order and reply as soon as we can.`,
  ],
  blocks: [
    {
      type: "prose",
      heading: "What to include",
      paragraphs: [
        "Please include your order number for anything related to an existing purchase, and photos for damaged or incorrect items.",
        "For product recommendations, tell us about your room size, scent preferences, and whether you need low-smoke options.",
      ],
    },
  ],
  relatedLinks: [
    { label: "Help Centre", href: "/help" },
    { label: "Shipping & Delivery", href: "/delivery" },
    { label: "Exchange & Returns", href: "/returns" },
    { label: "Track my order", href: "/track-order" },
  ],
};
