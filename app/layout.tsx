import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { PageTransition } from "@/components/page-transition";
import { SiteNavHeader } from "@/components/site-nav-header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-serif",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quiet Ash — Eastern slow living objects",
    template: "%s · Quiet Ash",
  },
  description:
    "Incense ritual, agarwood, tea and ceramics — editorial essays and objects for eastern slow living, scholar ritual, and quiet evenings.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Quiet Ash",
    title: "Quiet Ash — Eastern slow living objects",
    description:
      "Incense ritual, agarwood, tea and ceramics — objects and essays for quiet evenings.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiet Ash — Eastern slow living objects",
    description:
      "Incense ritual, agarwood, tea and ceramics — objects and essays for quiet evenings.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${cormorant.variable} h-full`}
    >
      <body
        className={`${inter.className} ${inter.variable} ${cormorant.variable} min-h-dvh antialiased`}
      >
        <div className="site-page-shell flex min-h-dvh flex-col">
          <SiteNavHeader />
          <PageTransition className="min-h-0 flex-1">{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
