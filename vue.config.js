const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /icons[\\/].*\.svg(\?.*)?$/,
                    loader: 'svg-sprite-loader',
                    exclude: file => (
                        /node_modules/.test(file)
                    )
                }
            ]
        },
        plugins: [
            new SpriteLoaderPlugin(),
            new PreloadWebpackPlugin({
                rel: 'preload',
                include: 'allAssets',
                fileWhitelist: [/\.woff$/],
                as(entry) {
                    if (/\.css$/.test(entry)) return 'style';
                    if (/\.woff2?$/.test(entry)) return 'font';
                    if (/\.(png|jpe?g|gif)$/.test(entry)) return 'image';
                    return 'script';
                }
            })
        ]
    },
    chainWebpack: config => {
        config.module.rules.delete('svg');

        const imagesRule = config.module.rule('images');

        imagesRule
            .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
            .exclude
            .add(file => /icons[\\/].*\.svg(\?.*)?$/.test(file));
    }
};