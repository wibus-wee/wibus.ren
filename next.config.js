process.title = 'Tiny (NextJS)'

const withPlugins = require('next-compose-plugins')
const isProd = process.env.NODE_ENV === 'production'

const plugins = []


/** @type {import('next').NextConfig} */
const nextConfig = withPlugins(plugins, {
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
    legacyBrowsers: false,
    browsersListForSwc: true,

    newNextLinkBehavior: true,
  },
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  
})

module.exports = nextConfig
