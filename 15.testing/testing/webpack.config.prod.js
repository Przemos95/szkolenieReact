const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.export = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'build.js',
        path: __dirname + 'build'
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ]
}

process.env.NODE_ENV = "production"