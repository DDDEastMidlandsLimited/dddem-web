const withCSS = require('@zeit/next-css');
(module.exports = withCSS()),
  {
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/information/': { page: '/information' },
        '/venue/': { page: '/venue' },
        '/sponsorship/': { page: '/sponsorship' },
        '/faq/': { page: '/faq' },
        '/code-of-conduct/': { page: '/code-of-conduct' },
      };
    },
  };
