import { Given, When, Then } from "@cucumber/cucumber";
import { environment } from "../../config/environment.js";

Given("the user is on the EventHub login page", async function () {
  await this.page.goto(environment.baseURL);
});

When("the user logs in with valid credentials", async function () {
  await this.page
    .getByPlaceholder("you@email.com")
    .fill(process.env.EVENTHUB_EMAIL);

  await this.page.locator("#password").fill(process.env.EVENTHUB_PASSWORD);

  await this.page.getByRole("button", { name: "Sign In" }).click();
});

Then("the user should see the EventHub dashboard", async function () {
  await this.page
    .getByRole("link", { name: /Browse Events →/ })
    .waitFor({ state: "visible" });
});

Given("the user is on the eventhub dashboard page", async function() {

});

When("the user clicks on the logout button", async function() {
  
});

Then("the user should be redirected back to the Login page.", async function() {
  
});