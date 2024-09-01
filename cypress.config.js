/** @format */

// cypress.config.js

const { defineConfig } = require("cypress");
const { startDevServer } = require("@cypress/webpack-dev-server");

module.exports = defineConfig({
  component: {
    devServer: (options) => startDevServer({ options }),
  },
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
