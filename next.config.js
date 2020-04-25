const debug = process.env.NODE_ENV !== "production";

module.exports = {
    exportPathMap: function () {
        return {
          "/": { page: "/" },
        //   "/ap-grid-layout": { page: "/ap-grid-layout" },
        }
    },
    assetPrefix: !debug ? 'https://m4r14.github.io/blog-website/' : '',
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }
    
        return config
    }
}