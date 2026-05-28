import type { Metadata } from "next";
import { JournalIndexPage } from "@/components/journal/journal-index-page";
import { journalIndexHero } from "@/data/journal-index";
import { JOURNAL_INDEX } from "@/lib/site-paths";

export const metadata: Metadata = {
  title: "Journal",
  description: `${journalIndexHero.tagline} ${journalIndexHero.lede}`,
  alternates: { canonical: JOURNAL_INDEX },
};

export default function JournalPage() {
  return <JournalIndexPage />;
}
