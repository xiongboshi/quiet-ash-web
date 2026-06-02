"use client";

import { JournalFaq, type JournalFaqItem } from "@/components/journal/journal-faq";
import type { CustomerCareFaqItem } from "@/types/customer-care";

function toJournalFaqItems(items: readonly CustomerCareFaqItem[]): JournalFaqItem[] {
  return items.map((item) => ({
    id: item.id,
    question: item.question,
    answer: item.answer.map((text) => ({ type: "paragraph" as const, text })),
  }));
}

type Props = {
  items: readonly CustomerCareFaqItem[];
  title?: string;
  titleId?: string;
};

export function CustomerCareFaq({ items, title = "Frequently asked questions", titleId }: Props) {
  return (
    <JournalFaq
      items={toJournalFaqItems(items)}
      title={title}
      titleId={titleId}
      className="customer-care-faq journal-index-faq"
      showHeader={Boolean(title)}
    />
  );
}
