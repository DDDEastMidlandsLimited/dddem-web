const withCSS = require('@zeit/next-css');
const glob = require('glob');

module.exports = withCSS({
  exportTrailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    const pathMap = {};
    glob.sync('pages/**/*.js').forEach((s) => {
      const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, '/');
      pathMap[path] = { page: path };
    });
    return pathMap;
  },
});
