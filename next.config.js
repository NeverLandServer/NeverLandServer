/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/',
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  images: {
    unoptimized: true,
    domains: ['visage.surgeplay.com', 'minotar.net'],
  },
}

module.exports = nextConfig
