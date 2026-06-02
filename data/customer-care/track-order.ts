import type { CustomerCarePageContent } from "@/types/customer-care";
import { CUSTOMER_CARE_EMAIL, customerCareSupportParagraph } from "@/data/customer-care/shared";

export const trackOrderPage: CustomerCarePageContent = {
  slug: "track-order",
  title: "Track My Order",
  description:
    "Enter your shipping tracking number to check delivery status with your carrier.",
  eyebrow: "Customer care",
  intro: [
    "Enter your shipping tracking number below to open tracking on your carrier's site.",
    "Carriers may take up to two business days to show the first scan after your shipping confirmation email.",
  ],
  blocks: [
    {
      type: "prose",
      heading: "Where to find your number",
      paragraphs: [
        "Check your inbox (and spam folder) for a Quiet Ash shipping confirmation email.",
        `If you cannot find it, contact us at ${CUSTOMER_CARE_EMAIL} with your order number and we will resend the link.`,
      ],
    },
    {
      type: "faq",
      heading: "Common tracking questions",
      items: [
        {
          id: "no-update",
          question: "Tracking has not updated yet",
          answer: [
            "Allow up to 2 business days after the shipping confirmation for the carrier to post the first event.",
            "We ship Monday–Friday excluding public holidays.",
          ],
        },
        {
          id: "delivered-not-received",
          question: "Status says delivered but I do not have the parcel",
          answer: [
            "Wait 1–2 days — carriers sometimes mark delivered early.",
            "Ask household members and check safe spots near your door.",
            "Contact us after 3 business days if it still has not appeared.",
          ],
        },
        {
          id: "stuck",
          question: "Tracking has not moved for several days",
          answer: [
            "International parcels can pause at customs. If there is no update for more than a week, email us with your tracking number.",
          ],
        },
        {
          id: "no-email",
          question: "I never received a shipping confirmation",
          answer: [
            "Orders usually process within 1–3 business days (longer in peak season).",
            "If that window has passed, contact us with your order number.",
          ],
        },
      ],
    },
    {
      type: "prose",
      heading: "Need more help?",
      paragraphs: [customerCareSupportParagraph()],
    },
  ],
  relatedLinks: [
    { label: "Help Centre", href: "/help" },
    { label: "Shipping & Delivery", href: "/delivery" },
    { label: "Exchange & Returns", href: "/returns" },
    { label: "Contact us", href: "/contact" },
  ],
};
