/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  basePath: basePath,
  assetPrefix: assetPrefix,
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  images: {
    unoptimized: true,
    domains: ['visage.surgeplay.com', 'minotar.net'],
  },
}

module.exports = nextConfig
