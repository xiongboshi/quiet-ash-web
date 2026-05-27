"use client";

import { usePathname } from "next/navigation";
import { QaHomeHeader } from "@/components/qa/qa-home-header";
import {
  isMobileNavBackLeadingPath,
  siteNavLayout,
  siteNavTheme,
} from "@/lib/site-nav-layout";

export type { SiteNavTheme } from "@/lib/site-nav-layout";

export function SiteNavHeader() {
  const pathname = usePathname();
  const layout = siteNavLayout(pathname);
  const theme = siteNavTheme(pathname);
  const mobileNavBack = isMobileNavBackLeadingPath(pathname);

  return (
    <div
      className={`site-nav-chrome site-nav-chrome--${layout} site-nav-chrome--${theme}${mobileNavBack ? " site-nav-chrome--mobile-nav-back" : ""}`}
    >
      <QaHomeHeader />
    </div>
  );
}
