'use strict';

const autoprefixer = require('autoprefixer')({
  flexbox: 'no-2009',
  grid: true
});

const pxtorem = require('postcss-pxtorem')({
  propList: ['font', 'font-size', 'line-height', 'letter-spacing', '*margin*', '*padding*', '*--*']
});

module.exports = {
  plugins: [autoprefixer, pxtorem]
};
