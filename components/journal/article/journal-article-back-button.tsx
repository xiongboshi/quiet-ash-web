"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { JOURNAL_INDEX } from "@/lib/site-paths";
import type { JournalArticleHero } from "@/types/journal-article";

type Props = {
  breadcrumbs: JournalArticleHero["breadcrumbs"];
};

/** Returns to the previous history entry, or the parent journal category / index. */
export function JournalArticleBackButton({ breadcrumbs }: Props) {
  const router = useRouter();
  const parent =
    breadcrumbs.length >= 2 ? breadcrumbs[breadcrumbs.length - 2] : null;
  const fallbackHref = parent?.href ?? JOURNAL_INDEX;

  return (
    <button
      type="button"
      className="journal-article-hero__back"
      onClick={() => {
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.back();
          return;
        }
        router.push(fallbackHref);
      }}
    >
      <ArrowLeft size={16} strokeWidth={1.5} aria-hidden />
      <span>Back</span>
    </button>
  );
}
