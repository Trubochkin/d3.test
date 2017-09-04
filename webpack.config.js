const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: PATHS.source + "/index.js",
        output: {
            path: PATHS.build,
            filename: "[name].js"
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: PATHS.source + '/index.html'
            })
        ]
    }
]);



module.exports = (env) => {
    if(env === 'dev') {
        return merge([
            common,
            devserver()
        ]);
    }
    if(env === 'prod'){
        return common;
    }
};