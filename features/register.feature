Feature:
    As a human I want to register a new account in rocket chat.


  Scenario: register normally

    Given I have visited Rocket login page
    When I click on register a new account
    And I Enter new user name "<Enter user name>"
    And I enter email adress "<Enter email>"
    And I enter new password "<password>"
    And I confirm new password "<password222>"
    And I click on the register button
    And logout
    
    Scenario: try to register with invalid e-mail
      Given I have visited Rocket login page
      When I click on register a new account
      And I Enter new user name "34242"
      And I enter email adress "invalid-mail"
      And I enter new password "anypassword"
      And I confirm new password "anypassord"
      And I click on the register button
      Then I get error message the email entered is invalid


    Scenario: try to register with an existing mail adress
      Given I have visited Rocket login page
      When I click on register a new account
      And I Enter new user name "34242"
      And I enter email adress "moelserafy97@gmail.com"
      And I enter new password "anypassword"
      And I confirm new password "anypassord"
      And I click on the register button
      Then I get Error message the password must not be empty

    Scenario: leave every thing empty
      Given I have visited Rocket login page
      When I click on register a new account
      And I click on the register button
      Then I get error message the entered is invalid
      And I get error message the email entered is invalid
      And I get Error message the password must not be empty


    Scenario: I Enter a valid name and email but get the password confirmation wrong
      Given I have visited Rocket login page
      When I click on register a new account
      And I Enter new user name "34242"
      And I enter email adress "moelserafy97@gmail.com"
      And I enter new password "anypassword"
      And I confirm new password "wrongconfirm"
      And I click on the register button
      Then I get error message The password confirmation does not match password


