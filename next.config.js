const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/blog-next' : ''

module.exports = {
    exportPathMap: () => ({
        '/': { page: '/' },
      }),
      assetPrefix: assetPrefix,
      webpack: config => {
        config.node = { fs: 'empty' };
        config.plugins.push(
          new webpack.DefinePlugin({
            'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
          }),
        )
    
        return config
      },
    // webpack: (config, { isServer }) => {
    //     // Fixes npm packages that depend on `fs` module
    //     if (!isServer) {
    //         config.node = {
    //             fs: 'empty'
    //         }
    //     }
    
    //     return config
    // }
}