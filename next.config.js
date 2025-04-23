/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.battlemetrics.com', 'assets.playrust.io'],
  },
  env: {
    BATTLEMETRICS_API_KEY: process.env.BATTLEMETRICS_API_KEY,
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
  },
}

module.exports = nextConfig 