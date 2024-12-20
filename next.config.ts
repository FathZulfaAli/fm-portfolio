import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.handlebars$/,
      loader: "handlebars-loader",
    });
    return config;
  },
};

export default nextConfig;
