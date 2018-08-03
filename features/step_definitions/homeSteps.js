// steps definition for the homePage page

var homePage = require('../pages/homePage.js');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	Given('I am on Home Page',function (done){
		expect(browser.wait(EC.urlIs('http://automationpractice.com/index.php'))).notify(done);
	});

	Then('Logo image should be visible',function (done){
        expect(homePage.logoImage.isDisplayed()).notify(done);
    });

    Then('Search box should be visible',function (done){
        expect(homePage.searchBox.isDisplayed()).notify(done);
    });

    Then('Shopping Cart should be visible',function (done){
        expect(homePage.shoppingCart.isDisplayed()).notify(done);
    });

    Then('Woman Tab should be visible',function (done){
        expect(homePage.womanTab.isDisplayed()).notify(done)
    });

    Then('Dresses Tab should be visible',function (done){
        expect(homePage.dressesTab.isDisplayed()).notify(done);
    });

    Then('T-Shirts Tab should be visible',function (done){
        expect(homePage.tshirtsTab.isDisplayed()).notify(done);
    });
});
