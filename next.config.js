const glob = require('glob');

const nextConfig = {
  trailingSlash: true,
  turbopack: {},
  output: 'export',
    images: {
    unoptimized: true,
  }
}

module.exports = nextConfig;