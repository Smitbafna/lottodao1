import { createCivicAuthPlugin } from "@civic/auth-web3/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withCivicAuth = createCivicAuthPlugin({
  clientId: "c0299e1b-b142-484f-9fb8-8cba1071ebb7", // Replace this
});

export default withCivicAuth(nextConfig);
