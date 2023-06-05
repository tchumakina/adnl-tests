import { HomePage } from "../pages/home-page";
import { expect, test } from "@playwright/test";
import { ArticlePage } from "../pages/article-page";
import { SearchPage } from "../pages/search-page";

test.describe('Navigation tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goto();
        await homePage.agreeButton.click();
    });

    test('Open random tile element', async ({ page }) => {
        const randomTile = await homePage.getRandomTile();
        const tileLocator = randomTile.locator('h2');
        const tileTitle = await tileLocator.textContent();
        await tileLocator.click();
        const articlePage = new ArticlePage(page);
        await expect(articlePage.articleTitle).toHaveText(tileTitle);
    });

    test('Open random search result element', async ({ page }) => {
        await homePage.searchIcon.click();
        await homePage.searchButton.click();
        const searchPage = new SearchPage(page);
        const randomSearchResult = await searchPage.getRandomSearchResult();
        const resultLocator = randomSearchResult.locator('h2');
        const resultTitle = await resultLocator.textContent();
        await resultLocator.click();
        const articlePage = new ArticlePage(page);
        await expect(articlePage.articleTitle).toHaveText(resultTitle);
    });

});