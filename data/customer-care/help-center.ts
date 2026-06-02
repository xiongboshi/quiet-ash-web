import type { HelpCenterHubContent } from "@/types/customer-care";
import { CUSTOMER_CARE_EMAIL } from "@/data/customer-care/shared";

export const helpCenterHub: HelpCenterHubContent = {
  title: "Help Centre",
  description:
    "Customer support for Quiet Ash — orders, shipping, returns, products, and contact.",
  intro: [
    "Need assistance? Our team is here to help. Browse the sections below for answers on accounts, delivery, exchanges, and product care.",
    `For direct help, email ${CUSTOMER_CARE_EMAIL} or use the contact form.`,
  ],
  cards: [
    {
      title: "General Enquiries",
      description: "Accounts, payment, and more",
      href: "/help/general",
    },
    {
      title: "Shipping & Delivery",
      description: "Rates, estimated times, and tracking",
      href: "/delivery",
    },
    {
      title: "Exchange & Returns",
      description: "Change of mind, missing orders, and more",
      href: "/returns",
    },
    {
      title: "About the Products",
      description: "Incense care, safety, and ingredients",
      href: "/help/products",
    },
  ],
  featuredFaqs: [
    {
      id: "track-order",
      question: "How can I track my order?",
      answer: [
        "After you place an order, you will receive a shipping confirmation email with tracking information when your parcel leaves our warehouse.",
        "We process and ship orders Monday through Friday, except public holidays. It may take up to 2 business days for tracking to update on the carrier site after you receive the confirmation email.",
        "If you have not received a shipping confirmation within a few business days, check your spam folder or contact us with your order number.",
      ],
    },
    {
      id: "exchange-product",
      question: "How can I exchange a product?",
      answer: [
        `Contact us at ${CUSTOMER_CARE_EMAIL} with your order number, the items you wish to exchange, and the reason. Include photos for faulty or damaged items.`,
        "After we approve your request, we will email instructions for preparing and returning the items.",
        "Pack items securely with original packaging and follow the return label or courier instructions we provide.",
        "Once we receive your return, we will process a refund or exchange according to our returns policy (typically within 14–30 days to your original payment method).",
      ],
    },
    {
      id: "payment-methods",
      question: "What payment methods do you accept?",
      answer: [
        "We accept major credit and debit cards (Visa, Mastercard, American Express) and digital wallets shown at checkout (such as Apple Pay, Google Pay, PayPal, and Shop Pay).",
        `If your preferred method is not listed, email ${CUSTOMER_CARE_EMAIL} and we will do our best to assist.`,
      ],
    },
    {
      id: "change-of-mind",
      question: "Can I change my mind after placing an order?",
      answer: [
        "We offer a 14-day return window for change-of-mind returns on eligible items that are unopened, unused, and in original packaging.",
        "Return shipping for change-of-mind returns is the customer's responsibility unless the item is faulty or we made an error.",
        "See our Exchange & Returns page for full details.",
      ],
    },
  ],
};
