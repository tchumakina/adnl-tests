# Ad.nl test automation project
This project is done to show automation solution for ad.nl website using Playwright and TypeScript.
Read more [here](https://www.cuketest.com/playwright/docs/intro).

## Test Execution
### Local run
- install node version 16+ (to check your version run `node -v`)
- install npm version 9+ (to check your version run `npm -v`)
- [clone this project](https://github.com/tchumakina/adnl-tests.git)
- switch to project folder in console
- build project with `npm install`
- run `npx cypress run`
### CI run
- request collaborator access in order to have permissions to run workflow (email to tchumakina@gmail.com with your email)
- accept invitation to the project
- go to project Actions > All workflows > Playwright Tests and press "Run workflow" and run workflow against main branch
