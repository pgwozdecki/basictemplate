var contactUs = require('../pages/ContactUsPage.js');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    When('I click Contact Us button', function (done){
        contactUs.contactUsButton.click();
        done();
    });

    When(/^I select "([^"]*)" subject heading from dropdown list$/, function(subjectValue, done){
        browser.wait(EC.visibilityOf(contactUs.subjectHeading),5000);
        contactUs.subjectHeading.click();
        done();
    });

    When(/^I type "(.*)" in Email Input$/, function (email,done){
        contactUs.emailAddressInput.sendKeys(email);
        done();
    });

    When(/^I type "(.*)" in Order Reference Input$/, function (order,done){
        contactUs.orderReferenceInput.sendKeys(order);
        done();
    });

    When(/^I write "(.*)" in Message Area$/, function (order,done){
        contactUs.messageArea.sendKeys(order);
        done();
    });

    When('I click Send button', function (done){
        contactUs.sendButton.click();
        done();
    });

    Then('Customer Service - Contact us page should be visible', function (done){
        expect(contactUs.customerServiceLabel.isDisplayed()).notify(done);
    });

    Then('Your message has been successfully sent to our team should be visible', function (done){
        expect(contactUs.successfullAlert.isDisplayed()).notify(done);
    });

});