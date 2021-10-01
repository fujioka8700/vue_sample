const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { url: false }
                    },
                    'postcss-loader'
                ],
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { url: false }
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                        ],
                    },
                }, ],
            },
        ],
    },

    // import文で .ts ファイルを解決するため
    resolve: {
        alias: {
            // エイリアス作成し、完全ビルド。
            vue$: 'vue/dist/vue.esm.js',
        },
        // 拡張子の省略
        extensions: ['*', '.js', '.vue', '.json'],
    },

    plugins: [
        new VueLoaderPlugin()
    ],

    target: ['web', 'es5'],

    devServer: {
        static: {
            directory: `${__dirname}/dist`,
        },
        port: 8080,
        hot: true,
        open: false,
    }
}