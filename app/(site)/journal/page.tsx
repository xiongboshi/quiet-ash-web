import type { Metadata } from "next";
import {
  JournalArchiveIndex,
  buildJournalArchiveMetadata,
  type JournalArchiveIndexProps,
} from "@/lib/journal-archive-index";

export const dynamic = "force-dynamic";

export async function generateMetadata(
  props: JournalArchiveIndexProps,
): Promise<Metadata> {
  return buildJournalArchiveMetadata(props);
}

export default function JournalPage(props: JournalArchiveIndexProps) {
  return <JournalArchiveIndex {...props} />;
}
