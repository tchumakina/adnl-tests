import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly continueButton: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly wrongEmailMessage: Locator;
    readonly requiredFieldMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueButton = page.locator('.button-component_submit');
        this.usernameInput = page.locator('.text-input-component_input');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('text="Log in"');
        this.wrongEmailMessage = page.locator('#errorBlock-ValidEmail');
        this.requiredFieldMessage = page.locator('#errorBlock-NotEmpty');
    }

}