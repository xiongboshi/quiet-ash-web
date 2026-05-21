import type { Metadata } from "next";
import {
  JournalArchiveIndex,
  buildJournalArchiveMetadata,
  type JournalArchiveIndexProps,
} from "@/lib/journal-archive-index";
import { JOURNAL_INDEX } from "@/lib/site-paths";

export const dynamic = "force-dynamic";

/** Legacy index — same as /journal, no redirect. */
export async function generateMetadata(
  props: JournalArchiveIndexProps,
): Promise<Metadata> {
  return buildJournalArchiveMetadata({
    ...props,
    canonicalPath: JOURNAL_INDEX,
  });
}

export default function SeriesIndexPage(props: JournalArchiveIndexProps) {
  return <JournalArchiveIndex {...props} />;
}
