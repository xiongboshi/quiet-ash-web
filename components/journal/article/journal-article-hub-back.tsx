import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BETTER_SLEEP_HUB_BACK } from "@/data/journal-sleep-hub";

export function JournalArticleHubBack() {
  return (
    <nav className="journal-article__hub-back" aria-label="Topic hub">
      <Link href={BETTER_SLEEP_HUB_BACK.href} className="journal-article__hub-back-link">
        <ArrowLeft size={16} strokeWidth={1.25} aria-hidden />
        <span>{BETTER_SLEEP_HUB_BACK.label}</span>
      </Link>
    </nav>
  );
}
