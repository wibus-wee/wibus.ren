process.title = 'Tiny (NextJS)'

const withPlugins = require('next-compose-plugins')
const isProd = process.env.NODE_ENV === 'production'

const plugins = []


/** @type {import('next').NextConfig} */
const nextConfig = withPlugins(plugins, {
  webpack: (config) => {
    // config.resolve.alias['@vue/runtime-dom'] = require.resolve('reactivue')
    // config.reslove.alias['@vue/reactivity'] = require.resolve('reactivue')
    return config
  },
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
