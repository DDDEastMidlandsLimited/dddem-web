const withPWA = require('next-pwa');
const glob = require('glob');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  experimental: {
    images: {
      unoptimized: true,
      allowFutureImage: true,
    },
  },
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    const pathMap = {};
    glob.sync('pages/**/*.js').forEach((s) => {
      if (s.indexOf('_') === -1) {
        const path = s
          .split(/(pages|\.)/)[2]
          .replace(/^\/index$/, '/');
        pathMap[path] = { page: path };
      }
    });
    return pathMap;
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generateSiteMap.js');
    }

    return config;
  }
});
