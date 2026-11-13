import "dotenv/config";

export default {
  paths: ["cucumber/features/**/*.feature"],
  import: ["cucumber/support/**/*.js", "cucumber/step-definitions/**/*.js"],
  format: ["progress"],
};
