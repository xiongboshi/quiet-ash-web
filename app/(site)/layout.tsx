import { Footer } from "@/components/sections/Footer";
import "@/styles/shop-category.css";
import "@/styles/shop-product.css";
import "@/styles/about-page.css";
import "@/styles/cart-page.css";

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
