import { withPWA } from 'next-pwa';
import { glob } from 'glob';
import { withPlugins } from 'next-compose-plugins';
import generateSiteMap from './utils/generateSiteMap.mjs';

module.exports = withPlugins(
  [
    {
      optimizeImagesInDev: true,
    },
  ],
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
        generateSiteMap();
      }

      return config;
    },
  }),
);
