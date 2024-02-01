import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import ContaBancariaPage from '../support/pages/ContaBancariaPage';

test.describe('Bug Bank - Conta Digital', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let contaBancariaPage: ContaBancariaPage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.bug_bank')
    .retrieveData();

  if (process.env.QA) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.bug_bank')
      .retrieveData();
  }

  test.beforeEach(async ({ page }) => {
    contaBancariaPage = new ContaBancariaPage(page);
    await page.goto(BASE_URL);
    await contaBancariaPage.novoUsuario();
    await contaBancariaPage.login();
  });

  test('Verificar o extrato da conta', async () => {
    await contaBancariaPage.acessarExtrato();
    await contaBancariaPage.validarSaldoConta();
  });

  test('Verificar saque habilitado', async () => {
    await contaBancariaPage.validarSaque();
  });
});
