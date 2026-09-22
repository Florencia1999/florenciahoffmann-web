import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/become", destination: "/become.html" }];
  },
  // El sitio respondía 200 tanto en www como en el apex: dos copias del mismo
  // contenido para Google. El apex es el canónico.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.florenciahoffmann.com" }],
        destination: "https://florenciahoffmann.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
