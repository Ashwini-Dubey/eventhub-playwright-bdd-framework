import { defineConfig, devices } from "@playwright/test";
import { environment } from "./config/environment.js";

export default defineConfig({
  testDir: "./playwright-bdd",
  fullyParallel: true,
  timeout: 60000,
  expect: {
    timeout: 5000,
  },
  retries: 1,
  workers: 2,
  reporter: "html",

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: environment.baseURL,
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "retain-on-failure",
      },
    },
  ],
});
