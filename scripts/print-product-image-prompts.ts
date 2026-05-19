import {
  fullProductHeroPrompt,
  fullProductPrompt,
  productImagePath,
  productImagePrompts,
} from "../data/product-image-prompts";

const slugArg = process.argv[2];
const list = slugArg
  ? productImagePrompts.filter((e) => e.slug === slugArg)
  : productImagePrompts;

if (slugArg && list.length === 0) {
  console.error(`Unknown product slug: ${slugArg}`);
  process.exit(1);
}

for (const entry of list) {
  console.log(`\n========== ${entry.slug} ==========\n`);
  console.log(`HERO: public${productImagePath(entry.slug, "hero")}\n`);
  console.log(fullProductHeroPrompt(entry.hero));
  entry.gallery.forEach((g, i) => {
    const key = `g${i + 1}` as "g1" | "g2" | "g3" | "g4";
    console.log(`\n--- gallery ${i + 1}: public${productImagePath(entry.slug, key)} ---\n`);
    console.log(fullProductPrompt(g));
  });
  console.log(`\n--- narrative (Morning Quiet) ---\n`);
  console.log(fullProductPrompt(entry.narrative));
  console.log(`\n--- atmosphere (Morning Quiet) ---\n`);
  console.log(fullProductPrompt(entry.atmosphere));
}
