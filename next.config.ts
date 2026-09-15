import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/become", destination: "/become.html" }];
  },
};

export default nextConfig;
