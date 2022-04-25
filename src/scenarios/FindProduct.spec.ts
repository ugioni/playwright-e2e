import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';

test.describe('Find Product', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('Validar a busca de produtos', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.searchProductByName();
  });
});
