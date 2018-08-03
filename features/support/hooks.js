var helpers = require('./helpers.js');

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({registerHandler}) {
	  registerHandler('BeforeFeatures', function () {
        helpers.browserInitializer();
	  });
});

defineSupportCode(function({setDefaultTimeout}) {
	  setDefaultTimeout(10 * 60 * 1000);
});

defineSupportCode(function({After}) {
	
	After(function(scenario) {
        if (scenario.isFailed(true)) {
            helpers.browserTakeScreenshot();
                helpers.browserInitializer();
        } else {
            helpers.browserInitializer();
        }
	});

});
