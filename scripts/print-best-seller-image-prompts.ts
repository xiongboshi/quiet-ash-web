import { bestSellerImagePrompts } from "../data/best-seller-image-prompts";
import { QA_BRAND_BASE, QA_PHOTO_RULES } from "../data/visual-prompts";

console.log("Quiet Ash — BEST SELLERS realign prompts (cards 1–2)\n");

for (const item of bestSellerImagePrompts) {
  console.log("—".repeat(72));
  console.log(`ID: ${item.id}`);
  console.log(`OUT: ${item.outfile}\n`);
  console.log([QA_BRAND_BASE, QA_PHOTO_RULES, item.prompt].join("\n\n"));
  console.log("\n");
}
