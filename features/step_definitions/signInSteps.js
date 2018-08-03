var signIn = require('../pages/signInPage.js');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    When('I click Sign In button', function (done){
        signIn.signInButton.click();
        done();
    });

    When('I click Create an account button', function (done){
        signIn.registerButton.click();
        done();
    });

    When('I click Register button', function (done){
        signIn.registerButton.click();
        done();
    });

    Then(/^I should see "(.*)" panel/, function (done){
        expect(signIn.authenticationLabel.isDisplayed()).notify(done);
    });

    Then('I should see Invalid email address error popup', function (done){
        browser.wait(EC.visibilityOf(signIn.inavlidEmailAlert),3000);
        expect(signIn.inavlidEmailAlert.isDisplayed());
        done();
    });

    When(/^I type "(.*)" in Email Address input$/, function (email,done){
        signIn.emailCreateInput.sendKeys(email);
        done();
    });

    Then(/^I should see "(.*)" label/, function (done){
        expect(signIn.personalInformationLabel.isDisplayed()).notify(done);
    });

    When(/^I type "(.*)" in First Name Input in Personal Information Panel$/, function (personalFirstName,done){
        signIn.personalFirstNameInput.sendKeys(personalFirstName);
        done();
    });

    When(/^I type "(.*)" in Last Name Input in Personal Information Panel$/, function (personalLastName,done){
        signIn.personalLastNameInput.sendKeys(personalLastName);
        done();
    });

    When(/^I type "(.*)" in Password Input in Personal Information Panel$/, function (password,done){
        signIn.passwordInput.sendKeys(password);
        done();
    });

    When(/^I type "(.*)" in First Name Input in Address Panel$/, function (addressFirstName,done){
        signIn.addressFirstNameInput.sendKeys(addressFirstName);
        done();
    });

    When(/^I type "(.*)" in Last Name Input in Address Panel$/, function (addressLastName,done){
        signIn.addressLastNameInput.sendKeys(addressLastName);
        done();
    });

    When(/^I type "(.*)" in Address Input in Address Panel$/, function (address,done){
        signIn.addressInput.sendKeys(address);
        done();
    });

    When(/^I type "(.*)" in City Input in Address Panel$/, function (addressCity,done){
        signIn.addressCityInput.sendKeys(addressCity);
        done();
    });

    When(/^I type "(.*)" postal code in Postal Code Input$/, function (addressPostalCode,done){
        signIn.addressPostCodeInput.sendKeys(addressPostalCode);
        done();
    });

    When(/^I type "(.*)" phone number in Mobile Phone Input$/, function (phoneNumber,done){
        signIn.addressPhoneMobileInput.sendKeys(phoneNumber);
        done();
    });

    When(/^I type "(.*)" in Alias Input$/, function (alias,done){
        signIn.addressAlias.sendKeys(alias);
        done();
    });

    When(/^I select "([^"]*)" day from Days Dropdown List$/, function(daysValue, done){
        signIn.personalDaysList.get(daysValue);
        browser.wait(EC.visibilityOf(signIn.personalDaysList),5000);
        signIn.personalDaysList.click();
        done();
    });

    When(/^I select "([^"]*)" month from Months Dropdown List$/, function(monthValue, done){
        signIn.personalMonthList.get(monthValue);
        browser.wait(EC.visibilityOf(signIn.personalMonthList),5000);
        signIn.personalMonthList.click();
        done();
    });

    When(/^I select "([^"]*)" year from Years Dropdown list$/, function(yearValue, done){
        signIn.personalYearsList.get(yearValue);
        browser.wait(EC.visibilityOf(signIn.personalYearsList),5000);
        signIn.personalYearsList.click();
        done();
    });

    When(/^I select "([^"]*)" state from State Dropwdown List$/, function(stateValue, done){
        signIn.addressStateList.get(stateValue);
        browser.wait(EC.visibilityOf(signIn.addressStateList),5000);
        signIn.addressStateList.click();
        done();
    });

});