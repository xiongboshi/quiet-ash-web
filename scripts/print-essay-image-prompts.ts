import {
  essayImagePath,
  essayImagePrompts,
  fullEssayPrompt,
} from "../data/essay-image-prompts";

const slugArg = process.argv[2];
const list = slugArg
  ? essayImagePrompts.filter((e) => e.slug === slugArg)
  : essayImagePrompts;

if (slugArg && list.length === 0) {
  console.error(`Unknown essay slug: ${slugArg}`);
  process.exit(1);
}

for (const entry of list) {
  console.log(`\n========== ${entry.slug} ==========\n`);
  console.log(`FILE: public${essayImagePath(entry.slug)}\n`);
  console.log(fullEssayPrompt(entry));
}
