import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';

test.describe('Find Products', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homePage: HomePage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.automationpractice_QA')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto(BASE_URL);
  });

  test('Find product by name', async () => {
    await homePage.searchProductByName();
    await homePage.checkProductCount();
  });
});
