Feature: EventHub Login

  As a registered EventHub user
  I want to log in to the application
  So that I can access my dashboard

  Scenario: Successful login with valid credentials
    Given the user is on the EventHub login page
    When the user logs in with valid credentials
    Then the user should see the EventHub dashboard