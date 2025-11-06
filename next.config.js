const glob = require('glob');
const withPWA = require('next-pwa')({
  dest: 'public',
  sw: 'sw.js',
  additionalManifestEntries: [
    {
      url: '/sw-custom.js',
      revision: null,
    },
  ],
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'https-calls',
        networkTimeoutSeconds: 15,
        expiration: {
          maxEntries: 150,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
});

module.exports = withPWA({
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
  },
  turbopack: {},
  output: 'export',
  images: {
    unoptimized: true,
  },
});
