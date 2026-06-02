import type { Metadata } from "next";
import type { CatalogProduct } from "@/lib/catalog";
import { shopPath } from "@/lib/site-paths";
import { getSiteUrl } from "@/lib/site-url";

function absoluteAsset(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

/** PDP + OG metadata aligned with incense PLP fields when present. */
export function catalogProductMetadata(product: CatalogProduct): Metadata {
  const plp = product.shop?.plp;
  const title = plp?.title ?? product.title;
  const description =
    product.description ??
    (plp?.scentNotes
      ? `${title} �?${plp.scentNotes}. ${product.line}`
      : product.line);
  const imagePath = plp?.imageSrc ?? product.image;
  const imageAlt = plp?.imageAlt ?? `${title} incense by Quiet Ash`;
  const pageUrl = absoluteAsset(shopPath(product.slug));

  return {
    title,
    description,
    alternates: { canonical: shopPath(product.slug) },
    openGraph: {
      title,
      description,
      url: pageUrl,
      images: [{ url: absoluteAsset(imagePath), alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteAsset(imagePath)],
    },
  };
}

export function catalogProductJsonLd(
  product: CatalogProduct,
  pdp: {
    title: string;
    description: string;
    priceDisplay: string;
    gallery: readonly string[];
  },
): Record<string, unknown> {
  const images = pdp.gallery.length ? pdp.gallery : [product.image];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pdp.title,
    description: pdp.description,
    image: images.map((src) => absoluteAsset(src)),
    brand: { "@type": "Brand", name: "Quiet Ash" },
    category: "Incense",
    offers: {
      "@type": "Offer",
      url: absoluteAsset(shopPath(product.slug)),
      priceCurrency: "USD",
      price: pdp.priceDisplay.replace(/[^0-9.]/g, "") || "22",
      availability: "https://schema.org/InStock",
    },
  };
}
