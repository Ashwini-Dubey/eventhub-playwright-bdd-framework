# EventHub Playwright BDD Framework

A JavaScript-based UI test automation project for the [EventHub application](https://eventhub.rahulshettyacademy.com), combining **Playwright** browser automation with **Cucumber.js** and **Gherkin** for Behaviour-Driven Development (BDD).

The project is being developed incrementally: Gherkin feature files are being defined first, followed by step definitions, Cucumber hooks, and integration with reusable Page Object Model (POM) components.

## Project goals

- Describe application behaviour using readable Gherkin scenarios.
- Execute browser interactions with Playwright.
- Use Cucumber.js as the BDD test runner and step-definition engine.
- Keep feature files, step definitions, Cucumber support code, and application configuration separate.
- Reuse Page Objects as the automation implementation grows.

## Tech stack

| Technology | Purpose |
| --- | --- |
| JavaScript (ES modules) | Project language and module system |
| [Playwright](https://playwright.dev/) | Browser automation |
| [Cucumber.js](https://cucumber.io/docs/installation/javascript/) | BDD runner and Gherkin step definitions |
| Gherkin | Business-readable feature and scenario specifications |
| dotenv | Load local environment variables |

The project currently declares `@cucumber/cucumber`, `@playwright/test`, and `dotenv` as dependencies. The Cucumber hooks launch Chromium through Playwright.

## Repository structure

```text
eventhub-playwright-bdd-framework/
├── config/
│   └── environment.js
├── cucumber/
│   ├── cucumber.js
│   ├── features/
│   │   ├── authentication.feature
│   │   ├── booking.feature
│   │   ├── dashboard.feature
│   │   ├── event.feature
│   │   ├── event_management.feature
│   │   ├── login.feature
│   │   └── user_registration.feature
│   ├── step-definitions/
│   │   ├── authentication.steps.js
│   │   ├── booking.step.js
│   │   ├── dashboard.step.js
│   │   ├── event.step.js
│   │   ├── event_management.step.js
│   │   ├── login.steps.js
│   │   └── user_registration.step.js
│   └── support/
│       └── hooks.js
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js
```

> **Development status:** The feature and step-definition files are being populated incrementally. Authentication and user-registration Gherkin scenarios have been drafted; the remaining feature files are still in progress. The login step definitions currently contain a valid-login implementation, while other step definitions are placeholders. POM integration is a planned next step, not yet documented as completed functionality.

## How the framework is organized

### Feature files

Gherkin specifications live in `cucumber/features/`. Each feature groups related application behaviour into scenarios.

The planned functional areas are:

- **Authentication** — login and logout.
- **User Registration** — new-user registration and registration validation.
- **Dashboard** — dashboard visibility and navigation.
- **Event** — event discovery, search, filtering, and event details.
- **Event Management** — event creation and management.
- **Booking** — ticket booking and booking management.

### Step definitions

JavaScript step definitions live in `cucumber/step-definitions/`. They import Cucumber's `Given`, `When`, and `Then` functions and connect Gherkin steps to executable automation.

As the framework develops, step definitions will delegate application interactions to Page Objects rather than becoming a home for page locators and detailed UI operations.

### Cucumber configuration

The Cucumber.js configuration is `cucumber/cucumber.js`. It:

- Loads feature files from `cucumber/features/**/*.feature`.
- Imports support code from `cucumber/support/**/*.js`.
- Imports step definitions from `cucumber/step-definitions/**/*.js`.
- Uses the progress formatter.

The configuration also loads `dotenv/config` so environment variables from a local `.env` file can be made available to the test process.

### Hooks and browser lifecycle

The current `cucumber/support/hooks.js` uses:

- A `Before` hook to launch a headless Chromium browser, create a browser context, and open a page for each scenario.
- An `After` hook to close the scenario's context and browser.

The page, context, and browser are stored on Cucumber's scenario-scoped World (`this`) so step definitions can access them. Authentication-state reuse and other shared setup can be introduced as the scenarios require it.

### Application URL

The current application base URL is maintained in `config/environment.js`:

```js
export const environment = {
  baseURL: "https://eventhub.rahulshettyacademy.com",
};
```

## Getting started

### Prerequisites

- Node.js and npm
- Git
- A supported local development environment

### 1. Clone the repository

```bash
git clone https://github.com/Ashwini-Dubey/eventhub-playwright-bdd-framework.git
cd eventhub-playwright-bdd-framework
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install the Chromium browser

```bash
npx playwright install chromium
```

### 4. Configure credentials

The current valid-login step reads the following environment variables:

- `EVENTHUB_EMAIL`
- `EVENTHUB_PASSWORD`

Create a local `.env` file in the repository root and provide the credentials used for your test account:

```dotenv
EVENTHUB_EMAIL=your-test-email@example.com
EVENTHUB_PASSWORD=your-test-password
```

The `.env` file is excluded from Git by `.gitignore`. Do not commit real credentials. Use dedicated test accounts and store CI credentials as repository or environment secrets when CI is introduced.

## Running the tests

The current Cucumber script is:

```bash
npm run test:cucumber
```

It runs:

```bash
cucumber-js --config cucumber/cucumber.js
```

The Cucumber configuration discovers every `.feature` file under `cucumber/features/`. Because some feature files and step definitions are still being developed, the complete suite may not yet be runnable until the in-progress Gherkin files and their corresponding steps are completed.

The package also contains a separate `test` script that invokes `playwright test`. The current Cucumber command uses Cucumber.js and its own configuration; `playwright.config.js` does not configure the Cucumber.js runner.

## Current development roadmap

1. Complete and review the Gherkin scenarios for all six functional areas.
2. Add the step-definition boilerplate and connect feature steps.
3. Develop Cucumber World and hooks for scenario setup and teardown.
4. Integrate reusable Page Objects from the EventHub POM framework.
5. Implement and execute scenarios incrementally.
6. Add reporting and CI execution as the framework matures.

## Security

- Keep `.env` and credentials out of version control.
- Use dedicated test accounts.
- Do not place passwords, tokens, or other secrets in feature files, step definitions, or committed configuration.
