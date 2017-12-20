var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config = {
  entry: entry,
  output: {
    path: './dist/',
    filename: 'XXX'
  },
  module: {
    loaders: [
    {
      test: /\.(js|jsx|es6)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'stage-0']
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue'
    },
    {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
      }
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss')
    },
    {
      test: /\.(png|jpg|svg)$/,
      loader: 'url-loader?limit=1&name=' + outputImage
    },
    {
      test: /\.mustache$/,
      loader: 'mustache'
    },
    {
      test: /\.(svg|eot|ttf|woff)$/,
      loader: 'url-loader?limit=1&name=' + outputFont
    }]
  },
  vue: {
    loaders: {
      scss: ExtractTextPlugin.extract('vue-style-loader', ['css-loader', 'postcss-loader','sass-loader'].join('!'))
    }
  },
  postcss: [autoprefixer({
    browsers: ["ios >= 7", "android >= 4.0"]
  })],
  plugins: plugins,
  resolve: {
    alias: {}
  }
}

module.exports = config;
