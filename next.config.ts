import type { NextConfig } from "next";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

let withBundleAnalyzer = (config: NextConfig) => config;
try {
  const bundleAnalyzer = require("@next/bundle-analyzer");
  withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  });
} catch {
  // bundle analyzer não instalado
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
