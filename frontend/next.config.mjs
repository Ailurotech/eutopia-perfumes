/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: true,
  },
};

export default nextConfig;
