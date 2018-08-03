Feature: Sign In Page

  Scenario: As a customer I want to create an account
    Given I am on Home Page
    When I click Sign In button
    Then I should see "Authentication" label
    When I type "p.gwozdecki@gmail.com" in Email Address input
    And I click Create an account button
    Then I should see "Your Personal Information" label
    When I type "Test" in First Name Input in Personal Information Panel
    And I type "Test" in Last Name Input in Personal Information Panel
    And I select "31" day from Days Dropdown List
    And I select "January" month from Months Dropdown List
    And I select "1990" year from Years Dropdown list
    And I type "qwerty123" in Password Input in Personal Information Panel
    And I type "Test" in First Name Input in Address Panel
    And I type "Test" in Last Name Input in Address Panel
    And I type "Address" in Address Input in Address Panel
    And I type "Imagination" in City Input in Address Panel
    And I select "Oregon" state from State Dropwdown List
    And I type "12-123" postal code in Postal Code Input
    And I type "+44 7700 900936" phone number in Mobile Phone Input
    And I type "My Alias" in Alias Input
    And I click Register button

  Scenario: Verify error information about invalid email
    Given I am on Home Page
      When I click Sign In button
      Then I should see "Authentication" label
      When I type "p.gwozdecki" in Email Address input
        And I click Create an account button
      Then I should see Invalid email address error popup