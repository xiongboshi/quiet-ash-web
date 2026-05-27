import type { JournalArticleFaq } from "@/types/journal-faq";
import { JournalFaq } from "@/components/journal/journal-faq";

type Props = {
  faq: JournalArticleFaq;
};

export function JournalArticleFaqSection({ faq }: Props) {
  if (!faq.items.length) return null;

  return (
    <JournalFaq
      items={faq.items}
      title={faq.heading ?? "FAQ"}
      className="journal-index-faq"
      titleId="journal-article-faq-heading"
    />
  );
}
