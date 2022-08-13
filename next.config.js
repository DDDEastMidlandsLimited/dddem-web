const withPWA = require('next-pwa');
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
});
