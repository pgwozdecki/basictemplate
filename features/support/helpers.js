'use strict';
var {registerListener} = require('cucumber');
var screenshotDir = './reports/screenshots/';
var outputDir = './reports/';
var reporter = require('cucumber-html-reporter');
var JsonFormatter = require('cucumber').JsonFormatter;
var fse = require('fs-extra');
var targetJson = outputDir + 'cucumber_report.json';


const browserInitializer = () => {
    var configData = require('../../data/config.json');
    config = configData[browser.params.testEnv];
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.get(config.appUrl);
};


var writeScreenshotToFile = function(image) {

    if (!fse.existsSync(screenshotDir)) {
        fse.mkdirSync(screenshotDir);
    }
    var date = new Date();
    var timestamp = date.getTime();
    var filename = "error_"+timestamp+".png";
    var stream = fse.createWriteStream(screenshotDir + filename);
    stream.write(image);
    stream.end();
};

const browserTakeScreenshot = (self) => {
    browser.takeScreenshot().then(function (png) {
        let decodedImage = new Buffer(png.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
        writeScreenshotToFile(decodedImage);
        self.attach(decodedImage, 'image/png'); //attach generate problem should analyze
    });
};

const createHtmlReport = (sourceJson) => {

    var options = {
        theme: 'bootstrap',
        jsonFile: './results/summary.json',
        output: './reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true
    };

    reporter.generate(options);

    var jsonFormatter = new JsonFormatter;
    jsonFormatter.log = function(string) {
        if (!fse.existsSync(outputDir)) {
            fse.mkdirSync(outputDir);
        }

        fse.writeFile(targetJson, string, function(err) {
            if (err) {
                console.log('Failed to save cucumber test results to json file.');
                console.log(err);
            } else {
                createHtmlReport(targetJson);
            }
        });
    };
    registerListener(jsonFormatter);
};

module.exports.browserInitializer = browserInitializer;
module.exports.createHtmlReport = createHtmlReport;
module.exports.browserTakeScreenshot = browserTakeScreenshot;