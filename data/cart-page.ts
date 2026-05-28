import { parsePriceDisplay } from "@/lib/cart/pricing";

export const cartPageCopy = {
  title: "Your cart",
  continueShopping: "← Continue shopping",
  tableHead: {
    product: "PRODUCT",
    price: "PRICE",
    quantity: "QUANTITY",
    total: "TOTAL",
  },
  productType: "Incense Sticks",
  defaultPack: "20 Sticks / Pack",
  recommendations: {
    heading: "Complete your order",
    subheading: "Pair well with your selection.",
    promo: "Save 10% when you buy any 2 items or more.",
    addToCart: "ADD TO CART",
  },
} as const;

export type CartRecommendation = {
  slug: string;
  title: string;
  type: string;
  pack: string;
  priceCents: number;
  image: string;
};

/** Cross-sell row — matches cart mockup copy */
export const cartRecommendations: CartRecommendation[] = [
  {
    slug: "brass-incense-stand",
    title: "White Jasmine",
    type: "Incense Sticks",
    pack: "20 Sticks / Pack",
    priceCents: parsePriceDisplay("$24.00"),
    image: "/images/generated/best-sellers/white-jasmine-v3.webp",
  },
  {
    slug: "paper-incense-sleeve",
    title: "Tea Ritual",
    type: "Incense Sticks",
    pack: "20 Sticks / Pack",
    priceCents: parsePriceDisplay("$24.00"),
    image: "/images/generated/best-sellers/lavender-field-v3.webp",
  },
  {
    slug: "small-agarwood-box",
    title: "Agarwood",
    type: "Incense Sticks",
    pack: "20 Sticks / Pack",
    priceCents: parsePriceDisplay("$26.00"),
    image: "/images/generated/best-sellers/sandalwood-night-v2.webp",
  },
  {
    slug: "linen-cloth",
    title: "Discovery Set",
    type: "4 Scents / 40 Sticks",
    pack: "Perfect for exploring",
    priceCents: parsePriceDisplay("$42.00"),
    image: "/images/generated/best-sellers/quiet-cloud-v3.webp",
  },
];
