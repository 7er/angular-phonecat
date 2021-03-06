//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
// System.js for module loading
      'node_modules/systemjs/dist/system.src.js',
// Polyfills
      'node_modules/core-js/client/shim.js',
// Reflect and Zone.js
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
// RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
// Angular 2 itself and the testing library
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},
      {pattern: 'systemjs.config.js', included: false, watched: false},
      'karma-test-shim.js',
// Our code
      {pattern: 'app/*!(.module|.spec).js', included: false, watched: true},
      {pattern: 'app/!(bower_components)/**/*!(.module|.spec).js', included: false, watched: true},
      {pattern: 'app/**/*.spec.js', included: false, watched: true},
      {pattern: '**/*.html', included: false, watched: true},
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

// proxied base paths for loading assets
    proxies: {
      // required for component assets fetched by Angular's compiler
      "/app/phone-detail": '/base/app/phone-detail',
      "/app/phone-list": '/base/app/phone-list'
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};
