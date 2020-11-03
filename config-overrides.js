const {
  override,
  addBabelPlugin,
  fixBabelImports,
} = require('customize-cra');

module.exports = override(
  addBabelPlugin(['babel-plugin-root-import', { rootPathSuffix: 'src' }]),

  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
);
