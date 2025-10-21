import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import FarmaciaPage from '../support/pages/FarmaciaPage';

test.describe('Testes funcionais no site da Trier Sistemas', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let farmaciaPage: FarmaciaPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.lojinha')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    farmaciaPage = new FarmaciaPage(page);
    await page.goto(BASE_URL);
  });

  test('Validar funcionalidade de contato para dúvidas', async () => {
    await farmaciaPage.preencherCamposValidos();
  });
});
