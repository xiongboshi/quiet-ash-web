import {
  heroSlide01Prompt,
  heroSlide03Prompt,
  heroV5HomePrompt,
  HERO_SLIDE_01_LAYERS,
  HERO_V5_HOME_OUTPUT,
} from "../data/hero-image-prompts";

console.log("— Hero v5 (homepage primary) —");
console.log(`Output: ${HERO_V5_HOME_OUTPUT.publicPath}\n`);
console.log(heroV5HomePrompt);
console.log("\n— Hero slide 01 — layer order —");
for (const [i, layer] of HERO_SLIDE_01_LAYERS.entries()) {
  console.log(`${i + 1}. ${layer}`);
}
console.log("\n— Slide 01 prompt —\n");
console.log(heroSlide01Prompt);
console.log("\n— Slide 03 prompt —\n");
console.log(heroSlide03Prompt);
