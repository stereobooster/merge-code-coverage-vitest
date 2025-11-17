// https://github.com/cenfun/monocart-coverage-reports

export default {
    // logging: 'debug',
    name: 'E2E Coverage Report',
    outputDir: './coverage-reports/e2e',

    reports: process.env.CI ? ['raw'] : ['raw', 'console-details', 'v8'],

    entryFilter: {
        '**/src/**': true
    }
};
