import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/1600-collection/:path*",
        destination: "/heritage-collection/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/heritage-collection/:path*",
        destination: "/1600-collection/:path*",
        permanent: true,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
