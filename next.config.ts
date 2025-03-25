import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: "/portfolio",
    images: {
        unoptimized: true
    }
  /* config options here */
};

export default nextConfig;
