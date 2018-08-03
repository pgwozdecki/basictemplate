Feature: As not logged user I want to send a message

  Scenario: Verify that not logged user can send a message to customer service
    Given I am on Home Page
      When I click Contact Us button
      Then Customer Service - Contact us page should be visible
      When I type "pgwozdecki@gmail.com" in Email Input
        And I select "Webmaster" subject heading from dropdown list
        And I type "dress" in Order Reference Input
        And I write "message" in Message Area
        And I click Send button
      Then Your message has been successfully sent to our team should be visible