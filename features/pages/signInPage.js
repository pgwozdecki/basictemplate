// the elements on the home page
var SignInPage = function() {

    //sign in button
    this.signInButton = $('.login');
    this.registerButton = element(by.id('submitAccount'));

    //authentication panel
    this.authenticationLabel = element(by.cssContainingText('.page-heading','Authentication'));
    this.personalInformationLabel = element(by.cssContainingText('.page-subheading','Your personal information'));

    //create an account panel
    this.emailCreateInput = element(by.id('email_create'));
    this.createAccountButton = element(by.id('SubmitCreate'));

    //personal information panel
    this.personalFirstNameInput = element(by.id('customer_firstname'));
    this.personalLastNameInput = element(by.id('customer_lastname'));
    this.personalDaysList = element.all(by.id('days'));
    this.personalMonthList = element.all(by.id('months'));
    this.personalYearsList = element.all(by.id('years'));

    //address information panel
    this.addressFirstNameInput = element(by.id('firstname'));
    this.addressLastNameInput = element(by.id('lastname'));
    this.addressInput = element(by.id('address1'));
    this.addressCityInput = element(by.id('city'));
    this.addressPostCodeInput = element(by.id('postcode'));
    this.addressPhoneMobileInput = element(by.id('phone_mobile'));
    this.addressStateList = element.all(by.id('id_state'));
    //this.addressCountryList = element.all(by.id('id_country'));
    this.addressAlias = element(by.id('alias'));

    //already registered panel
    this.emailLoginInput = element(by.id('email'));
    this.passwordInput = element(by.id('passwd'));

    //validation
    this.inavlidEmailAlert = element(by.id('create_account_error'));
    this.validEmailInfo = $('.form-ok');

    //lost password
    this.lostPassword = $('.lost_password>a');


};

module.exports = new SignInPage();
