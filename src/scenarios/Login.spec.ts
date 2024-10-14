import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LoginPage from '../support/pages/LoginPage';

test.describe('Tela de Login', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let loginPage: LoginPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(BASE_URL);
  });

  test('Realizar login válido', async () => {
    await loginPage.realizarLogin();
    await loginPage.validarAcessoSistema();
  });

  test('Realizar login inválido', async () => {
    await loginPage.realizarLoginInvalido();
    await loginPage.validarMensagemLogin();
  });
});
