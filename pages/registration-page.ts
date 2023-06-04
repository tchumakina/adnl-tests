import { Locator, Page } from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;
    readonly validationErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.validationErrorMessage = page.locator('#email-validation-component_invalid');
    }

}