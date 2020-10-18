'use strict';

const glob = require('fast-glob');

const buildEntries = (pattern) =>
  glob.sync(pattern, { dot: false }).reduce((entries, filename) => {
    const [, name] = filename.match(/([^/]+)\.(js|scss)$/);
    return { ...entries, [name]: filename };
  }, {});

const SRC = './src';
const pattern = [`${SRC}/js/*.js`, `${SRC}/scss/**/[^_]*.scss`];
const entries = { ...buildEntries(pattern) };

module.exports = entries;
