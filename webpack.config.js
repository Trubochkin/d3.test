const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = {
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
};

const developmentConfig = {
    devServer: {
        inline:true,
        port: 3000,
        stats: 'errors-only'
    }
};

module.exports = (env) => {
    if(env === 'dev') {
        return Object.assign(
            {},
            common,
            developmentConfig
        );
    }
    if(env === 'prod'){
        return common;
    }
};