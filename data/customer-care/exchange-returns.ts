import type { CustomerCarePageContent } from "@/types/customer-care";
import { CUSTOMER_CARE_EMAIL, customerCareSupportParagraph } from "@/data/customer-care/shared";

export const exchangeReturnsPage: CustomerCarePageContent = {
  slug: "returns",
  title: "Exchange & Returns",
  description:
    "14-day returns, exchanges, refunds, and damaged-order support for Quiet Ash.",
  eyebrow: "Customer care",
  intro: [
    "We hope you enjoy every piece you order. If something is not right, we offer a 14-day exchange and return window from the date you receive your order.",
    "Unopened, unused items in original packaging are eligible for change-of-mind returns. Faulty or incorrect orders are handled separately — we will cover return shipping when applicable.",
  ],
  blocks: [
    {
      type: "prose",
      heading: "Standard return policy",
      paragraphs: [
        "Change of mind: Return undamaged products with all accessories and original packaging within 14 days of receipt. We can offer an exchange or refund to your original payment method when eligible.",
        "You are responsible for return shipping and the original delivery cost on change-of-mind returns. If your order qualified for free shipping and you return more than half the order value, a flat shipping fee equal to the original delivery charge may apply.",
        "Maximum five identical products per return. Gift returns may be issued as store credit.",
        "Returns cannot be accepted if items are used, packaging is opened (for change-of-mind), or the receipt is unavailable.",
      ],
    },
    {
      type: "prose",
      heading: "Faulty products or incorrect orders",
      paragraphs: [
        "If items arrive damaged, faulty, or not as ordered, contact us within 14 days with your order number and photos.",
        "Eligible cases are reviewed individually. Quiet Ash covers return and replacement shipping through our logistics partner when we are at fault.",
        "If you use your own courier, you bear the risk and cost of transit. Damaged items must be returned before we issue a replacement or refund.",
      ],
    },
    {
      type: "prose",
      heading: "Missing items",
      paragraphs: [
        "Large orders may ship in separate parcels that arrive on different days — please wait for all boxes before reporting missing items.",
        "If something is still missing after all parcels arrive, contact us and we will arrange a replacement for eligible orders.",
      ],
    },
    {
      type: "prose",
      heading: "Unclaimed or refused deliveries",
      paragraphs: [
        "Parcels refused, unclaimed, or undeliverable due to an incorrect address, unpaid import duties, or absence at delivery may be forfeited or returned to sender.",
        "If returned to us in resalable condition, a refund may be issued minus original shipping, return fees, and any restocking charge. Opened or damaged returns may not qualify.",
      ],
    },
    {
      type: "list",
      heading: "How to return a product",
      items: [
        `Email ${CUSTOMER_CARE_EMAIL} or use our contact form with your order number, items to return, reason, and photos if applicable.`,
        "We will email return instructions after approval.",
        "Pack securely with original packaging; use the return label we provide when offered.",
        "Refunds are processed within 14–30 days after we receive the item, to your original payment method.",
      ],
    },
    {
      type: "list",
      heading: "How to exchange a product",
      items: [
        `Contact us with your order number and the item you want to exchange.`,
        "Our team will guide you through the next steps for your situation.",
        "Exchanged items must be of equal or greater value; if the new item costs less, the difference may be issued as store credit.",
      ],
    },
    {
      type: "faq",
      heading: "Frequently asked questions",
      items: [
        {
          id: "how-return",
          question: "How do I return an order?",
          answer: [
            `Contact ${CUSTOMER_CARE_EMAIL} with order number, items, reason, and photos for damage.`,
            "Follow the return instructions we send by email.",
          ],
        },
        {
          id: "how-exchange",
          question: "How do I exchange a product?",
          answer: [
            "Same process as a return — tell us what you would like instead and we will confirm eligibility.",
          ],
        },
        {
          id: "damaged",
          question: "My products arrived damaged — can I get an exchange?",
          answer: [
            "Yes — contact us immediately with photos. We prioritise replacements for verified damage.",
          ],
        },
        {
          id: "missing",
          question: "Some products were missing from my order",
          answer: [
            "Wait for all parcels on large orders, then contact us if items are still missing.",
          ],
        },
        {
          id: "shipping-refund",
          question: "Do I get original shipping refunded?",
          answer: [
            "Original shipping is refunded when the return is due to our error, damage, or a missing item we confirm.",
            "Change-of-mind returns do not include original shipping.",
          ],
        },
        {
          id: "gift-exchange",
          question: "I received a gift in the wrong scent — can I exchange?",
          answer: [
            "Yes, subject to our exchange policy. If the new item is lower value, store credit may apply.",
          ],
        },
        {
          id: "how-send-back",
          question: "How do I send items back?",
          answer: [
            "We usually provide a return label by email — affix it and schedule collection with our courier partner.",
            "If you ship with your own carrier, you are responsible for loss or damage in transit.",
          ],
        },
        {
          id: "refund-timing",
          question: "When will I receive my refund?",
          answer: [
            "Typically 5–10 business days after we receive the return; up to 30 days depending on your bank.",
            "Contact us if nothing appears after 30 business days.",
          ],
        },
        {
          id: "return-cost",
          question: "Do I pay return shipping?",
          answer: [
            "Change-of-mind: you pay return shipping.",
            "Damage, fault, or our error: we cover return shipping when approved.",
          ],
        },
      ],
    },
    {
      type: "prose",
      heading: "Still need help?",
      paragraphs: [customerCareSupportParagraph()],
    },
  ],
  relatedLinks: [
    { label: "Help Centre", href: "/help" },
    { label: "Shipping & Delivery", href: "/delivery" },
    { label: "Track my order", href: "/track-order" },
    { label: "Contact us", href: "/contact" },
  ],
};
