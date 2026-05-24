import fs from "node:fs";

const path = "components/mood/mood-sections.tsx";
let c = fs.readFileSync(path, "utf8");

const posterImg = `<div className="relative flex flex-1 items-end justify-center px-3 pt-8 pb-0">
                  <div className="relative h-[min(58%,200px)] w-[78%] max-w-[140px]">
                    <Image
                      src={mood.imageSrc}
                      alt={mood.imageAlt}
                      fill
                      className="qa-mood-poster-img object-contain object-bottom drop-shadow-[0_20px_40px_rgba(28,24,20,0.12)]"
                      sizes="160px"
                      unoptimized
                    />
                  </div>
                </div>`;

c = c.replace("                <div />\n                <div className=\"relative z-[2]", `${posterImg}\n                <div className="relative z-[2]`);

const productMetaReal = `<div className="mt-6 space-y-1.5 px-1">
                    <p className="font-[family-name:var(--font-serif)] text-[18px] font-light tracking-[-0.02em] text-[var(--mood-ink)]">
                      {p.title}
                    </p>
                    {meta ? (
                      <>
                        <p className="text-[11px] tracking-[0.08em] text-[var(--mood-ink-muted)]">
                          {meta.mood}
                        </p>
                        <p className="text-[12px] text-[var(--mood-ink-soft)]">
                          {meta.scentNotes}
                        </p>
                      </>
                    ) : p.line ? (
                      <p className="text-[12px] text-[var(--mood-ink-soft)]">{p.line}</p>
                    ) : null}
                    {p.priceDisplay ? (
                      <p className="pt-1 text-[13px] text-[var(--mood-ink)]">{p.priceDisplay}</p>
                    ) : null}
                  </div>`;

c = c.replace("                  <div />\n                </Link>", `${productMetaReal}\n                </Link>`);

fs.writeFileSync(path, c);
console.log("patched");
