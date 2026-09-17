import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      // Preserve legacy WordPress URLs
      { source: "/home", destination: "/", permanent: true },
      { source: "/workshop", destination: "/workshops", permanent: true },
      { source: "/portfolio-2", destination: "/workshops", permanent: true },
      { source: "/contact-2", destination: "/mentorship", permanent: true },
      { source: "/web-development", destination: "/services", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "peter.nibot.africa",
      },
    ],
  },
};

export default nextConfig;
