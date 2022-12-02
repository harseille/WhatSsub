const { merge } = require('webpack-merge');
const common = require('./webpack/webpack.config.common');

const developmentConfig = require('./webpack/webpack.config.dev');
const productionConfig = require('./webpack/webpack.config.prod');

module.exports = (_env, argv) => {
  const config = argv.mode === 'development' ? developmentConfig : productionConfig;
  return merge(common, config);
};
