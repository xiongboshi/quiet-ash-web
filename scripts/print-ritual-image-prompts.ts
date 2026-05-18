import {
  fullPromptFor,
  getRitualImagePrompts,
  ritualImagePath,
  ritualImagePrompts,
} from "../data/ritual-image-prompts";

const slugArg = process.argv[2];
const list = slugArg
  ? ritualImagePrompts.filter((r) => r.slug === slugArg)
  : ritualImagePrompts;

if (slugArg && list.length === 0) {
  console.error(`Unknown ritual slug: ${slugArg}`);
  process.exit(1);
}

for (const ritual of list) {
  console.log(`\n========== ${ritual.slug} ==========\n`);
  console.log(`FILE: public${ritualImagePath(ritual.slug, "cover")}\n`);
  console.log(fullPromptFor(ritual.cover));
  ritual.steps.forEach((step, i) => {
    const n = (i + 1) as 1 | 2 | 3 | 4;
    console.log(`\n--- step-0${n} ---\n`);
    console.log(`FILE: public${ritualImagePath(ritual.slug, n)}\n`);
    console.log(fullPromptFor(step));
  });
}

// validate slugs exist in content
void getRitualImagePrompts;
