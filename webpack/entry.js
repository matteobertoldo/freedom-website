'use strict';

const glob = require('fast-glob');

const buildEntries = (pattern) =>
  glob.sync(pattern, { dot: false }).reduce((entries, filename) => {
    const [, name] = filename.match(/([^/]+)\.(js|scss)$/);
    return { ...entries, [name]: filename };
  }, {});

const root = './src';
const src = {
  patterns: [`${root}/js/*.js`, `${root}/scss/**/[^_]*.scss`],
  svg: `${root}/svg/**/*.svg`
};

module.exports = { buildEntries, src };
