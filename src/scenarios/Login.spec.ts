import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';

test.describe('Login', () => {
  let homePage: HomePage;
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto(BASE_URL);
  });

  test('Valid Login', async () => {
    await homePage.login();
  });
});
