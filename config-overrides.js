const {
  override,
  addBabelPlugin,
  // addLessLoader,
  fixBabelImports,
} = require('customize-cra');

module.exports = override(
  addBabelPlugin(['babel-plugin-root-import', { rootPathSuffix: 'src' }]),

  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
    // style: true,
  })

  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { '@primary-color': '#1DA57A' },
  // })
);
