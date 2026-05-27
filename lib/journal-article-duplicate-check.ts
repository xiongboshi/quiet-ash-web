import type { JournalArticleTemplate } from "@/types/journal-article";

export type JournalArticleTextBlock = {
  zone: string;
  text: string;
};

function normalizeForCompare(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.!?]+$/, "");
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length >= 30);
}

/** Collect prose blocks from a guide template for duplicate analysis. */
export function collectGuideArticleTextBlocks(
  article: JournalArticleTemplate,
): JournalArticleTextBlock[] {
  if (article.bodyFormat !== "guide") return [];

  const blocks: JournalArticleTextBlock[] = [];

  const push = (zone: string, text: string | undefined) => {
    const trimmed = text?.trim();
    if (trimmed) blocks.push({ zone, text: trimmed });
  };

  for (const [index, paragraph] of (article.quickAnswer.paragraphs ?? []).entries()) {
    push(`quickAnswer[${index}]`, paragraph);
  }
  if (article.quickAnswer.text) {
    push("quickAnswer", article.quickAnswer.text);
  }

  for (const [index, item] of (article.keyTakeaways ?? []).entries()) {
    push(`keyTakeaways[${index}]`, item.text);
  }
  for (const [index, bullet] of (article.keyTakeawayBullets ?? []).entries()) {
    push(`keyTakeawayBullets[${index}]`, bullet);
  }

  for (const [index, paragraph] of (article.intro?.paragraphs ?? []).entries()) {
    push(`intro[${index}]`, paragraph);
  }

  for (const section of article.sections) {
    const sectionLabel = section.id ?? section.heading;
    for (const [index, paragraph] of (section.paragraphs ?? []).entries()) {
      push(`sections.${sectionLabel}[${index}]`, paragraph);
    }
    for (const bullet of section.bullets ?? []) {
      push(`sections.${sectionLabel}.bullet`, bullet.text);
    }
    for (const subsection of section.subsections ?? []) {
      for (const [index, paragraph] of (subsection.paragraphs ?? []).entries()) {
        push(`sections.${sectionLabel}.${subsection.heading}[${index}]`, paragraph);
      }
    }
  }

  for (const [itemIndex, item] of (article.faq?.items ?? []).entries()) {
    for (const [blockIndex, block] of item.answer.entries()) {
      if (block.type === "paragraph") {
        push(`faq[${itemIndex}].${item.id}[${blockIndex}]`, block.text);
      }
      if (block.type === "subheading") {
        push(`faq[${itemIndex}].${item.id}.subheading`, block.text);
      }
      for (const [liIndex, li] of (block.type === "list" ? block.items : []).entries()) {
        push(`faq[${itemIndex}].${item.id}.list[${liIndex}]`, li);
      }
    }
  }

  return blocks;
}

export type JournalArticleDuplicate = {
  normalized: string;
  occurrences: { zone: string; text: string }[];
};

/** Exact duplicate paragraphs or sentences (≥30 chars) across zones. */
export function findGuideArticleDuplicates(
  article: JournalArticleTemplate,
): JournalArticleDuplicate[] {
  const blocks = collectGuideArticleTextBlocks(article);
  const byNormalized = new Map<string, { zone: string; text: string }[]>();

  const register = (zone: string, fragment: string) => {
    const normalized = normalizeForCompare(fragment);
    if (normalized.length < 30) return;
    const list = byNormalized.get(normalized) ?? [];
    list.push({ zone, text: fragment });
    byNormalized.set(normalized, list);
  };

  for (const block of blocks) {
    register(block.zone, block.text);
    for (const sentence of splitSentences(block.text)) {
      register(block.zone, sentence);
    }
  }

  const duplicates: JournalArticleDuplicate[] = [];
  for (const [normalized, occurrences] of byNormalized) {
    const zones = new Set(occurrences.map((o) => o.zone));
    if (zones.size < 2) continue;
    duplicates.push({ normalized, occurrences });
  }

  return duplicates.sort((a, b) => a.normalized.localeCompare(b.normalized));
}

export function formatGuideArticleDuplicateReport(
  slug: string,
  duplicates: JournalArticleDuplicate[],
): string {
  if (!duplicates.length) return "";
  const lines = [`\n${slug}:`];
  for (const dup of duplicates) {
    lines.push(`  duplicate: "${dup.normalized.slice(0, 80)}${dup.normalized.length > 80 ? "…" : ""}"`);
    for (const { zone, text } of dup.occurrences) {
      lines.push(`    - ${zone}: ${text.slice(0, 100)}${text.length > 100 ? "…" : ""}`);
    }
  }
  return lines.join("\n");
}
