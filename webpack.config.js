const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  // set mode to production or development
  mode: process.env.NODE_ENV || 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    publicPath: '/build/',
    // contentBase: path.resolve(__dirname, 'build'),
    // hot: true,
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  // QUESTION - How do we Make sure that Babel isn't being run on node_modules?
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // /\.jsx?/
        exclude: /(node_modules)/, ///(node_modules|bower_components)/
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              // '@babel/plugin-transform-runtime',
              'transform-class-properties',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        // exclude: /(node_modules|bower_components)/,
        use: [
          // Creates 'style' nodes from JS strings
          'style-loader',
          //T ranslates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
