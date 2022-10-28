import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import ContactPage from '../support/pages/ContactPage';

test.describe('Contact Form', () => {
  let contactPage: ContactPage;
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await page.goto(BASE_URL);
  });

  test('Send contact message', async () => {
    await contactPage.fillFormContact('a@b.com.br');
    await contactPage.validateMessageOK();
  });
});
