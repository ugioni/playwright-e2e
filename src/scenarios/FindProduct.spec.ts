import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';

test.describe('Find Products', () => {
  let homePage: HomePage;
  let BASE_URL = '';
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  if (process.env.QA) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.base_url_automationpractice_QA')
      .retrieveData();
  } else if (process.env.PRD) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.base_url_automationpractice_PRD')
      .retrieveData();
  }

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto(BASE_URL);
  });

  test('Find product by name', async () => {
    await homePage.searchProductByName();
    await homePage.checkProductCount();
  });
});
