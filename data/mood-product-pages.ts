import type { CatalogProduct } from "@/lib/catalog";
import { formatPriceDisplay } from "@/lib/cart/pricing";
import { brandMoods } from "@/data/brand-moods";
import { moodPosterPublicPaths } from "@/data/mood-poster-image-prompts";

/** Catalog slug for each mood card on the product detail page. */
export const MOOD_SHOP_SLUG: Record<(typeof brandMoods)[number]["slug"], string> =
  {
    calm: "brass-incense-stand",
    energy: "wood-tray",
    sleep: "small-agarwood-box",
    focus: "paper-incense-sleeve",
    "rainy-day": "ceramic-tea-cup",
  };

export type MoodProductPageOverride = {
  displayTitle: string;
  tagline: string;
  moodQuote: string;
  scentTop: string;
  scentCore: string;
  scentAfter: string;
  burnTime?: string;
  stickLength?: string;
  feeling?: string;
  ritualTitle?: string;
  ritualBody?: string;
  heroImage?: string;
  lifestyleImage?: string;
};

const MOOD_PRODUCT_OVERRIDES: Record<string, MoodProductPageOverride> = {
  "brass-incense-stand": {
    displayTitle: "Calm Rain",
    tagline: "Soft calm, slow morning, gentle rain.",
    moodQuote:
      "For quiet mornings, tea by the window, and rooms that need to breathe again.",
    scentTop: "White tea steam",
    scentCore: "Cedar & soft rain",
    scentAfter: "Clean linen musk",
    ritualTitle: "Let the room slow down.",
    ritualBody:
      "Light one stick. Pour something warm. Let the smoke drift while the light stays soft and the day begins without hurry.",
    heroImage: moodPosterPublicPaths.calm,
    lifestyleImage: "/images/generated/products/brass-incense-stand/narrative.png",
  },
  "ceramic-tea-cup": {
    displayTitle: "Rainy Day",
    tagline: "Soft rain, warm tea, slow breathing.",
    moodQuote:
      "For rainy afternoons, late night reading, and quiet rooms after 10pm.",
    scentTop: "Rain-soaked linen",
    scentCore: "Warm cedar",
    scentAfter: "Soft skin musk",
    ritualTitle: "Let the room slow down.",
    ritualBody:
      "Light one stick. Open the window slightly. Let soft rain sounds fill the room while the smoke drifts slowly beside your tea.",
    heroImage: moodPosterPublicPaths["rainy-day"],
    lifestyleImage: "/images/generated/products/ceramic-tea-cup/narrative.png",
  },
  "wood-tray": {
    displayTitle: "Citrus Reset",
    tagline: "Bright mood. Boost your good vibes.",
    moodQuote: "For sunny resets, open windows, and a clear start.",
    scentTop: "Citrus peel",
    scentCore: "Green tea",
    scentAfter: "Warm sun on skin",
    heroImage: moodPosterPublicPaths.energy,
    lifestyleImage: "/images/generated/products/wood-tray/narrative.png",
  },
  "small-agarwood-box": {
    displayTitle: "Sunday Sleep",
    tagline: "Slow down and drift into dream.",
    moodQuote: "For late evenings when the room should feel like dusk.",
    scentTop: "Lavender air",
    scentCore: "Warm wood resin",
    scentAfter: "Soft dusk musk",
    heroImage: moodPosterPublicPaths.sleep,
    lifestyleImage:
      "/images/generated/products/small-agarwood-box/narrative.png",
  },
  "paper-incense-sleeve": {
    displayTitle: "Sandal Focus",
    tagline: "Stay present, clear mind, better flow.",
    moodQuote: "For desk hours, notebooks open, and one clear task at a time.",
    scentTop: "Quiet ink",
    scentCore: "Sandalwood",
    scentAfter: "Still air",
    heroImage: moodPosterPublicPaths.focus,
    lifestyleImage:
      "/images/generated/products/paper-incense-sleeve/narrative.png",
  },
};

export type ResolvedMoodProductPage = MoodProductPageOverride & {
  slug: string;
  priceDisplay: string;
  gallery: string[];
  lifestyleImage: string;
};

export function resolveMoodProductPage(
  product: CatalogProduct,
): ResolvedMoodProductPage {
  const override = MOOD_PRODUCT_OVERRIDES[product.slug];
  const gallery = (
    product.gallery?.length ? product.gallery : [product.image]
  ).slice(0, 4);

  return {
    slug: product.slug,
    displayTitle: override?.displayTitle ?? product.title,
    tagline: override?.tagline ?? product.line,
    moodQuote:
      override?.moodQuote ??
      product.atmosphereQuote ??
      product.description ??
      product.line,
    scentTop: override?.scentTop ?? "Opening note",
    scentCore: override?.scentCore ?? "Heart note",
    scentAfter: override?.scentAfter ?? "Base note",
    burnTime: override?.burnTime ?? "15 min",
    stickLength: override?.stickLength ?? "10.5 cm",
    feeling: override?.feeling ?? "Slow & soft",
    ritualTitle:
      override?.ritualTitle ??
      product.narrativeTitle ??
      "Let the room slow down.",
    ritualBody:
      override?.ritualBody ??
      product.narrativeBody ??
      product.description ??
      "",
    heroImage: override?.heroImage ?? product.image,
    lifestyleImage:
      override?.lifestyleImage ??
      product.narrativeImage ??
      product.image,
    priceDisplay: formatPriceDisplay(product.priceDisplay ?? "$24"),
    gallery,
  };
}
