import type { CatalogProduct } from "@/lib/catalog";
import { parsePriceDisplay } from "@/lib/cart/pricing";
import { freeShippingOnOrdersOverCopy } from "@/lib/shipping-policy";
import { SHOP_INDEX, shopPath } from "@/lib/site-paths";

export type ShopPdpHighlightIcon = "leaf" | "hand" | "flask" | "refresh";

export type ShopProductPdp = {
  slug: string;
  breadcrumbs: readonly { label: string; href: string }[];
  title: string;
  tagline: string;
  rating: { value: number; score: string; count: number };
  priceDisplay: string;
  priceCents: number;
  description: string;
  badge: string;
  scentName: string;
  gallery: readonly string[];
  highlights: readonly { icon: ShopPdpHighlightIcon; label: string }[];
  specs: {
    burnTime: string;
    scentStrength: { label: string; filled: number; total: number };
    bestFor: string;
    perfectFor: string;
  };
  aboutScent: { body: string; imageSrc: string };
  packaging: { body: string; imageSrc: string; details?: readonly string[] };
  howToUse: readonly { title: string; body: string }[];
  safetyTips: readonly string[];
  reviews: {
    average: number;
    count: number;
    items: readonly {
      name: string;
      avatarSrc: string;
      quote: string;
    }[];
  };
  trust: readonly { icon: "truck" | "returns" | "lock"; label: string }[];
};

const CITRUS_GALLERY = [
  "/images/generated/best-sellers/citrus-grove-v5.png",
  "/images/generated/best-sellers/citrus-grove-v4.png",
  "/images/generated/best-sellers/citrus-grove-v3.png",
  "/images/generated/best-sellers/citrus-grove.png",
  "/images/generated/best-sellers/citrus-grove-v5.png",
] as const;

const woodTrayPdp: ShopProductPdp = {
  slug: "wood-tray",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Incense", href: SHOP_INDEX },
    { label: "Citrus Grove Incense Sticks", href: shopPath("wood-tray") },
  ],
  title: "Citrus Grove Incense Sticks",
  tagline: "Bright • Uplifting • Fresh",
  rating: { value: 4.8, score: "4.8", count: 278 },
  priceDisplay: "$18.00",
  priceCents: 1800,
  description:
    "A refreshing blend of sun-ripened citrus, delicate florals, and green leaves. Awakens your senses and brightens your space.",
  badge: "HANDMADE INCENSE",
  scentName: "Citrus Grove",
  gallery: CITRUS_GALLERY,
  highlights: [
    { icon: "leaf", label: "100% Natural Ingredients" },
    { icon: "hand", label: "Handmade in Small Batches" },
    { icon: "flask", label: "No Harsh Chemicals" },
    { icon: "refresh", label: "Long-Lasting Fragrance" },
  ],
  specs: {
    burnTime: "About 15–20 min per stick",
    scentStrength: { label: "Medium", filled: 3, total: 5 },
    bestFor: "Energy, Focus, Mood Boost",
    perfectFor: "Living Room, Office, Morning Routine",
  },
  aboutScent: {
    body: "Citrus Grove brings the feeling of a sunny morning into your home. The bright citrus top notes uplift your mood, while soft florals and warm woods create balance and calm.",
    imageSrc: "/images/generated/best-sellers/citrus-grove-v4.png",
  },
  packaging: {
    body: "Each set ships in a cream paper box with a subtle citrus label — minimal, gift-ready, and easy to store between burns.",
    imageSrc: "/images/generated/best-sellers/citrus-grove.png",
    details: [
      "20 sticks per box",
      "Recyclable paper outer sleeve",
    ],
  },
  howToUse: [
    {
      title: "Light the tip",
      body: "Hold the stick at a slight angle and light the tip.",
    },
    {
      title: "Let it burn",
      body: "Let it burn for 5–10 seconds, then gently blow out the flame.",
    },
    {
      title: "Place & enjoy",
      body: "Place in an incense holder and enjoy the fragrance.",
    },
  ],
  safetyTips: [
    "Use in a well-ventilated area.",
    "Keep away from flammable items.",
    "Keep out of reach of children and pets.",
  ],
  reviews: {
    average: 4.8,
    count: 278,
    items: [
      {
        name: "Emma L.",
        avatarSrc: "/images/generated/best-sellers/citrus-grove-v3.png",
        quote:
          "The scent is so fresh and natural. Perfect for my morning routine. It helps me feel energized and focused!",
      },
      {
        name: "Sarah M.",
        avatarSrc: "/images/generated/best-sellers/white-jasmine-v3.png",
        quote:
          "Not too strong, not too light. It fills the room beautifully and the burn time is perfect.",
      },
      {
        name: "Daniel K.",
        avatarSrc: "/images/generated/best-sellers/sandalwood-night-v2.png",
        quote:
          "Beautiful packaging and amazing quality. I've tried many incense brands, this is my favorite.",
      },
    ],
  },
  trust: [
    { icon: "truck", label: freeShippingOnOrdersOverCopy() },
    { icon: "returns", label: "30-day returns hassle free" },
    { icon: "lock", label: "Secure payment SSL encrypted" },
  ],
};

const PDP_BY_SLUG: Record<string, ShopProductPdp> = {
  "wood-tray": woodTrayPdp,
};

export function getShopProductPdp(product: CatalogProduct): ShopProductPdp {
  const known = PDP_BY_SLUG[product.slug];
  if (known) return known;

  const priceCents = parsePriceDisplay(product.priceDisplay);
  return {
    slug: product.slug,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Incense", href: SHOP_INDEX },
      { label: product.title, href: shopPath(product.slug) },
    ],
    title: product.title,
    tagline: product.line,
    rating: { value: 4.8, score: "4.8", count: 120 },
    priceDisplay: product.priceDisplay ?? "$18.00",
    priceCents: priceCents || 1800,
    description: product.description ?? product.line,
    badge: "HANDMADE INCENSE",
    scentName: product.title,
    gallery: product.gallery?.length
      ? product.gallery
      : [product.image],
    highlights: woodTrayPdp.highlights,
    specs: woodTrayPdp.specs,
    aboutScent: {
      body: product.description ?? product.line,
      imageSrc: product.image,
    },
    packaging: {
      body: "Thoughtful cream paper packaging — minimal on the shelf, ready to gift.",
      imageSrc: product.image,
    },
    howToUse: woodTrayPdp.howToUse,
    safetyTips: woodTrayPdp.safetyTips,
    reviews: woodTrayPdp.reviews,
    trust: woodTrayPdp.trust,
  };
}
