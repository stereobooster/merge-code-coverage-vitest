import { devices } from '@playwright/test';

export default {
    testDir: './test/e2e',

    /* Run tests in files in parallel */
    fullyParallel: true,

    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: Boolean(process.env.CI),

    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,

    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,

    globalSetup: './test/e2e/global.setup.js',
    globalTeardown: './test/e2e/global-teardown.js',

    projects: [
        {
            name: 'chromium',
            use: devices['Desktop Chrome']
        }
    ],

    reporter: [
        process.env.CI ? ['dot'] : ['list'],
        [
            'monocart-reporter',
            {
                name: 'E2E report'
            }
        ]
    ],

    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:5173/',
        reuseExistingServer: !process.env.CI
    },

    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {

        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'http://localhost:5173/',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry'

    // Emulates the user timezone.
    // timezoneId: "Europe/Berlin",
    }
};
