exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  onPrepare: function() {
     var SpecReporter = require('jasmine-spec-reporter');
     // add jasmine spec reporter
     jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  }
  // onPrepare: function() {
  //    // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
  //    var HtmlReporter = require('protractor-html-screenshot-reporter');
  //    jasmine.getEnv().addReporter(new HtmlReporter({
  //       baseDirectory: '/tmp/screenshots'
  //    }));
  // }
}
