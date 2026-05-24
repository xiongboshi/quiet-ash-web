import fs from "node:fs";

const p = new URL("../components/mood/mood-sections.tsx", import.meta.url);
let s = fs.readFileSync(p, "utf8");
const start = s.indexOf('<section className="px-[var(--mood-px)] py-[var(--mood-section-y)]">');
const end = s.indexOf('<footer className="border-t');
if (start < 0 || end < 0) throw new Error("markers not found");
s = `${s.slice(0, start)}      <MoodMomentsGrid />\n\n      ${s.slice(end)}`;
s = s.replace(/moments\.items/g, "homeMoments");
fs.writeFileSync(p, s);

const g = new URL("../components/mood/mood-moments-grid.tsx", import.meta.url);
fs.writeFileSync(g, fs.readFileSync(g, "utf8").replace(/motionHome/g, "motionHome"));
fs.writeFileSync(g, fs.readFileSync(g, "utf8").replace(/motionHome/g, "div"));
console.log("fixed");
