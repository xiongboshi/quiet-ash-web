"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { navigateHistoryBack } from "@/lib/history-back";

type Props = {
  fallbackHref: string;
  className?: string;
};

/** Mobile nav bar — uses `.nav-mobile-toggle` for parity with the menu control. */
export function QaMobileBackButton({ fallbackHref, className = "" }: Props) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={`nav-mobile-toggle${className ? ` ${className}` : ""}`}
      aria-label="Go back"
      onClick={() => navigateHistoryBack(router, fallbackHref)}
    >
      <ArrowLeft size={20} strokeWidth={1.35} aria-hidden />
    </button>
  );
}
