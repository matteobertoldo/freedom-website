'use strict';

const { join } = require('path');
const { buildEntries, src } = require('./webpack/entry');
const loaders = require('./webpack/loaders');
const optimization = require('./webpack/optimization');
const plugins = require('./webpack/plugins');

const OUTPUT = 'src/templates/static/assets';

module.exports = (env) => {
  const development = !env || !env.production;
  const [, , flag] = process.argv;

  return {
    devtool: development ? 'source-map' : false,
    entry: { ...buildEntries(src.patterns) },
    mode: development ? 'development' : 'production',
    module: {
      rules: loaders(development)
    },
    optimization: optimization(development),
    output: {
      path: join(__dirname, OUTPUT),
      filename: 'js/[name].js'
    },
    plugins: plugins(flag),
    stats: {
      builtAt: true,
      colors: true,
      entrypoints: false,
      modules: false
    }
  };
};
