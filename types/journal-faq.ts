/** One block in a journal FAQ answer. */
export type JournalFaqBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "subheading"; text: string };

export type JournalFaqItem = {
  id: string;
  question: string;
  answer: readonly JournalFaqBlock[];
};

export type JournalArticleFaq = {
  heading?: string;
  items: readonly JournalFaqItem[];
};
