/** @type {import('next').NextConfig} */
const prefix =
  process.env.NODE_ENV === "development" ? "" : "/sivukumppanit-fi";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "/",
  output: "export",
};

module.exports = nextConfig;
