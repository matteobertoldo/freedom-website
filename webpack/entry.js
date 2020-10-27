'use strict';

const glob = require('fast-glob');

const buildEntries = (pattern) =>
  glob.sync(pattern, { dot: false }).reduce((entries, filename) => {
    const [, name] = filename.match(/([^/]+)\.(js|scss)$/);
    return { ...entries, [name]: filename };
  }, {});

const ROOT = './src';
const src = {
  patterns: [`${ROOT}/js/*.js`, `${ROOT}/scss/**/[^_]*.scss`],
  svg: `${ROOT}/svg/**/*.svg`
};

module.exports = { buildEntries, src };
