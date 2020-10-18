'use strict';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ESBuildPlugin } = require('esbuild-loader');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = [
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['**/*', '!fonts/**']
  }),
  new ESBuildPlugin(),
  new FixStyleOnlyEntriesPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
    chunkFilename: '[id].css'
  }),
  new StyleLintPlugin()
];
