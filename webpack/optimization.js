'use strict';

const { ESBuildMinifyPlugin } = require('esbuild-loader');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (development) => {
  return {
    minimize: !development,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ['default']
        }
      }),
      new ESBuildMinifyPlugin({
        target: 'es2015'
      })
    ]
  };
};
