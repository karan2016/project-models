var path = require('path');
var htmlWepackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        `webpack-hot-middleware/client?http://localhost:3000&reload=true`,
        './client/index.js',
    ],
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new htmlWepackPlugin({
            template: path.resolve(__dirname, 'client', 'index.html'),
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}