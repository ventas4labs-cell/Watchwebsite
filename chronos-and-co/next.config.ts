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
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: 'www.watchesandcrystals.com' },
      { protocol: 'https', hostname: 'www.bosshunting.com.au' },
      { protocol: 'https', hostname: 'noahsfinejewelry.com' },
      { protocol: 'https', hostname: 'timeandtidewatches.com' },
    ],
  },
};

export default nextConfig;
