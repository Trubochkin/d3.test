
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const ChunkHashReplacePlugin = require('chunkhash-replace-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const inProduction = (process.env.NODE_ENV === 'production');
/* const vendorPackages = [
  'jquery',
  'lodash',
  'd3',
]; */

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
    // vendor: vendorPackages,
  },
  output: {
    path: path.resolve(__dirname, inProduction ? 'prod' : 'dev'),
    filename: '[name].js',
    // libraryTarget: 'umd',
    // pathinfo: false,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/img/',
          },
        },
      },
      {
        test: /favicon\.ico/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './',
          },
        },
      },
    ],
  },

  /* externals: {
    jquery: 'jQuery',
    $: 'jQuery',
    d3: 'd3',
  }, */

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.LoaderOptionsPlugin({
      minimize: inProduction,
    }),
    /*    new HtmlWebpackPlugin({
      template: 'index.template.html',
      filename: 'index.html',
      hash: false,
      chunks: ['app.[hash:8].js', 'vendor.[hash:8].js'],
    }), */
    new HtmlWebpackPlugin({
      inject: false,
      template: './index.template.html',
      filename: 'index.html',
      title: 'd3.js test',
      mobile: false,
      hash: true,
    }),
    /* new ChunkHashReplacePlugin({
      src: './index.template.html',
      dest: inProduction ? '../build/index.html' : '../dev/index.html',
    }), */
    /* new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      d3: 'd3',
    }), */
  ],

  // devtool: 'eval-src-map', // enum

  /* devServer: {
    port: 9000,
    contentBase: path.join(__dirname, 'dev'), // boolean | string | array, static file location
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    watchContentBase: true,
    // publicPath: './dev/',
  }, */
};

// console.log('PLUGINS!!!!!!!!!!', module.exports.plugins);
if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
