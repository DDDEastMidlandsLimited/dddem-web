const withCSS = require('@zeit/next-css')
module.exports = withCSS(),{ 
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/about/': { page: '/about' },
            '/venue/': { page: '/venue' },
            '/sponsorship/': { page: '/sponsorship' },
            '/faq/': { page: '/faq' },
            '/code-of-conduct/': { page: '/code-of-conduct' }
        }
    }
}