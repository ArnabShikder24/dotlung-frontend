import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["api.dotlung.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dotlung.com", 
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
