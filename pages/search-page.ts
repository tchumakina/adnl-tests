import { Locator, Page } from '@playwright/test';

export class SearchPage {
    readonly page: Page;
    readonly resultMessage: Locator;
    readonly searchResults: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resultMessage = page.locator('.results__title');
        this.searchResults = page.locator('.results__list-item');
    }

    async getRandomSearchResult() {
        const resultCount = await this.searchResults.count();
        return this.searchResults.nth(Math.floor(Math.random() * resultCount));
    }
}