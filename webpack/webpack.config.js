const { merge } = require('webpack-merge');

module.exports = (envVars) => {
  const { NODE_ENV } = envVars;
  let envConfig;
  envConfig = require(`./webpack.${NODE_ENV}.js`);
  commonConfig = require('./webpack.common.js');
  return merge(envConfig, commonConfig);
};
