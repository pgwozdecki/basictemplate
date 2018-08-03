var searchPage = require('../pages/searchPage.js');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    When(/^I search for "(.*)"$/,{timeout: 10000}, function (textForSearch, done){
        searchPage.searchBox.sendKeys(textForSearch);
        searchPage.searchBox.sendKeys(protractor.Key.ENTER);
        done();
    });

    When('I select first item on Search Result Page',{timeout: 10000}, function(done){
        searchPage.searchResultsItem.first().click();
        done();
    });

    When('I click Add to cart button',{timeout: 10000}, function (done){
        searchPage.addToCartButton.click();
            done();
    });

    When('I click Procced to Checkout button in PopUp',{timeout: 10000}, function (done){
        browser.switchTo().defaultContent()
          .then(() => {
            searchPage.proccedToCheckoutButtonInPopUp.click();
        })
          .then(() => {
            done();
        });
    });

    When('I click Procced to Checkout button',{timeout: 10000}, function (done){
        searchPage.proceedToCheckoutButtonStandard.click();
        done();
    });

    Then('I should see Add to cart popup',{timeout: 10000}, function (done){
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
        browser.wait(EC.visibilityOf(searchPage.addToCartPopUp),5000);
        expect(searchPage.addToCartPopUp.isDisplayed()).notify(done);
    });

    Then('I should see Shopping-Cart summary',{timeout: 10000}, function (done){
        expect(searchPage.cartTitle.isDisplayed()).notify(done);
    });

    Then('I should see Product successfully added to your shopping cart in popup',{timeout: 10000}, function (done){
        browser.wait(EC.visibilityOf(searchPage.successMessage),10000);
        expect(searchPage.successMessage.isDisplayed()).notify(done);
    });

    Then('I should see {int} Result Items on Search Results Page',{timeout: 10000}, function(count, done){
        expect(searchPage.searchResultsItem.count()).to.eventually.to.equal(count).and.notify(done);
    });

    Then('Breadcrumbs on the top should be visible',{timeout: 10000}, function (done){
        expect(searchPage.searchNavigation.isDisplayed()).notify(done);
    });

    Then('TOP SELLERS on the left panel should be visible',{timeout: 10000}, function (done){
        expect(searchPage.topSellersMenu.isDisplayed()).notify(done);
    });

    Then('Categories on the left panel should be visible',{timeout: 10000}, function (done){
        expect(searchPage.categoriesMenu.isDisplayed()).notify(done);
    });

    Then('Manufacturers on the left panel should be visible',{timeout: 10000}, function (done){
        expect(searchPage.manufactureMenu.isDisplayed()).notify(done);
    });

    Then('Specials on the left panel should be visible',{timeout: 10000}, function (done){
        expect(searchPage.specialsMenu.isDisplayed()).notify(done);
    });

    Then('Our stores on the left panel should be visible',{timeout: 10000}, function (done){
        expect(searchPage.ourStoresMenu.isDisplayed()).notify(done);
    });

    Then('Suppliers on the left panel should be visible',{timeout: 10000}, function (done){
        expect(searchPage.suppliersMenu.isDisplayed()).notify(done);
    });


    Then('Informations on the left panel should be visible',{timeout: 10000}, function (done){
        expect(searchPage.informationMenu.isDisplayed()).notify(done);
    });


});