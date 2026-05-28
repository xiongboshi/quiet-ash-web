"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { navigateHistoryBack } from "@/lib/history-back";

type Props = {
  fallbackHref: string;
  variant?: "bar" | "drawer";
  className?: string;
  onNavigate?: () => void;
};

export function QaMobileBackButton({
  fallbackHref,
  variant = "bar",
  className = "",
  onNavigate,
}: Props) {
  const router = useRouter();
  const isDrawer = variant === "drawer";

  return (
    <button
      type="button"
      className={
        isDrawer
          ? `qa-mobile-panel__back${className ? ` ${className}` : ""}`
          : `nav-mobile-toggle${className ? ` ${className}` : ""}`
      }
      aria-label="Go back"
      onClick={() => {
        navigateHistoryBack(router, fallbackHref);
        onNavigate?.();
      }}
    >
      <ArrowLeft size={20} strokeWidth={1.35} aria-hidden />
      {isDrawer ? <span>Back</span> : null}
    </button>
  );
}
