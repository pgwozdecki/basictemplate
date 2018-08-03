Feature: As a not logged user


  Scenario: Verify elements on the search results page
      Given I am on Home Page
        When I search for "dress"
        Then I should see 7 Result Items on Search Results Page
          And Breadcrumbs on the top should be visible
          And TOP SELLERS on the left panel should be visible
          And Categories on the left panel should be visible
          And Informations on the left panel should be visible
          And Manufacturers on the left panel should be visible
          And Specials on the left panel should be visible
          And Our stores on the left panel should be visible
          And Suppliers on the left panel should be visible

  Scenario: Verify that not logged user is able to add item to cart
     Given I am on Home Page
        When I search for "dress"
        Then I should see 7 Result Items on Search Results Page
        When I select first item on Search Result Page
        Then I should see Add to cart popup
        When I click Add to cart button
        Then I should see Product successfully added to your shopping cart in popup
        When I click Procced to Checkout button in PopUp
        Then I should see Shopping-Cart summary
         And I click Procced to Checkout button


