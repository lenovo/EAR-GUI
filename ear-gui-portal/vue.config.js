/*
 * Copyright © 2020-present Lenovo
 *
 * This file is licensed under both the BSD-3 license for individual/non-commercial use and
 * EPL-1.0 license for commercial use. Full text of both licenses can be found in
 * COPYING.BSD and COPYING.EPL files.
 */

const path = require('path')
const Config = require('./config')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {

  publicPath: './',

  outputDir: 'dist',
  indexPath: 'index.html',
  filenameHashing: true,

  configureWebpack: {

    devtool: process.env.NODE_ENV !== 'production' ? '#cheap-module-eval-source-map' : false,

    output: {
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[id].[hash].js'
    },

    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.common.js',
        jquery: "jquery/src/jquery",
        'src': path.join(__dirname, 'src'),
        'assets': path.join(__dirname, 'src/assets'),
        'components': path.join(__dirname, 'src/components')
      }
    },

    plugins: [
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      }),

      new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 1024000
      }),
    ],
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks: "all",
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    performance: {
      hints: 'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }

  },

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = Config.index
        return args
      })

  },

  devServer: {

    host: '0.0.0.0',
    port: 8080,
    proxy: Config.proxy,

    compress: false,
    open: true,
  }
}
