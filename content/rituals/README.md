# Rituals content

Add a new ritual: create `{slug}.mdx` here. All page copy and structure are configured in **frontmatter** (no code changes).

## Required frontmatter

| Field | Purpose |
|-------|---------|
| `title` | Page H1 |
| `excerpt` | Card + SEO description |
| `mood` | Eyebrow tags |
| `reading_time` | Minutes |
| `relatedProducts` | Product slugs for commerce rail |
| `ritual_section.steps` | 4 steps: `title`, `body`, `image` |
| `objects_section` | Label, subtext, CTA |

## Optional

`coverImage`, `intro_aside_image`, `closing_quote`, `next_ritual`, `related_essay`

## Images

Place files under `public/images/generated/rituals/{slug}/`:

- `cover.png`
- `step-01.png` … `step-04.png`

Prompts: `data/ritual-image-prompts.ts` · brand rules: `docs/QUIET-ASH-VISUAL-BIBLE.md`

## Example paths

```yaml
coverImage: /images/generated/rituals/my-ritual/cover.png
ritual_section:
  steps:
    - title: "Step one"
      body: "…"
      image: /images/generated/rituals/my-ritual/step-01.png
```
