# Shop CMS schema (P0–P2)

Quiet Ash shop data is file-based today; a future admin API should read/write the same JSON shape.

## Files

| Path | Purpose |
|------|---------|
| `data/shop-catalog.ts` | Aisle shell: hero, breadcrumbs, **filter group definitions**, listing title, sort labels, value bar. No product rows. |
| `data/products/<folder>/<slug>.json` | Canonical product + **`shop`** (PLP + filter tags) + optional inline **`shopPdp`**. |
| `data/shop-pdp/<slug>.json` | Optional PDP override sidecar (merged over defaults). |

## Product JSON — `shop`

```jsonc
{
  "slug": "wood-tray",
  "title": "…",
  "line": "…",
  "image": "/images/…",
  "priceDisplay": "$18.00",
  "shop": {
    "categorySlugs": ["incense", "holders"],
    "filterTags": {
      "scent": ["fruity"],
      "mood": ["sleep"],
      "holders": ["tray"],
      "price": ["under-20"],
      "material": ["walnut"],
      "type": ["tray"]
    },
    "plp": {
      "title": "Card title",
      "scentNotes": "Lemon · Bergamot",
      "priceDisplay": "$18.00",
      "reviewCount": 276,
      "imageSrc": "/images/…",
      "imageAlt": "…"
    },
    "plpByCategory": {
      "holders": { "title": "Walnut Tea Tray", "scentNotes": "…" }
    }
  }
}
```

- **`categorySlugs`**: which PLP aisles list this product (`incense`, `holders`, …).
- **`filterTags`**: keys must match `filters.groups[].id` in `shop-catalog.ts` for that aisle.
- **`plp` / `plpByCategory`**: optional card overrides per aisle. **Precedence (every card field):** `plpByCategory[aisle]` → **catalog canonical** (same source as PDP: `title`, `priceDisplay`, `image`, `material`·`origin` or `line`) → `plp` last. Do not leave stale incense-template copy in `plp` — it will override the real product on aisles without a `plpByCategory` row.
- **Reviews on card:** `plpByCategory.reviewCount` → `shopPdp.rating.count` → `plp.reviewCount`.

## Filter behaviour (P0)

- Sidebar options come from `shop-catalog.ts` → `filters.groups`.
- **`count`** on each option is computed at runtime from products in the aisle (faceted when other groups are selected).
- **`listing.productCount`** is computed from the filtered product list.
- Logic: `lib/shop-products.ts` — AND across groups, OR within a group.

## Shop aisle — `shop-catalog.ts`

```ts
filters: {
  heading: "FILTER BY",
  clearLabel: "CLEAR ALL",
  groups: [
    {
      id: "scent",           // must match filterTags key
      label: "SCENT FAMILY",
      tabLabel: "Scent",
      defaultOpen: true,
      options: [{ id: "fruity", label: "Fruity", count: 0 }]
    }
  ]
}
```

`count` in config is ignored after resolve; keep `0` or omit when editing by hand.

## PDP — `shopPdp` / `data/shop-pdp/<slug>.json`

See `lib/shop-types.ts` → `ShopProductPdp`. Loaded in `lib/shop-pdp.ts` via `getShopProductPdp(product)`:

1. Defaults from catalog fields.
2. Merge `product.shopPdp` if present.
3. Merge `data/shop-pdp/<slug>.json` sidecar if present.

## Runtime API (for future admin)

| Function | Module |
|----------|--------|
| `resolveShopCategory(slug)` | `lib/shop-catalog-resolved.ts` |
| `getAllProducts()` | `lib/catalog.ts` |
| `getShopProductPdp(product)` | `lib/shop-pdp.ts` |

## Adding a product

1. Create `data/products/<folder>/<slug>.json` with required catalog fields + `shop`.
2. Ensure `shop.categorySlugs` includes the target aisle(s).
3. Tag every relevant `filters.groups[].id` in `filterTags`.
4. Optional: `data/shop-pdp/<slug>.json` for full PDP.
5. Do not add rows to `shop-catalog.ts` `products` (removed in P1).

## Homepage “Shop by need” (mood strip)

- Copy: `moodHome` on the incense aisle in `shop-catalog.ts`.
- Cards: every option in the `mood` filter group (`id: "mood"`). Add or edit an option there to update the homepage automatically.
- Per-card image/description: optional `homeCard` on each mood `options[]` entry (falls back to generic copy + hero image if omitted).
- Links: `/shop?mood=<option.id>` — PLP reads `mood` on load and checks the matching sidebar option.
- Runtime: `getShopMoodHomeSection()` in `lib/shop-mood-home.ts`; UI: `ScentFamilyStrip` (same layout as About scent families).

## Adding a filter group

1. Add `groups[]` entry on the aisle in `shop-catalog.ts`.
2. Add matching keys on each product’s `shop.filterTags`.
