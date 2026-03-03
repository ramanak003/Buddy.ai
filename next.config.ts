import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Buddy.ai',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
