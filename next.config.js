/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  images: {
    unoptimized: true,
    domains: ['visage.surgeplay.com', 'minotar.net'],
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}

module.exports = nextConfig
