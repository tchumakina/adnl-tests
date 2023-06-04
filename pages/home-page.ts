import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly agreeButton: Locator;
    readonly searchIcon: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator('text="Inloggen"');
        const popup = page.frameLocator('xpath=//iframe[@title="SP Consent Message"]');
        this.agreeButton = popup.locator('xpath=//button[@title="Akkoord"]');
        this.searchIcon = page.locator('.icons.icon-search');
        this.searchInput = page.locator('.input.fjs-search-input');
        this.searchButton = page.locator('.submit');
    }

    async goto() {
        await this.page.goto('https://www.ad.nl/');
    }

}