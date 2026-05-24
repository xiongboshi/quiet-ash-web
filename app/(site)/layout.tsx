import { Footer } from "@/components/sections/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="qa-shell qa-inner-rail-scope flex min-h-dvh flex-col text-[var(--ash)]">
      <div className="site-layout-main">{children}</div>
      <Footer className="shrink-0" />
    </div>
  );
}
