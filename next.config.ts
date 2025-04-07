import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
      }, // Microlink Image Preview
    ],
  },
}

export default nextConfig
