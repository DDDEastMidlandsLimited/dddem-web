const withPWA = require('next-pwa');
const glob = require('glob');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins(
  [
    optimizedImages,
    {
      optimizeImagesInDev: true,
    },
  ],
  [
    withPWA({
      pwa: {
        dest: 'public',
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
          require('./utils/generateSiteMap');
        }

        return config;
      },
    }),
  ],
);
