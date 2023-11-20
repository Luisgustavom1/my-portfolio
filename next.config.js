/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/assets/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
