const { defineConfig } = require('cypress')

module.exports = defineConfig({

  projectId: 'gz7gj3',
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
})
