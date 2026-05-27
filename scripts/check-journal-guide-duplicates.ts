import { journalGuideArticleSlugs } from "@/data/journal-guide-slugs";
import { journalArticleRegistry } from "@/data/journal-articles/index";
import {
  findGuideArticleDuplicates,
  formatGuideArticleDuplicateReport,
} from "@/lib/journal-article-duplicate-check";

let report = "";
let failed = false;

for (const slug of journalGuideArticleSlugs) {
  const article = journalArticleRegistry[slug];
  if (!article) {
    console.error(`Missing guide article: ${slug}`);
    failed = true;
    continue;
  }
  const duplicates = findGuideArticleDuplicates(article);
  if (duplicates.length) {
    failed = true;
    report += formatGuideArticleDuplicateReport(slug, duplicates);
  }
}

if (failed) {
  console.error(
    "Journal guide articles contain duplicate sentences across blocks (quick answer, takeaways, intro, body, FAQ).",
  );
  console.error(report);
  process.exit(1);
}

console.log("No duplicate prose found across journal guide article blocks.");
