import type { Metadata } from "next";
import {
  JournalArchiveIndex,
  buildJournalArchiveMetadata,
  type JournalArchiveIndexProps,
} from "@/lib/journal-archive-index";
import { JOURNAL_INDEX } from "@/lib/site-paths";

export const dynamic = "force-dynamic";

/** Legacy URL — serves journal archive without 301 (canonical → /journal). */
export async function generateMetadata(
  props: JournalArchiveIndexProps,
): Promise<Metadata> {
  return buildJournalArchiveMetadata({
    ...props,
    canonicalPath: JOURNAL_INDEX,
  });
}

export default function ArchivePage(props: JournalArchiveIndexProps) {
  return <JournalArchiveIndex {...props} />;
}
