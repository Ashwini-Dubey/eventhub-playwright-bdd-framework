Feature: User Registration

    As a new user on the EventHub application
    I want to register to the application
    So that I can access the application and dashboard

    Scenario: Successful registration
        Given the user is on the EventHub registration page
        When the user provides the valid registration details
        Then the user should see the EventHub dashboard

    Scenario: Registration with an existing email
        Given the user is on the EventHub registration page
        When the user provides the existing email in the registration details
        Then the user should see an error message
        And should not be redirected to the EventHub dashboard page

    Scenario: Registration with invalid email
        Given the user is on the EventHub registration page
        When the user provides the invalid registration email
        Then the user should see an error message
        And should not be redirected to the EventHub dashboard page
    
    