Feature: Authentication

  As a registered EventHub user
  I want to log in to the application
  So that I can access my dashboard

  Scenario: Login with valid credentials
    Given the user is on the EventHub login page
    When the user logs in with valid credentials
    Then the user should see the EventHub dashboard

  Scenario: Login with invalid credentials
    Given the user is on the EventHub login page
    When the user logs in with invalid credentials
    Then the user should see an error message
    And should not be see the EventHub dashboard

  Scenario: Login with empty credentials
    Given the user is on the EventHub login page
    When the user logs in with empty credentials
    Then the user should see an error message
    And should not be see the EventHub dashboard

  Scenario: Successful logout for a logged in user
  Given the user is on the eventhub dashboard page
  When the user clicks on the logout button
  Then the user should be redirected back to the Login page.