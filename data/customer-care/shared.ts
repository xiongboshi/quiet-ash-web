import { siteContact } from "@/data/site";
import { FREE_SHIPPING_THRESHOLD_LABEL } from "@/lib/shipping-policy";

export const CUSTOMER_CARE_EMAIL = siteContact.email;

export const customerCareSupportChannels = [
  `Email us at ${CUSTOMER_CARE_EMAIL}`,
  "Use the contact form on our Contact page",
] as const;

export function customerCareSupportParagraph(): string {
  return `Our team is available via ${customerCareSupportChannels.join(", or ")}. We read messages in order and reply as soon as we can.`;
}

export const customerCareProcessingNotes = [
  "Excluding 1 business day of order processing time.",
  "Orders placed before 12:00 on business days are usually dispatched the same day.",
  "Orders placed after 12:00 are usually dispatched the next business day.",
  "Business days: Monday–Friday, excluding public holidays.",
  "Made-to-order or limited pieces may need extra lead time; we will email you if that applies.",
] as const;

export const customerCareFreeShippingNote = `Complimentary shipping is available on qualifying orders over ${FREE_SHIPPING_THRESHOLD_LABEL} where noted at checkout.`;
