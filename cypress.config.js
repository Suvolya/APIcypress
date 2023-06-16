const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b3v3m4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
