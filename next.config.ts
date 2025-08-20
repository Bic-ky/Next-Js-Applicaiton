import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reynoldsclinic.com",
      },
    ],
  },
};

export default nextConfig;
