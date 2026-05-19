import type { MetadataRoute } from "next";
import { getAllEditorialCollections } from "@/lib/collections";
import { getAllProducts } from "@/lib/catalog";
import { getAllEssays } from "@/lib/essays";
import { getRitualSlugs } from "@/lib/rituals";
import { getSiteUrl } from "@/lib/site-url";
import {
  JOURNAL_INDEX,
  MOODS_INDEX,
  SHOP_INDEX,
  journalPath,
  moodPath,
  shopPath,
} from "@/lib/site-paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}${JOURNAL_INDEX}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}${MOODS_INDEX}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}${SHOP_INDEX}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/collections`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/delivery`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${base}/care`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${base}/returns`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${base}/faq`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const essays: MetadataRoute.Sitemap = getAllEssays().map((essay) => ({
    url: `${base}${journalPath(essay.slug)}`,
    lastModified: essay.date ? new Date(essay.date) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const rituals: MetadataRoute.Sitemap = getRitualSlugs().map((slug) => ({
    url: `${base}${moodPath(slug)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const objects: MetadataRoute.Sitemap = getAllProducts().map((product) => ({
    url: `${base}${shopPath(product.slug)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const collections: MetadataRoute.Sitemap = getAllEditorialCollections().map(
    (collection) => ({
      url: `${base}/collections/${collection.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  return [...staticRoutes, ...essays, ...rituals, ...objects, ...collections];
}
