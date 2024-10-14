import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LoginPage from '../support/pages/LoginPage';
import ProprietarioPage from '../support/pages/ProprietarioPage';

test.describe('Cadastro de proprietários', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let loginPage: LoginPage;
  let proprietarioPage: ProprietarioPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    proprietarioPage = new ProprietarioPage(page);
    await page.goto(BASE_URL);
    await loginPage.realizarLogin();
  });

  test('Cadastrar um novo proprietario', async () => {
    await proprietarioPage.realizarcadastro();
    await proprietarioPage.validarNovoProprietario();
  });
});
