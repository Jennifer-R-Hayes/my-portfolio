import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors during builds (Vercel safe)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
