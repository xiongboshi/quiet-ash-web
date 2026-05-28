import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Gzip HTML + static assets when using `next start` (default true; kept explicit). */
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 200, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@lucide/lab"],
  },
  // LAN phone testing: `192.168.*` does NOT match `192.168.10.171` — need `*.*` or explicit IP.
  allowedDevOrigins: [
    "192.168.10.171",
    "192.168.*.*",
    "10.*.*.*",
    "172.16.*.*",
  ],
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/objects", destination: "/shop", permanent: true },
      { source: "/objects/:slug", destination: "/shop/:slug", permanent: true },
      { source: "/moods", destination: "/shop", permanent: true },
      { source: "/rituals", destination: "/moods", permanent: true },
      { source: "/rituals/:slug", destination: "/moods/:slug", permanent: true },
      { source: "/essays", destination: "/journal", permanent: true },
      { source: "/essays/:slug", destination: "/journal/:slug", permanent: true },
      { source: "/posts", destination: "/journal", permanent: true },
      { source: "/posts/:slug", destination: "/journal/:slug", permanent: true },
      {
        source: "/guides/low-smoke-incense-guide",
        destination: "/guides/incense-care-guide",
        permanent: true,
      },
      {
        source: "/guides/evening-wind-down-guide",
        destination: "/guides/evening-calm-guide",
        permanent: true,
      },
      {
        source: "/guides/quiet-ritual-handbook",
        destination: "/guides/slow-living-ritual-guide",
        permanent: true,
      },
      /* /library, /archive, /series — real App Router pages (no 301); see app/(site)/ */
    ];
  },
};

export default nextConfig;
