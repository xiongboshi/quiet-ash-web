import type { CustomerCarePageContent } from "@/types/customer-care";
import {
  customerCareFreeShippingNote,
  customerCareProcessingNotes,
  customerCareSupportParagraph,
} from "@/data/customer-care/shared";
import {
  customerCareShippingRegions,
  customerCareShippingRestrictions,
} from "@/data/customer-care/shipping-regions";

const regionBlocks = customerCareShippingRegions.map((region) => ({
  type: "list" as const,
  heading: region.name,
  items: region.bullets,
}));

export const shippingDeliveryPage: CustomerCarePageContent = {
  slug: "delivery",
  title: "Shipping & Delivery",
  description:
    "Worldwide shipping rates, delivery times, and tracking for Quiet Ash orders.",
  eyebrow: "Customer care",
  intro: [
    "Orders are dispatched with care from our fulfilment partners. Rates and complimentary shipping thresholds vary by region and are confirmed at checkout.",
    customerCareFreeShippingNote,
  ],
  blocks: [
    {
      type: "prose",
      heading: "Worldwide shipping",
      paragraphs: [
        "Express shipping is available to many countries through carriers such as FedEx, DHL, and regional partners. Select your destination at checkout to see live rates.",
        "For complete details on delivery times, fees, complimentary delivery, and customs, refer to your region below.",
      ],
    },
    ...regionBlocks,
    {
      type: "list",
      heading: "Shipping restrictions",
      items: customerCareShippingRestrictions,
    },
    {
      type: "list",
      heading: "Processing & dispatch",
      items: customerCareProcessingNotes,
    },
    {
      type: "faq",
      heading: "Frequently asked questions",
      items: [
        {
          id: "po-box",
          question: "Do you ship to PO boxes?",
          answer: [
            "We do not offer shipping to PO boxes in any country at this time.",
          ],
        },
        {
          id: "track-order",
          question: "How can I track my order?",
          answer: [
            "You will receive a shipping confirmation email with tracking when your order leaves our warehouse.",
            "Allow up to 2 business days for the carrier site to show activity after the confirmation email.",
          ],
        },
        {
          id: "delivery-time",
          question: "How long does it take to receive my order?",
          answer: [
            "Processing usually takes 1–2 business days before dispatch. Delivery time depends on your region and carrier — see the regional section above.",
            "Check your spam folder for shipping emails. Contact us if you need a more precise estimate.",
          ],
        },
        {
          id: "marked-delivered",
          question: "My order shows delivered but I have not received it",
          answer: [
            "Carriers sometimes mark a parcel as delivered before it reaches your door; allow a day or two.",
            "Check with household members, neighbours, or a safe spot near your entrance.",
            "If it has not arrived within 3 business days after the delivered status, contact us with your order number.",
          ],
        },
        {
          id: "late-delivery",
          question: "What if my order is late?",
          answer: [
            "Estimated delivery dates are approximate. If your order is past the estimate, wait up to 3 extra business days before reporting it missing.",
            customerCareSupportParagraph(),
          ],
        },
        {
          id: "defective-missing",
          question: "What if I received defective or missing items?",
          answer: [
            "Contact us as soon as you notice an issue. Include your order number and clear photos of damaged items or the packing you received.",
            "See Exchange & Returns for the full process.",
          ],
        },
        {
          id: "wrong-address",
          question: "I entered the wrong address at checkout",
          answer: [
            "Once processing has begun we usually cannot change the address. If you have not received a shipping confirmation, contact us immediately — we may still be able to help.",
            "If a parcel returns to us due to an incorrect address, we will notify you by email.",
          ],
        },
        {
          id: "different-address",
          question: "Can I send my order to a different address?",
          answer: [
            "Yes — enter the gift or alternate address at checkout and verify it before payment. We cannot change the address after the order is confirmed.",
          ],
        },
        {
          id: "no-confirmation",
          question: "I did not receive a shipping confirmation",
          answer: [
            "Processing can take up to three working days, longer during peak seasons. Check spam and junk folders.",
            "If you still have no confirmation or tracking within that window, contact us with your order number.",
          ],
        },
        {
          id: "self-pickup",
          question: "Do you offer self-pickup?",
          answer: [
            "Self-pickup is not available at this time. We may introduce local collection in the future — watch our newsletter for updates.",
          ],
        },
        {
          id: "cancel-in-transit",
          question: "Can I cancel an order that is already on the way?",
          answer: [
            "Once a shipping confirmation has been sent, we usually cannot cancel or recall the parcel.",
            "You may wait for delivery and start a change-of-mind return within 14 days of receipt where eligible.",
          ],
        },
        {
          id: "extra-charges",
          question: "What extra charges might I pay?",
          answer: [
            "Import duties, VAT, and local taxes may apply on delivery and are set by your country — they are not included in our product or shipping prices unless stated at checkout.",
            "Sample de minimis thresholds (estimates only): Australia AUD 1000; Indonesia USD 3; Malaysia RM 500; Philippines PHP 10,000; Taiwan TWD 2000; Thailand THB 1500; UK GBP 135; US USD 800; Vietnam VND 1,000,000.",
          ],
        },
        {
          id: "combined-orders",
          question: "I placed multiple orders but received one package",
          answer: [
            "Consecutive orders to the same address may be combined into one shipment. We will email you if we combine parcels; reply if you prefer separate boxes.",
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "Help Centre", href: "/help" },
    { label: "Exchange & Returns", href: "/returns" },
    { label: "Track my order", href: "/track-order" },
    { label: "Contact us", href: "/contact" },
  ],
};
