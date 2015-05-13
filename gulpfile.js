var gulp = require('gulp');
var runSequence = require('run-sequence');
var karma = require('gulp-karma');
var mocha = require('gulp-mocha');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var download = require('gulp-download');
var nightwatch = require('gulp-nightwatch');
var Q = require('Q');
var fs = require('fs');
var del = require('del');

var mainJS = 'app.js';

var appBundle = './build/';

var seleniumFileName = 'selenium-server-standalone-2.45.0.jar';
var seleniumURL = 'http://selenium-release.storage.googleapis.com/2.45/' + seleniumFileName;
var seleniumPath = './tests/selenium/server/';

var nightWatchConf = 'night.conf.json';

var karmaTestFiles = [
  appBundle + '/**/*.js',
  'tests/karma/**/*.spec.js'
];

var unitTestFiles = [
  'tests/unit/**/*.unit.js'
];

function handleError (err) {
  throw err;
}

gulp.task('download-selenium', function(){
  var def = Q.defer();
  var fname = seleniumPath + seleniumFileName 

  var downloadSelenium = function(){
    download(seleniumURL)
      .pipe(gulp.dest(seleniumPath))
      .on('error', handleError)
      .on('end',function(){
        def.resolve();
      });
  };

  fs.exists(fname, function(exists){
    if (exists === true) {
      def.resolve();
    } else {
      downloadSelenium();
    }
  });

  return def.promise;
});

gulp.task('clean', function (callback) {
  return del([appBundle], callback);
});

gulp.task('build', ['clean'], function(){
  return gulp.src([mainJS])
    .pipe(browserify({
      standalone: 'components'
    }))
    .pipe(uglify())
    .pipe(gulp.dest(appBundle))
    .on('error', handleError);
});

gulp.task('test-unit', function(){
  return gulp.src(unitTestFiles)
    .pipe(mocha({
      ui: 'tdd',
      reporter: 'spec'
      //reporter: 'nyan'
    }))
    .on('error', handleError);
});

gulp.task('test-karma', function(){
  return gulp.src(karmaTestFiles)
    .pipe(karma({
      configFile: './karma.conf.js',
      action: 'run'
    }))
    .on('error', handleError);
});

/**
 * Warning: before running this task, make sure:
 *  - download the selenium (gulp download-selenium)
 *  - run the selenium server (java -jar ./tests/selenium/server/selenium-server-standalone-2.45.0.jar)
 *  - build the bundle for the web application (gulp build)
 *  - run the application server (node ./server.js)
 */
gulp.task('test-nightwatch', function(){
  gulp.src("./tests/selenium/tests")
    .pipe(nightwatch({
      configFile: nightWatchConf
    }))
    .on('error', handleError)
    .on('end', function(){
      console.log('Selenium End');
    });
});

gulp.task('test-all', function(callback){
  runSequence('build', 'test-unit', 'test-karma', 'test-nightwatch', callback);
});

gulp.task('test', function(callback){
  runSequence('build', 'test-unit', 'test-karma', callback);
});