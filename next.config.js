const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@react-email/render'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'text-image.tool.vin',
      },
      {
        protocol: 'https',
        hostname: 'image-generator.tool.vin',
      },
      {
        protocol: 'https',
        hostname: 'asstai.app',
      },
      {
        protocol: 'https',
        hostname: 'spongebob.meme.vin',
      },
      {
        protocol: 'https',
        hostname: 'githubseek.xyz',
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig)
