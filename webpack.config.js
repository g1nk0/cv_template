const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: [path.resolve(__dirname, './src/index.js'), path.resolve(__dirname, './src/scss/main.scss')],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.pug'),
        }),
        new ExtractTextPlugin({ // define where to save the file
            filename: '[name].bundle.css',
            allChunks: true,
        }),
    ],
    module: {
        rules: [
            { test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/, loader: 'url-loader?limit=100000' },
            {
                test: /\.pug$/,
                loader: 'pug-loader?+pretty',
                
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader?+pretty', 'sass-loader?+pretty'])
            }
        ]
    }
};
