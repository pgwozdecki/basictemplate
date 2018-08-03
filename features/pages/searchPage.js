'use strict';

var SearchPage = function SearchPage() {

    //this.textForSearch = 'dress';
    this.searchBox = $('.search_query');
    //this.searchSuggestions = element.all(by.css('.ac_results'));
    this.searchNavigation = $('.navigation_page', 'Search');
    this.searchResultsItem = $$('.product_img_link');
    this.topSellersMenu = element(by.id('best-sellers_block_right'));
    this.categoriesMenu = element(by.id('categories_block_left'));
    this.informationMenu = element(by.id('informations_block_left_1'));
    this.manufactureMenu = element(by.id('manufacturers_block_left'));
    this.specialsMenu = element(by.id('special_block_right'));
    this.ourStoresMenu = element(by.id('stores_block_left'));
    this.suppliersMenu = element(by.id('suppliers_block_left'));
    //this.viewedProductsMenu = element(by.id('viewed-products_block_left'));
    this.addToCartPopUp = element(by.id('product'));
    this.addToCartButton = element(by.xpath('//*[@id="add_to_cart"]'));
    this.successMessage = $('.layer_cart_product>h2');
    this.proccedToCheckoutButtonInPopUp = $('.button-container').$('a[title="Proceed to checkout"]');
    this.proceedToCheckoutButtonStandard = $('.cart_navigation').$('a[title="Proceed to checkout"]');
    this.cartTitle = element(by.cssContainingText('.page-heading', 'Shopping-cart summary'));
};

module.exports = new SearchPage();