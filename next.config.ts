import type { NextConfig } from "next";

// GitHub Pages serves the site under /jarvis-site — the workflow sets
// NEXT_PUBLIC_BASE_PATH; local dev stays at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
