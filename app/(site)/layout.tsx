import { SiteChromeGate } from "@/components/layout/site-chrome-gate";
import { Footer } from "@/components/sections/Footer";
import { SiteHeaderGate } from "@/components/site-header-gate";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteChromeGate
      fallback={
        <div className="qa-shell flex min-h-dvh flex-col text-[var(--ash)]">
          <SiteHeaderGate />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </div>
      }
    >
      {children}
    </SiteChromeGate>
  );
}
