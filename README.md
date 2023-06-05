# Ad.nl test automation project

This project is done to show automation solution for ad.nl website using Playwright and TypeScript.
Read more [here](https://playwright.dev/).

## Test Execution

### Local run

- install node version 16+ (to check your version run `node -v`)
- install npm version 9+ (to check your version run `npm -v`)
- clone [this project](https://github.com/tchumakina/adnl-tests.git)
- switch to project folder in console
- build project with `npm install`
- run `npx playwright test`

### CI: manual run

- request collaborator access in order to have permissions to run workflow (email to tchumakina@gmail.com with your
  email)
- accept invitation to the project
- go to project Actions > All workflows > Playwright Tests and press "Run workflow" and run workflow against main branch

### CI: observe existing pipelines

- navigate to [Actions](https://github.com/tchumakina/adnl-tests/actions) tab
- go to **Playwright Tests** workflow in left sidebar
- open any pipeline
- on the page you can find all the information about test run and download artifacts


### Reporting

You can find the latest test reports [here](https://tchumakina.github.io/adnl-tests/). 
It was set up to be updated after each test run in CI.
