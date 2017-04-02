'use strict';
const dev = process.env.NODE_ENV == "development";
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('stylesheets/style.css');
var WebpackStrip = require('webpack-strip');

const commonPlugins = [
    new webpack.EnvironmentPlugin([
        'NODE_ENV'
    ]),
    new webpack.DefinePlugin({
        'ENVIRONMENT': {
            API_URL: JSON.stringify(process.env.API_URL)
        }
    }),
    new CopyWebpackPlugin([
        {from: 'index.html'}
    ])
];

const commonLoaders = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules\/(?!(react-breadcrumbs)\/).*/,
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: [
                'react-html-attrs',
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-object-rest-spread',
                'transform-object-assign']
        }
    },
    {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader?sourceMap"]
    },
    {
        test: /\.(ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
];

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: dev ? "inline-sourcemap" : false,
    entry: [
        "./js/app.js"
    ],
    module: {
        loaders: dev ? commonLoaders : [
            ...commonLoaders,
            {
                test: /\.js$/,
                loader: WebpackStrip.loader('console.log')
            }
        ]
    },
    output: {
        path: path.join( __dirname, '/build'),
        filename: 'bundle.js'
    },
    plugins: dev ? commonPlugins : [
        ...commonPlugins,
        extractCSS,
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
};