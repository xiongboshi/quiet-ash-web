# Journal article templates

Each published journal URL needs an entry in `journalArticleRegistry` (`index.ts`).

## Dual titles (required)

Every article uses **two titles**:

| Field | Role | Example |
|-------|------|---------|
| `headline` | H1 on page — human, emotional, brand | Good Incense Shouldn't Feel Loud |
| `seoTitle` | `<title>` / Open Graph — search & Pinterest | Best Soft-Smelling Incense For Calm Evenings |

- **Editorial essays** (`content/essays/incense-culture/`): set both in `data/journal-essay-card-meta.ts` per slug.
- **Hand template** (`best-incense-for-sleep.ts`): `hero.title` = headline, top-level `seoTitle` = SEO title.
- **Index showcase card**: `headline` + `seoTitle` in `data/journal-index-articles.ts`.

MDX frontmatter `title` can stay as a working label; the site uses `journal-essay-card-meta` for display and metadata.

## Two ways to add content

### A. Index + MDX auto-fill (most articles)

Index cards come from `lib/get-journal-index-articles.ts` (design showcase + all essays in `content/essays/incense-culture/`). Category/tags per slug: `data/journal-essay-card-meta.ts`.

Articles listed on the journal grid are built automatically:

- Hero, SEO, quick answer, takeaways, related cards → from the index card
- Body sections → from English prose in `content/essays/{series}/{slug}.mdx` (via `lib/journal-article-from-index.ts`)

No per-slug file required unless you need to override the template.

### B. Hand-authored template (design reference)

Copy `best-incense-for-sleep.ts` for a fully custom module layout (e.g. the sleep guide mock).

Register explicitly in `index.ts` (already done for `best-incense-for-sleep`).

## Modules (fixed order)

| Module | Data keys |
|--------|-----------|
| Hero | `hero` |
| Quick answer + Key takeaways | `quickAnswer`, `keyTakeaways` |
| Body | `bodyFormat`: `editorial` (full prose) or `guide` (numbered `sections[]`) |
| Product picks | `products` |
| Related articles | `related` |

Icons: Lucide only (`JournalTakeawayIconId` in `types/journal-article.ts`).
