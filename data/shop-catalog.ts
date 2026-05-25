/**
 * Shop category registry — add aisles here; filters and mobile UI follow `filters.groups`.
 *
 * New category checklist:
 * 1. Add a key below (slug must not match any product slug in `data/products`).
 * 2. Set `pathname` (`/shop/your-slug`, or `/shop` for the default aisle only).
 * 3. Define `filters.groups` (any count); optional `tabLabel` per group for mobile tabs.
 * 4. Register static route: non-default slugs are served from `app/(site)/shop/[slug]/page.tsx`.
 */
import type { HomeBestSellerCard } from "@/data/home-redesign";
import type { ShopCategoryDefinition } from "@/data/shop-catalog-types";
import { SHOP_INDEX } from "@/lib/site-paths";
import { freeShippingOverOrdersCopy } from "@/lib/shipping-policy";

export const DEFAULT_SHOP_CATEGORY_SLUG = "incense" as const;

export const shopCatalog = {
  incense: {
    slug: "incense",
    pathname: SHOP_INDEX,
    navLabel: "Incense",
    hero: {
      title: "Incense Sticks",
      descriptionLines: [
        "Handcrafted scents for every mood",
        "and moment.",
      ],
      imageSrc: "/images/generated/objects-essence-hero.png",
      imageAlt: "Quiet Ash Sandalwood & Fig incense with figs and flowers",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Incense Sticks", href: SHOP_INDEX },
    ],
    filters: {
      heading: "FILTER BY",
      clearLabel: "CLEAR ALL",
      groups: [
        {
          id: "scent",
          label: "SCENT FAMILY",
          tabLabel: "Scent",
          defaultOpen: true,
          options: [
            { id: "fruity", label: "Fruity", count: 6 },
            { id: "floral", label: "Floral", count: 6 },
            { id: "herbal", label: "Herbal", count: 6 },
            { id: "woody", label: "Woody", count: 5 },
          ],
        },
        {
          id: "mood",
          label: "MOOD / BENEFIT",
          tabLabel: "Mood",
          defaultOpen: true,
          options: [
            { id: "sleep", label: "Better Sleep", count: 6 },
            { id: "stress", label: "Stress Relief", count: 5 },
            { id: "focus", label: "Focus & Study", count: 4 },
            { id: "fresh", label: "Fresh Home", count: 4 },
            { id: "reset", label: "Daily Reset", count: 5 },
          ],
        },
        {
          id: "price",
          label: "PRICE",
          tabLabel: "Price",
          defaultOpen: false,
          options: [
            { id: "under-20", label: "Under $20", count: 18 },
            { id: "20-35", label: "$20 – $35", count: 4 },
            { id: "35-plus", label: "$35+", count: 1 },
          ],
        },
      ],
    },
    listing: {
      title: "All Incense Sticks",
      productCount: 23,
      sortOptions: [
        "Best selling",
        "Featured",
        "Price, low to high",
        "Price, high to low",
      ],
    },
    valueBar: [
      { id: "batch", title: "Small Batch", description: "Handmade", icon: "hand" },
      { id: "clean", title: "Clean Ingredients", description: "No harsh chemicals", icon: "leaf" },
      { id: "returns", title: "30-Day Returns", description: "Love it or return it", icon: "returns" },
      { id: "shipping", title: "Free Shipping", description: freeShippingOverOrdersCopy(), icon: "shipping" },
    ],
    products: [
      {
        slug: "wood-tray",
        title: "Citrus Sleep",
        scentNotes: "Lemon · Bergamot · Mandarin",
        priceDisplay: "$18.00",
        reviewCount: 276,
        imageSrc: "/images/generated/best-sellers/citrus-grove-v5.png",
        imageAlt: "Citrus Sleep incense",
      },
      {
        slug: "brass-incense-stand",
        title: "White Jasmine",
        scentNotes: "Jasmine · Green Leaves · Lily",
        priceDisplay: "$18.00",
        reviewCount: 312,
        imageSrc: "/images/generated/best-sellers/white-jasmine-v3.png",
        imageAlt: "White Jasmine incense",
      },
      {
        slug: "small-agarwood-box",
        title: "Sandalwood & Fig",
        scentNotes: "Sandalwood · Fig · Amber",
        priceDisplay: "$18.00",
        reviewCount: 267,
        imageSrc: "/images/generated/best-sellers/sandalwood-night-v2.png",
        imageAlt: "Sandalwood and fig incense",
      },
      {
        slug: "paper-incense-sleeve",
        title: "Lavender & Linen",
        scentNotes: "Lavender · Cotton · Soft Musk",
        priceDisplay: "$18.00",
        reviewCount: 294,
        imageSrc: "/images/generated/best-sellers/lavender-field-v3.png",
        imageAlt: "Lavender and linen incense",
      },
      {
        slug: "ceramic-tea-cup",
        title: "Rose Garden",
        scentNotes: "Rose · Geranium · Palmarosa",
        priceDisplay: "$18.00",
        reviewCount: 246,
        imageSrc: "/images/generated/best-sellers/rose-garden-v3.png",
        imageAlt: "Rose Garden incense",
      },
      {
        slug: "linen-cloth",
        title: "Tea House",
        scentNotes: "White Tea · Fig · Musk",
        priceDisplay: "$18.00",
        reviewCount: 228,
        imageSrc: "/images/generated/best-sellers/quiet-cloud-v3.png",
        imageAlt: "Tea House incense",
      },
      {
        slug: "wood-tray",
        title: "Herbal",
        scentNotes: "Rosemary · Sage · Thyme",
        priceDisplay: "$18.00",
        reviewCount: 201,
        imageSrc: "/images/generated/best-sellers/white-jasmine-v3.png",
        imageAlt: "Herbal incense",
      },
      {
        slug: "brass-incense-stand",
        title: "Vanilla",
        scentNotes: "Vanilla · Tonka · Cream",
        priceDisplay: "$18.00",
        reviewCount: 189,
        imageSrc: "/images/generated/best-sellers/peach-orchard-v3.png",
        imageAlt: "Vanilla incense",
      },
    ] satisfies HomeBestSellerCard[],
  },

  holders: {
    slug: "holders",
    pathname: "/shop/holders",
    navLabel: "Holders",
    hero: {
      title: "Incense Holders",
      descriptionLines: [
        "Stands, trays, and vessels",
        "for unhurried ritual.",
      ],
      imageSrc: "/images/generated/products/brass-incense-stand/atmosphere.png",
      imageAlt: "Bronze incense holder on a quiet walnut surface",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Shop", href: SHOP_INDEX },
      { label: "Holders", href: "/shop/holders" },
    ],
    filters: {
      heading: "FILTER BY",
      clearLabel: "CLEAR ALL",
      groups: [
        {
          id: "type",
          label: "HOLDER TYPE",
          tabLabel: "Type",
          defaultOpen: true,
          options: [
            { id: "stand", label: "Stands", count: 1 },
            { id: "vessel", label: "Ash vessels", count: 1 },
            { id: "storage", label: "Storage", count: 1 },
            { id: "tray", label: "Trays", count: 1 },
          ],
        },
        {
          id: "material",
          label: "MATERIAL",
          tabLabel: "Material",
          defaultOpen: true,
          options: [
            { id: "bronze", label: "Bronze", count: 1 },
            { id: "stoneware", label: "Stoneware", count: 1 },
            { id: "walnut", label: "Walnut", count: 2 },
          ],
        },
        {
          id: "price",
          label: "PRICE",
          tabLabel: "Price",
          defaultOpen: false,
          options: [
            { id: "50-100", label: "$50 – $100", count: 2 },
            { id: "100-plus", label: "$100+", count: 2 },
          ],
        },
      ],
    },
    listing: {
      title: "All Holders & Trays",
      productCount: 4,
      sortOptions: [
        "Featured",
        "Price, low to high",
        "Price, high to low",
      ],
    },
    valueBar: [
      { id: "craft", title: "Small Batch", description: "Hand-finished", icon: "hand" },
      { id: "materials", title: "Honest Materials", description: "Bronze, wood, stone", icon: "leaf" },
      { id: "returns", title: "30-Day Returns", description: "Love it or return it", icon: "returns" },
      { id: "shipping", title: "Free Shipping", description: freeShippingOverOrdersCopy(), icon: "shipping" },
    ],
    products: [
      {
        slug: "brass-incense-stand",
        title: "Bronze Incense Holder",
        scentNotes: "Bronze · Low stand · Patina",
        priceDisplay: "$68",
        reviewCount: 142,
        imageSrc: "/images/generated/products/brass-incense-stand/hero.png",
        imageAlt: "Bronze incense holder",
      },
      {
        slug: "paper-incense-sleeve",
        title: "Black Ash Vase",
        scentNotes: "Stoneware · Matte charcoal",
        priceDisplay: "$72",
        reviewCount: 98,
        imageSrc: "/images/generated/products/paper-incense-sleeve/hero.png",
        imageAlt: "Black ash vase for incense ritual",
      },
      {
        slug: "wood-tray",
        title: "Walnut Tea Tray",
        scentNotes: "Walnut · Ash channel · Hand-rubbed",
        priceDisplay: "$78",
        reviewCount: 116,
        imageSrc: "/images/generated/products/wood-tray/hero.png",
        imageAlt: "Walnut tea and incense tray",
      },
      {
        slug: "small-agarwood-box",
        title: "Agarwood Keeper",
        scentNotes: "Walnut · Lidded storage",
        priceDisplay: "$210",
        reviewCount: 64,
        imageSrc: "/images/generated/products/small-agarwood-box/hero.png",
        imageAlt: "Walnut agarwood keeper box",
      },
    ] satisfies HomeBestSellerCard[],
  },
} as const satisfies Record<string, ShopCategoryDefinition>;

export type ShopCatalogSlug = keyof typeof shopCatalog;
