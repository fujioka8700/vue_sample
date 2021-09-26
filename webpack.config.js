const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
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
            vue$: 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.js', '.vue', '.json'],
    },

    plugins: [
        new VueLoaderPlugin()
    ],

    target: ['web', 'es5'],

    devServer: {
        static: "dist",
        open: true
    }
}