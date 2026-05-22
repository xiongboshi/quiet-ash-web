"use client";

import { usePathname } from "next/navigation";
import { MOODS_INDEX } from "@/lib/site-paths";

type Props = {
  /** Default site chrome (header + shell + footer). */
  fallback: React.ReactNode;
  children: React.ReactNode;
};

/** `/moods` index uses a standalone mockup shell without global header/footer. */
export function SiteChromeGate({ fallback, children }: Props) {
  const pathname = usePathname();
  if (pathname === MOODS_INDEX) {
    return <>{children}</>;
  }
  return <>{fallback}</>;
}
