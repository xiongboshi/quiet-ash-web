import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // LAN phone testing: `192.168.*` does NOT match `192.168.10.171` — need `*.*` or explicit IP.
  allowedDevOrigins: [
    "192.168.10.171",
    "192.168.*.*",
    "10.*.*.*",
    "172.16.*.*",
  ],
  async redirects() {
    return [
      { source: "/objects", destination: "/shop", permanent: true },
      { source: "/objects/:slug", destination: "/shop/:slug", permanent: true },
      { source: "/rituals", destination: "/moods", permanent: true },
      { source: "/rituals/:slug", destination: "/moods/:slug", permanent: true },
      { source: "/essays", destination: "/journal", permanent: true },
      { source: "/essays/:slug", destination: "/journal/:slug", permanent: true },
      { source: "/posts", destination: "/journal", permanent: true },
      { source: "/posts/:slug", destination: "/journal/:slug", permanent: true },
      /* /library, /archive, /series — real App Router pages (no 301); see app/(site)/ */
    ];
  },
};

export default nextConfig;
