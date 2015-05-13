module.exports = function (config) {
  config.set({
    files: [],
    exclude: [],
    preprocessors: {},
    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-html-reporter'
    ],
    frameworks: [
      'chai',
      'mocha'
    ],
    reporters: [
      'mocha',
      'html'
    ],
    htmlReporter: {
      outputDir: './build/',
      focusOnFailures: true,
      namedFiles: true,
      urlFriendlyName: true
    },
    browsers: ['PhantomJS'],
    port: 9876,
    runnerPort: 9100,
    reportSlowerThan: 500,
    captureTimeout: 30000,
    colors: true,
    autoWatch: false,
    singleRun: false
  });
}