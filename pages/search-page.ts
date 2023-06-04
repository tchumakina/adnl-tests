import { expect, Locator, Page } from '@playwright/test';

export class SearchPage {
    readonly page: Page;
    readonly resultMessage: Locator;
    readonly resultItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resultMessage = page.locator('.results__title');
        this.resultItem = page.locator('.results__list-item');
    }

}