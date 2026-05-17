"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type ToastState = { title: string } | null;

export function useCartAddedToast() {
  const [toast, setToast] = useState<ToastState>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast(null);
  }, []);

  const show = useCallback((title: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ title });
    timerRef.current = setTimeout(() => setToast(null), 3600);
  }, []);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  return { toast, show, dismiss };
}

type ToastProps = {
  toast: ToastState;
  onDismiss: () => void;
};

/** Editorial confirmation — matches cart / CTA palette */
export function CartAddedToast({ toast, onDismiss }: ToastProps) {
  if (!toast) return null;

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="pointer-events-none fixed inset-x-0 bottom-[calc(5.25rem+env(safe-area-inset-bottom))] z-[60] flex justify-center px-4 lg:bottom-10"
    >
      <div
        role="status"
        className="pointer-events-auto w-full max-w-[min(100%,22rem)] border border-[#D9D3CA] bg-[#EBE7DF] px-5 py-4 shadow-[0_12px_40px_color-mix(in_srgb,#1a1816_8%,transparent)]"
      >
        <p className="m-0 font-[family-name:var(--font-sans)] text-[10px] font-medium uppercase tracking-[0.22em] text-[#6F6A63]">
          Added to your ritual
        </p>
        <p className="mt-1.5 font-[family-name:var(--font-serif)] text-[1.05rem] font-light leading-[1.2] tracking-[-0.02em] text-[var(--qa-text)]">
          {toast.title}
        </p>
        <div className="mt-3 flex items-center justify-between gap-4">
          <Link
            href="/cart"
            className="qa-cta qa-cta--still font-[family-name:var(--font-sans)] text-[11px] font-normal tracking-[0.02em] text-[#1a1816] underline decoration-[color-mix(in_srgb,#6F6A63_50%,transparent)] underline-offset-[4px] transition-opacity hover:opacity-70"
            onClick={onDismiss}
          >
            View cart
          </Link>
          <button
            type="button"
            onClick={onDismiss}
            className="font-[family-name:var(--font-sans)] text-[10px] font-medium uppercase tracking-[0.16em] text-[#6F6A63] transition-opacity hover:opacity-70"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
