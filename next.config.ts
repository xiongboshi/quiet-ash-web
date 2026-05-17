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
      { source: "/posts", destination: "/essays", permanent: true },
      { source: "/posts/:slug", destination: "/essays/:slug", permanent: true },
      { source: "/series", destination: "/essays", permanent: true },
      { source: "/series/:slug", destination: "/essays", permanent: true },
      { source: "/library", destination: "/essays", permanent: true },
      { source: "/archive", destination: "/essays", permanent: true },
    ];
  },
};

export default nextConfig;
