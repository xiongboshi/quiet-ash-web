import type { JournalArticleFaq, JournalFaqBlock } from "@/types/journal-faq";

function faqAnswerToPlainText(blocks: readonly JournalFaqBlock[]): string {
  return blocks
    .map((block) => {
      if (block.type === "paragraph" || block.type === "subheading") {
        return block.text;
      }
      if (block.type === "list") {
        return block.items.join(" ");
      }
      return "";
    })
    .filter(Boolean)
    .join(" ");
}

/** FAQPage JSON-LD for guide articles with an FAQ block. */
export function buildJournalFaqPageJsonLd(
  faq: JournalArticleFaq,
  pageUrl: string,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerToPlainText(item.answer),
      },
    })),
  };
}
