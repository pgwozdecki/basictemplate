// the elements on the home page
var HomePage = function() {

    //container
	this.searchBox = $('.search_query');
	this.logoImage = $('.logo');
	this.shoppingCart = $('.shopping_cart');
	this.womanTab = $('a[title="Women"]');
    this.dressesTab = $('a[title="Dresses"]');
    this.tshirtsTab = $('a[title="T-shirts"]');

};

module.exports = new HomePage();
