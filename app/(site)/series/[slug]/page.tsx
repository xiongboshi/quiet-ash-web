import type { Metadata } from "next";
import {
  JournalArchiveIndex,
  buildJournalArchiveMetadata,
} from "@/lib/journal-archive-index";
import { JOURNAL_INDEX } from "@/lib/site-paths";
import { getSeriesBySlug } from "@/lib/series";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ collection?: string }>;
};

/** Legacy /series/:slug — renders collection without 301 (was redirecting to bare /journal). */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!getSeriesBySlug(slug)) notFound();
  return buildJournalArchiveMetadata({
    searchParams: Promise.resolve({ collection: slug }),
    canonicalPath: `${JOURNAL_INDEX}?collection=${encodeURIComponent(slug)}`,
  });
}

export default async function SeriesSlugPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getSeriesBySlug(slug)) notFound();
  return (
    <JournalArchiveIndex
      searchParams={Promise.resolve({ collection: slug })}
    />
  );
}
