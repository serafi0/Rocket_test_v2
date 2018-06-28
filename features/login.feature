@watch
Feature: login to rocket chat
    As a human
  I want to login

  Scenario: login with username and password
    Given I have visited Rocket login page
    When I Enter user name "moelserafy97@gmail.com"
    And  Enter "blue45Green"
    And  press Enter
    Then check I am in the home page
    And logout

    Scenario: login with non-valid username and password
      Given I have visited Rocket login page
      When I Enter user name "wrong@mail.com"
      And  Enter "wrong password"
      And  press Enter
      Then I get an error



   Scenario:  login with valid e-mail but with wrong password
     Given I have visited Rocket login page
     When I Enter user name "moelserafy97@gmail.com"
     And  Enter "wrong-password"
     And  press Enter
     Then  I get an error

    Scenario: login with valid e-mail but with wrong password
      Given I have visited Rocket login page
      When I Enter user name "moelserafy97@gmail.com"
      And  Enter "wrong-password"
      And  press Enter
      Then  I get an error



    Scenario: login with empty username & password
      Given I have visited Rocket login page
      When  press Enter
      Then I get an error
