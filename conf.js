var helpers = require('./features/support/helpers');

exports.config = {

    directConnect : true,

    seleniumAddress : 'http://localhost:4444/wd/hub',

    getPageTimeOut : 200000,
    allScriptsTimeout : 500000,

    framework : 'custom',
    frameworkPath : require.resolve('protractor-cucumber-framework'),
    
    ignoreUncaughtExceptions : true,

    params: {
        testEnv: 'test'
    },

    capabilities : {
        browserName : 'chrome',
        chromeOptions : {
            args : [ '--disable-extensions', ]
        }
    },

    specs : [
        'features/*.feature'
    ],

    exclude : [
        // if needed
    ],

    logLevel : 'verbose',
    coloredLogs : true,

    cucumberOpts : {
        require : [
            'features/support/env.js',
            'features/support/helpers.js',
            'features/support/hooks.js',
            'features/step_definitions/*.js'
        ],
        tags : false,
        format : 'json:results/summary.json',
        profile : false,
        'no-source' : true
    },


    onComplete() {
        helpers.createHtmlReport();
    }
};
