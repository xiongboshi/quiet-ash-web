# Journal article templates

## MDX-first (preferred)

1. Add or edit `content/essays/{series}/{slug}.mdx` with journal frontmatter — see [docs/JOURNAL-CMS-SCHEMA.md](../../docs/JOURNAL-CMS-SCHEMA.md).
2. Ensure the series is listed in `data/journal-index-config.ts` → `journalIndexSeriesSlugs`.
3. `/journal` and `/journal/[slug]` update automatically (registry built from index cards + MDX).

## Hand override (guide mocks)

For layouts that do not map to editorial MDX (e.g. `best-incense-for-sleep`):

- Index card: `data/journal-index-articles.ts` → `journalDesignShowcaseCard`
- Full template: `data/journal-articles/<slug>.ts` — wins over `buildJournalArticleFromIndexCard` in `data/journal-articles/index.ts`

## Dual titles

- **`headline`** — H1 on index cards and article hero (brand voice)
- **`seoTitle`** — `<title>` / Open Graph (discovery)

Set both in MDX frontmatter; do not rely on `data/journal-essay-card-meta.ts` (deprecated).
