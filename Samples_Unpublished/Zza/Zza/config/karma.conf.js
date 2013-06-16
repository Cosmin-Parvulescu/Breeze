// Karma configuration
// Generated on Fri Jun 14 2013 19:41:33 GMT-0700 (Pacific Daylight Time)

// base path, that will be used to resolve files and exclude
basePath = '../app';

// list of files / patterns to load in the browser
files = [
  /* libraries */
  JASMINE,
  JASMINE_ADAPTER,
  '../Scripts/jquery-2.0.2.min.js',
  '../Scripts/q.js',
  '../Scripts/breeze.debug.js',
  '../Scripts/breeze.savequeuing.js',
  '../Scripts/toastr.js',
  '../Scripts/angular.js',
  '../Scripts/angular-*.js',
  '../test/lib/angular-mocks.js',
  '../test/lib/sinon-1.7.1.js',
  '../test/lib/jasmine-async.min.js',
    
  /* app */
  '**/*.js',

  /* test support */
  '../test/testFns.js',
  '../test/jasmineTestFns.js',
  '../test/testData.js',

    /* unit tests */
  '../test/unit/**/*.js',

   /* Async web api tests */
   '../test/webapi/**/*.js'
];

// list of files to exclude
exclude = [
  'appRun.js'
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];

// web server port
port = 9876;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
