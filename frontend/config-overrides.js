const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

const rootImport = {
  '@': path.resolve(__dirname, 'src/actions'),
  '!': path.resolve(__dirname, 'src/reducers'),
};

module.exports = override(addWebpackAlias(rootImport));
