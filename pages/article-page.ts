import { Locator, Page } from '@playwright/test';

export class ArticlePage {
    readonly page: Page;
    readonly articleTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.articleTitle = page.locator('.article__title');
    }

}