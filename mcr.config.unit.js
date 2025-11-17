// https://github.com/cenfun/monocart-coverage-reports

export default {
    // logging: 'debug',
    name: 'Unit Coverage Report',
    outputDir: './coverage-reports/unit',

    reports: process.env.CI ? ['raw'] : ['raw', 'console-details', 'v8'],

    entryFilter: {
        '**/src/**': true
    }
};
