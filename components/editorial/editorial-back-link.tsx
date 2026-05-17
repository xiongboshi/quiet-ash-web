"use client";

import { useRouter } from "next/navigation";

const backClass =
  "qa-cta qa-cta--still qa-meta hidden cursor-pointer self-start border-0 bg-transparent p-0 font-[family-name:var(--font-sans)] text-[11px] font-normal uppercase tracking-[0.2em] text-[#6f6a63] underline decoration-[color-mix(in_srgb,#6f6a63_35%,transparent)] underline-offset-[0.35em] lg:inline-block";

type Props = {
  fallbackHref: string;
};

/** Desktop hero back — browser history, else section index fallback. */
export function EditorialBackLink({ fallbackHref }: Props) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={backClass}
      aria-label="Return"
      onClick={() => {
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.back();
          return;
        }
        router.push(fallbackHref);
      }}
    >
      ← Return
    </button>
  );
}
