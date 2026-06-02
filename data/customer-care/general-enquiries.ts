import type { CustomerCarePageContent } from "@/types/customer-care";
import { CUSTOMER_CARE_EMAIL, customerCareSupportParagraph } from "@/data/customer-care/shared";

export const generalEnquiriesPage: CustomerCarePageContent = {
  slug: "general",
  title: "General Enquiries",
  description: "Accounts, payments, and general questions about Quiet Ash.",
  eyebrow: "Customer care",
  intro: [
    "Answers about accounts, checkout, payments, and how to reach us.",
  ],
  blocks: [
    {
      type: "faq",
      heading: "Accounts",
      items: [
        {
          id: "account-required",
          question: "Do I need an account to place an order?",
          answer: [
            "No — you can check out as a guest.",
            "Creating an account lets you save addresses, view past orders, and receive occasional updates if you opt in.",
          ],
        },
        {
          id: "create-account",
          question: "How do I create an account?",
          answer: [
            "Use the account link in the site header and follow the registration steps.",
          ],
        },
        {
          id: "reset-password",
          question: "I forgot my password",
          answer: [
            'Choose "Forgot your password" on the log-in page to reset it by email.',
          ],
        },
        {
          id: "deactivate",
          question: "How do I delete my account?",
          answer: [
            `Email ${CUSTOMER_CARE_EMAIL} to request account deletion.`,
          ],
        },
        {
          id: "addresses",
          question: "Can I save more than one delivery address?",
          answer: [
            "Yes — add multiple addresses from your account profile when logged in.",
          ],
        },
      ],
    },
    {
      type: "faq",
      heading: "Payment",
      items: [
        {
          id: "payment-options",
          question: "What payment options do you accept?",
          answer: [
            "Credit and debit cards: Visa, Mastercard, American Express.",
            "Digital wallets shown at checkout: Apple Pay, Google Pay, PayPal, Shop Pay, and others as enabled.",
            `Contact ${CUSTOMER_CARE_EMAIL} if you need another method.`,
          ],
        },
        {
          id: "confirmation-email",
          question: "I did not get a confirmation email",
          answer: [
            "Order confirmations usually arrive within a few hours. Check spam and junk folders.",
            "You will receive a separate shipping confirmation when the parcel dispatches.",
          ],
        },
        {
          id: "payment-secure",
          question: "Is my payment secure?",
          answer: [
            "Checkout is served over HTTPS. Card details are handled by our payment processor — we do not store full card numbers on our servers.",
          ],
        },
        {
          id: "paypal-google",
          question: "How do PayPal or Google Pay work?",
          answer: [
            "Select the wallet at checkout and sign in when prompted to authorise payment. You will receive the same confirmation email as card orders.",
          ],
        },
      ],
    },
    {
      type: "faq",
      heading: "Other enquiries",
      items: [
        {
          id: "contact-ways",
          question: "How can I contact you?",
          answer: [
            customerCareSupportParagraph(),
          ],
        },
        {
          id: "collaboration",
          question: "Collaboration or wholesale enquiries",
          answer: [
            `Email ${CUSTOMER_CARE_EMAIL} with a short introduction and links to your work.`,
          ],
        },
        {
          id: "search",
          question: "How do I search for products?",
          answer: [
            "Use the search icon in the header to find shop items and journal guides by keyword.",
          ],
        },
        {
          id: "unsubscribe",
          question: "How do I unsubscribe from marketing emails?",
          answer: [
            "Use the unsubscribe link at the bottom of any marketing email from Quiet Ash.",
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "Help Centre", href: "/help" },
    { label: "Shipping & Delivery", href: "/delivery" },
    { label: "Exchange & Returns", href: "/returns" },
    { label: "Contact us", href: "/contact" },
  ],
};
