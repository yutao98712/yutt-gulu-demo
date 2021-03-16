// karma 测试运行库，它可以呼气浏览器，加载测试用力
// mocha 是一个单元测试库，他可以用来些测试用力
// siono 是一个spy/stub/mock库，用以辅助测试
// npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai'],
    client: {
      chai: {
        includeStack: true
      }
    },
    files: [
      'dist/**/*.test.js',
      'dist/**/*.test.css'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  })
}