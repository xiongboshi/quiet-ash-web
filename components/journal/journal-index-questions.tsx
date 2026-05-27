"use client";

import {
  journalPopularQuestions,
} from "@/data/journal-popular-questions";
import { JournalFaq } from "@/components/journal/journal-faq";

type Props = {
  showHeader?: boolean;
};

export function JournalIndexQuestions({ showHeader = true }: Props) {
  return (
    <JournalFaq
      items={journalPopularQuestions}
      title="Popular Questions"
      showHeader={showHeader}
    />
  );
}
