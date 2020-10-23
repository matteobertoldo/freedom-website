'use strict';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ESBuildPlugin } = require('esbuild-loader');
const { src } = require('./entry');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = [
  new CleanTerminalPlugin({
    skipFirstRun: true
  }),
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['**/*', '!fonts/**']
  }),
  new ESBuildPlugin(),
  new FixStyleOnlyEntriesPlugin({
    silent: true
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
    chunkFilename: '[id].css'
  }),
  new StyleLintPlugin(),
  new SVGSpritemapPlugin(src.svg, {
    output: {
      filename: 'svg/spritemap.svg'
    },
    sprite: {
      prefix: 'icon-',
      generate: {
        title: false
      }
    }
  })
];
