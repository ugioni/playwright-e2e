import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import ContatoPage from '../support/pages/ContatoPage';

test.describe('Formulario de contato', () => {
  let contatoPage: ContatoPage;
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    contatoPage = new ContatoPage(page);
    await page.goto(BASE_URL);
  });

  test('Enviar msg de contato', async () => {
    await contatoPage.preencherFormContato();
    await contatoPage.validarMensagem();
  });
});
