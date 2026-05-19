import { heroSlide01Prompt, HERO_SLIDE_01_LAYERS } from "../data/hero-image-prompts";

console.log("— Hero slide 01 — layer order —");
for (const [i, layer] of HERO_SLIDE_01_LAYERS.entries()) {
  console.log(`${i + 1}. ${layer}`);
}
console.log("\n— Full prompt —\n");
console.log(heroSlide01Prompt);
