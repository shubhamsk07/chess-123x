/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true, // Remove this line if not using the App Router
    }
  };
  
  module.exports = nextConfig;
  