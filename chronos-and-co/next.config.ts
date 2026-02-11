import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.tissotwatches.com' },
      { protocol: 'https', hostname: 'seikousa.com' },
      { protocol: 'https', hostname: 'www.orientwatchusa.com' },
      { protocol: 'https', hostname: 'www.bulova.com' },
      { protocol: 'https', hostname: 'www.stauer.com' },
      { protocol: 'https', hostname: 'www.timex.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
