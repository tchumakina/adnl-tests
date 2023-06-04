import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/home-page";
import { LoginPage } from "../pages/login-page";
import { RegistrationPage } from "../pages/registration-page";
import { adnlUser } from "../authentication";

test.describe('Login tests', () => {

    let homePage: HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await homePage.goto();
        await homePage.agreeButton.click();
        await homePage.loginButton.click();
    });

    test('Empty email value', async () => {
        await loginPage.continueButton.click();
        await expect(loginPage.requiredFieldMessage).toBeEnabled();
        await expect(loginPage.wrongEmailMessage).toBeEnabled();
    });

    const invalidEmails = [
        'email@111.222.333.44444',
        '#@%^%#$@#$@#.com',
        'Joe Smith <email@example.com>',
    ]
    for (const email of invalidEmails) {
        test(`Invalid email - ${email}`, async () => {
            await loginPage.usernameInput.type(email);
            await loginPage.continueButton.click();
            await expect(loginPage.wrongEmailMessage).toBeEnabled();
        });
    }

    test('Email with unexisting domain', async ({ page }) => {
        await loginPage.usernameInput.type('a@a.com');
        await loginPage.continueButton.click();
        const registrationPage = new RegistrationPage(page);
        await expect(registrationPage.validationErrorMessage).toContainText('Je kunt geen account aanmaken');
    });

    test('Valid user', async () => {
        await loginPage.usernameInput.type(adnlUser.username);
        await loginPage.continueButton.click();
        await loginPage.passwordInput.type(atob(adnlUser.password));
        await loginPage.loginButton.click();
        await expect(homePage.loginButton).toBeHidden();
    })
});
