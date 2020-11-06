'use strict';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ESBuildPlugin } = require('esbuild-loader');
const { src } = require('./entry');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const CLEAN_PATTERN = ['**/*', '!fonts/**', '!favicons/**', '!media/**'];
const plugins = (flag) => {
  const PLUGINS = [
    new CleanTerminalPlugin({ skipFirstRun: true }),
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: CLEAN_PATTERN }),
    new ESBuildPlugin(),
    new RemoveEmptyScriptsPlugin({ silent: true }),
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

  if (flag === '--watch') {
    PLUGINS.push(
      new WebpackShellPluginNext({
        onBuildEnd: {
          scripts: ['hugo server --bind 0.0.0.0 --renderToDisk'],
          blocking: false,
          parallel: true
        }
      })
    );
  }

  return PLUGINS;
};

module.exports = plugins;
