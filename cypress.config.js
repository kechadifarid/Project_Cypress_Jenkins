const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
    env: {
  allure: true,
  allureResultsPath: 'allure-results',
  allureReuseAfterSpec: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
            // plugin allure
            allureWriter(on, config);
      
            return config 
        },
  },
});
