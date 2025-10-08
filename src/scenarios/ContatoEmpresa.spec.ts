import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import BethaPage from '../support/pages/EmpresaPage';

test.describe.skip('Testes funcionais no site da Betha Sistemas', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let bethaPage: BethaPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.empresa')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    bethaPage = new BethaPage(page);
    await page.goto(BASE_URL);
  });

  test('Validar funcionalidade de contato para falar com eles', async () => {
    await bethaPage.preencherCamposValidos();
    await bethaPage.enviarFormulario();
    await bethaPage.validarEnvio();
  });
});
