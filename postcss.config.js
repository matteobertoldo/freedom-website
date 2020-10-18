'use strict';

const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    autoprefixer({
      flexbox: 'no-2009',
      grid: true
    }),
    pxtorem()
  ]
};
