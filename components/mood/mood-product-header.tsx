import Link from "next/link";
import { JOURNAL_INDEX, MOODS_INDEX, SHOP_INDEX } from "@/lib/site-paths";
import { MoodMobileMenu } from "@/components/mood/mood-mobile-menu";
import { MoodProductCartButton } from "@/components/mood/mood-product-purchase";

const navLink =
  "text-[11px] uppercase tracking-[0.18em] text-[#1C1C1C] no-underline transition-opacity hover:opacity-55";

export function MoodProductHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F8F5EE]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[min(100%,1200px)] items-center justify-between px-6">
        <Link
          href="/"
          className="qa-mood-wordmark qa-mood-wordmark--left-mobile relative z-10 shrink-0 text-left md:static"
        >
          <span className="qa-mood-wordmark-title text-[13px] font-semibold tracking-[0.28em]">
            Quiet Ash
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-8 md:flex">
          <Link href={SHOP_INDEX} className={navLink}>
            Shop
          </Link>
          <Link href={MOODS_INDEX} className={navLink}>
            Moods
          </Link>
          <Link href={JOURNAL_INDEX} className={navLink}>
            Journal
          </Link>
        </nav>

        <div className="hidden md:block">
          <MoodProductCartButton />
        </div>

        <MoodMobileMenu />
      </div>
    </header>
  );
}
