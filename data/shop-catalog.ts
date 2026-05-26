/**
 * Shop category registry — add aisles here; filters and mobile UI follow `filters.groups`.
 *
 * New category checklist:
 * 1. Add a key below (slug must not match any product slug in `data/products`).
 * 2. Set `pathname` (`/shop/your-slug`, or `/shop` for the default aisle only).
 * 3. Define `filters.groups` (any count); e.g. INCENSE HOLDERS + Stands/Trays sub-options; optional `tabLabel` for mobile tabs.
 * 4. Register static route: non-default slugs are served from `app/(site)/shop/[slug]/page.tsx`.
 */
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
      title: "Incense",
      descriptionLines: [
        "Handcrafted scents for every mood",
        "and moment.",
      ],
      imageSrc: "/images/generated/objects-essence-hero.png",
      imageAlt: "Quiet Ash Sandalwood & Fig incense with figs and flowers",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Incense", href: SHOP_INDEX },
    ],
    moodHome: {
      heading: "SHOP BY NEED",
      subheading: "Find the right scent for how you feel.",
      exploreAll: { label: "EXPLORE ALL MOODS →", href: SHOP_INDEX },
    },
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
            {
              id: "sleep",
              label: "Better Sleep",
              count: 6,
              homeCard: {
                imageSrc:
                  "/images/generated/mood-poster-sleep-white-blossom.png",
                imageAlt: "Better sleep — incense on soft bedding",
                description:
                  "Calming scents for deeper, restful sleep.",
                ctaLabel: "SHOP SLEEP →",
              },
            },
            {
              id: "stress",
              label: "Stress Relief",
              count: 5,
              homeCard: {
                imageSrc: "/images/generated/mood-poster-calm-jasmine.png",
                imageAlt: "Stress relief — calm jasmine still life",
                description:
                  "Scents that help you relax and unwind.",
                ctaLabel: "SHOP CALM →",
              },
            },
            {
              id: "focus",
              label: "Focus & Study",
              count: 4,
              homeCard: {
                imageSrc: "/images/generated/mood-poster-focus-lavender.png",
                imageAlt: "Focus and study — desk with incense",
                description: "Stay clear, focused and productive.",
                ctaLabel: "SHOP FOCUS →",
              },
            },
            {
              id: "fresh",
              label: "Fresh Home",
              count: 4,
              homeCard: {
                imageSrc: "/images/generated/mood-poster-rainy-day.png",
                imageAlt: "Fresh home — incense by a bright window",
                description: "Make your space smell clean and calm.",
                ctaLabel: "SHOP FRESH →",
              },
            },
            {
              id: "reset",
              label: "Daily Reset",
              count: 5,
              homeCard: {
                imageSrc: "/images/generated/mood-poster-energy-citrus.png",
                imageAlt: "Daily reset — morning citrus incense",
                description:
                  "Start or end your day with intention.",
                ctaLabel: "SHOP RESET →",
              },
            },
          ],
        },
        {
          id: "holders",
          label: "INCENSE HOLDERS",
          tabLabel: "Holders",
          defaultOpen: true,
          options: [
            { id: "stand", label: "Stands", count: 1 },
            { id: "vessel", label: "Ash vessels", count: 1 },
            { id: "tray", label: "Trays", count: 1 },
            { id: "storage", label: "Storage boxes", count: 1 },
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
      sortOptions: ["Price, low to high", "Price, high to low"],
    },
    valueBar: [
      { id: "batch", title: "Small Batch", description: "Handmade", icon: "hand" },
      { id: "clean", title: "Clean Ingredients", description: "No harsh chemicals", icon: "leaf" },
      { id: "returns", title: "30-Day Returns", description: "Love it or return it", icon: "returns" },
      { id: "shipping", title: "Free Shipping", description: freeShippingOverOrdersCopy(), icon: "shipping" },
    ],
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
          id: "type",
          label: "INCENSE HOLDERS",
          tabLabel: "Type",
          defaultOpen: true,
          options: [
            { id: "stand", label: "Stands", count: 1 },
            { id: "vessel", label: "Ash vessels", count: 1 },
            { id: "tray", label: "Trays", count: 1 },
            { id: "storage", label: "Storage boxes", count: 1 },
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
      sortOptions: ["Price, low to high", "Price, high to low"],
    },
    valueBar: [
      { id: "craft", title: "Small Batch", description: "Hand-finished", icon: "hand" },
      { id: "materials", title: "Honest Materials", description: "Bronze, wood, stone", icon: "leaf" },
      { id: "returns", title: "30-Day Returns", description: "Love it or return it", icon: "returns" },
      { id: "shipping", title: "Free Shipping", description: freeShippingOverOrdersCopy(), icon: "shipping" },
    ],
  },
} as const satisfies Record<string, ShopCategoryDefinition>;

export type ShopCatalogSlug = keyof typeof shopCatalog;
