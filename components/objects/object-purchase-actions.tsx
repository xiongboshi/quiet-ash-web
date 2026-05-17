import Link from "next/link";

const ritualClass =
  "qa-cta qa-cta--still inline-flex items-center justify-center gap-2 border border-[color-mix(in_srgb,#1a1816_12%,transparent)] bg-[#e8e4dc] px-4 py-3.5 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.2em] text-[#1a1816] no-underline transition-opacity duration-[500ms] ease-out hover:opacity-85";

const buyClass =
  "qa-cta qa-cta--still inline-flex items-center justify-center border border-[color-mix(in_srgb,#1a1816_45%,transparent)] bg-transparent px-4 py-3.5 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.2em] text-[#1a1816] no-underline transition-opacity duration-[500ms] ease-out hover:opacity-70";

const buyPrimaryClass =
  "qa-cta qa-cta--still inline-flex flex-1 items-center justify-center border border-[#1a1816] bg-[#1a1816] px-4 py-3.5 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.2em] text-[#e8e4dc] no-underline transition-opacity duration-[500ms] ease-out hover:opacity-90";

function IconBag({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
      <path d="M5 9h14v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9Z" />
      <path d="M5 9V8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1" />
    </svg>
  );
}

type Props = {
  ritualHref?: string;
  buyHref?: string;
};

/** Stacked CTAs in the hero column — desktop only. */
export function ObjectPurchaseActionsInline({
  ritualHref = "/rituals",
  buyHref = "/objects",
}: Props) {
  return (
    <div className="mt-10 hidden w-full max-w-full flex-col gap-3 lg:flex">
      <Link
        href={ritualHref}
        className={`${ritualClass} w-full justify-between gap-4 px-5`}
      >
        <span>Add to ritual</span>
        <IconBag className="h-[18px] w-[18px] shrink-0 text-[#1a1816]" />
      </Link>
      <Link href={buyHref} className={`${buyClass} w-full px-5`}>
        Buy now
      </Link>
    </div>
  );
}

/** Fixed bottom bar on small screens — left add, right buy. */
export function ObjectMobilePurchaseDock({
  ritualHref = "/rituals",
  buyHref = "/objects",
}: Props) {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 lg:hidden"
      role="region"
      aria-label="Purchase actions"
    >
      <div className="pointer-events-auto border-t border-[color-mix(in_srgb,#ddd7cf_90%,transparent)] bg-[color-mix(in_srgb,var(--qa-bg)_92%,transparent)] px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-[6px]">
        <div className="mx-auto flex w-full max-w-[min(100%,var(--qa-container-width))] gap-3">
          <Link href={ritualHref} className={`${ritualClass} min-h-[48px] flex-1`}>
            Add to ritual
          </Link>
          <Link href={buyHref} className={`${buyPrimaryClass} min-h-[48px] flex-1`}>
            Buy now
          </Link>
        </div>
      </div>
    </div>
  );
}
