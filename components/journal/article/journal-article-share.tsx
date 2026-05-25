"use client";

import { ExternalLink, Share2 } from "lucide-react";

export function JournalArticleShare() {
  const handleShare = async () => {
    const url = window.location.href;
    const title = document.title;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        /* fall through */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      /* noop */
    }
  };

  return (
    <button
      type="button"
      className="journal-article-hero__share"
      onClick={handleShare}
    >
      <Share2 size={14} strokeWidth={1.25} aria-hidden />
      <span>Share</span>
      <ExternalLink size={12} strokeWidth={1.25} aria-hidden />
    </button>
  );
}
