import { HomePage } from "../pages/home-page";
import { expect, test } from "@playwright/test";
import { SearchPage } from "../pages/search-page";

test.describe('Article search tests', () => {

    let homePage: HomePage;
    let searchPage: SearchPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        searchPage = new SearchPage(page);
        await homePage.goto();
        await homePage.agreeButton.click();
    });

    test('Existing article', async () => {
        const searchString = 'Rondje Loetje aan de plas leert: smalle weg';
        await homePage.searchIcon.click();
        await homePage.searchInput.type(searchString);
        await homePage.searchButton.click();
        await expect(searchPage.resultItem).toHaveCount(1);
        await expect(searchPage.resultMessage).toContainText(searchString);
    });

    test('Unexisting article', async () => {
        const searchString = "@$@(*@(#*";
        await homePage.searchIcon.click();
        await homePage.searchInput.type(searchString);
        await homePage.searchButton.click();
        await expect(searchPage.resultItem).toBeHidden();
        await expect(searchPage.resultMessage).toContainText(searchString);
    });

    test('Empty search string', async () => {
        await homePage.searchIcon.click();
        await homePage.searchButton.click();
        await expect(searchPage.resultMessage).toContainText('Resultaten voor “” gevonden');
    });
});