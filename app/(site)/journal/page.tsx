import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArchiveMarginalia } from "@/components/archive/archive-marginalia";
import { ArchiveStrandContents } from "@/components/archive/archive-strand-contents";
import { CollectionsShelfNav } from "@/components/archive/collections-shelf-nav";
import { EssaysArchiveDesktopIntro } from "@/components/archive/essays-archive-desktop-intro";
import { EssaysArchiveFilterSection } from "@/components/archive/essays-archive-filter-section";
import { RelatedCollectionsRow } from "@/components/collection/related-collections-row";
import { EssaysTheEssence } from "@/components/sections/essays-the-essence";
import { essaysArchiveShellClass } from "@/components/sections/essays-archive-shell";
import {
  PRIMARY_ARCHIVE_SERIES_SLUG,
  resolveActiveCollectionSlug,
} from "@/lib/archive";
import { getEssaysInSeries } from "@/lib/essays";
import { getAllSeries, getSeriesBySlug } from "@/lib/series";
import { JOURNAL_INDEX } from "@/lib/site-paths";

/** Always read `content/essays` from disk (local MDX edits show without stale prerender). */
export const dynamic = "force-dynamic";

type PageProps = {
  searchParams?: Promise<{ collection?: string }>;
};

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const sp = (await searchParams) ?? {};
  const activeSlug = resolveActiveCollectionSlug(sp.collection);
  const series = getSeriesBySlug(activeSlug);
  if (!series) return { title: "Journal" };
  const isPrimary = activeSlug === PRIMARY_ARCHIVE_SERIES_SLUG;
  const description = (series.tagline || series.description)
    .replace(/\s+/g, " ")
    .trim();
  return {
    title: `${series.title} · Journal`,
    description,
    alternates: {
      canonical: isPrimary
        ? JOURNAL_INDEX
        : `${JOURNAL_INDEX}?collection=${encodeURIComponent(activeSlug)}`,
    },
  };
}

export default async function JournalPage({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? {};
  const activeSlug = resolveActiveCollectionSlug(sp.collection);
  const series = getSeriesBySlug(activeSlug);
  if (!series) notFound();

  const seriesList = getAllSeries();
  const essays = getEssaysInSeries(activeSlug);
  const threadsLine =
    series.threads?.map((t) => t.toLowerCase()).join(" · ") ?? "";

  return (
    <>
      <div className="bg-paper">
        <div className="lg:hidden">
          <EssaysTheEssence series={series} />
          <EssaysArchiveFilterSection
            seriesList={seriesList}
            activeSlug={activeSlug}
          />
          <section
            className="pb-16 pt-10 sm:pt-12"
            aria-label="Journal archive"
          >
            <div className={essaysArchiveShellClass}>
              <div className="mb-10">
                <ArchiveMarginalia
                  series={series}
                  essayCount={essays.length}
                />
              </div>
              {threadsLine ? (
                <p className="mb-10 max-w-[52ch] font-[family-name:var(--font-sans)] text-[12px] font-normal normal-case leading-relaxed tracking-[0.06em] text-[color-mix(in_srgb,var(--wood)_50%,var(--ash))]">
                  {threadsLine}
                </p>
              ) : null}
              <ArchiveStrandContents essays={essays} />
              <RelatedCollectionsRow
                seriesList={seriesList}
                excludeSlug={activeSlug}
              />
            </div>
          </section>
        </div>

        <div className="hidden overflow-x-clip border-t border-[#DDD7CF] lg:block">
          <div
            className={`${essaysArchiveShellClass} grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-x-10 xl:gap-x-14`}
          >
            <aside className="self-start py-10 lg:row-span-2 lg:py-12">
              <CollectionsShelfNav
                seriesList={seriesList}
                activeSlug={activeSlug}
              />
            </aside>

            <EssaysArchiveDesktopIntro
              series={series}
              essayCount={essays.length}
            />

            <section
              className="min-w-0 pb-16 pt-10 sm:pt-12 lg:pb-20"
              aria-label="Journal archive"
            >
              <div className="grid grid-cols-1 items-start gap-0 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-x-[72px]">
                <main className="min-w-0 max-w-none">
                  {threadsLine ? (
                    <p className="mb-10 max-w-[52ch] font-[family-name:var(--font-sans)] text-[12px] font-normal normal-case leading-relaxed tracking-[0.06em] text-[color-mix(in_srgb,var(--wood)_50%,var(--ash))] lg:mb-12">
                      {threadsLine}
                    </p>
                  ) : null}

                  <ArchiveStrandContents essays={essays} />

                  <RelatedCollectionsRow
                    seriesList={seriesList}
                    excludeSlug={activeSlug}
                  />
                </main>

                <aside className="hidden min-w-0 lg:block">
                  <ArchiveMarginalia
                    series={series}
                    essayCount={essays.length}
                    className="sticky top-[120px]"
                  />
                </aside>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
