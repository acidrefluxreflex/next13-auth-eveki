/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});
module.exports = {
  compress: true,
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
}

module.exports = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
}

module.exports = nextConfig
