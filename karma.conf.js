/*eslint-disable no-var*/
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};
// Karma configuration
// Generated on Fri Feb 26 2016 14:25:47 GMT+0100 (CET)
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'build/bundle.js',
      'test/unit/**/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'build/bundle.js': ['webpack'],
      'test/**/*.js': ['webpack']
    },
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
};
