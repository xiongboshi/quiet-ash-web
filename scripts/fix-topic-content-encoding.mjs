import fs from "node:fs";

const path = "data/journal-topic-page-content.ts";
let text = fs.readFileSync(path, "utf8");
text = text.replace(
  /heroMeta: "20 Articles[^"]*12 FAQs"/,
  'heroMeta: "20 Articles | 1 Guide | 12 FAQs"',
);
fs.writeFileSync(path, text, "utf8");
new TextDecoder("utf-8", { fatal: true }).decode(fs.readFileSync(path));
console.log("fixed", path);
