'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (development) => [
  {
    test: /\.js$/,
    loader: 'esbuild-loader',
    options: {
      target: 'es2015'
    }
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          esModule: false
        }
      },
      {
        loader: 'css-loader',
        options: {
          url: false
        }
      },
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: development
        }
      }
    ]
  }
];
