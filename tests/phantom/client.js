var webdriverjs = require('webdriverio');

var client = webdriverjs.remote({
  desiredCapabilities: {
    // you may choose other browsers
    // http://code.google.com/p/selenium/wiki/DesiredCapabilities
    browserName: 'phantom'
  },
  logLevel: 'silent',
  port: 4444
});

module.exports = client;