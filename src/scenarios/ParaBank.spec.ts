import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import ParaBankPage from '../support/pages/ParaBankPage';

test.describe('Para Bank - Sistema bancário', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let paraBankPage: ParaBankPage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.para_bank')
    .retrieveData();

  if (process.env.QA) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.para_bank')
      .retrieveData();
  }

  test.beforeEach(async ({ page }) => {
    paraBankPage = new ParaBankPage(page);
    await page.goto(BASE_URL);
  });

  test('Registrar um novo usuário', async () => {
    await paraBankPage.novoUsuario();
    await paraBankPage.validarUsuarioCriado();
  });
});
