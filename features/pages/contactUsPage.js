// the elements on the home page
var ContactUsPage = function() {

    //container
    this.contactUsButton = $('a[title="Contact Us"]');
    this.customerServiceLabel = $('.page-heading');
    this.subjectHeading = $('#id_contact > option:nth-child(3)');
    this.emailAddressInput = element(by.id('email'));
    this.orderReferenceInput = element(by.id('id_order'));
    this.messageArea = element(by.id('message'));
    this.sendButton = element(by.id('submitMessage'));
    this.successfullAlert = $('.alert-success');
};

module.exports = new ContactUsPage();
