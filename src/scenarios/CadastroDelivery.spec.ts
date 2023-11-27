import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import CadastroPage from '../support/pages/CadastroPage';

test.describe('Cadastro de usuário para delivery', () => {
  let cadastroPage: CadastroPage;
  let BASE_URL = '';
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  if (process.env.QA) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.base_url_bugereats_QA')
      .retrieveData();
  } else if (process.env.PRD) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.base_url_bugereats_PRD')
      .retrieveData();
  }

  test.beforeEach(async ({ page }) => {
    cadastroPage = new CadastroPage(page);
    await page.goto(BASE_URL);
  });

  test('Preencher formulário de cadastro', async () => {
    await cadastroPage.preencherFormulario();
    await cadastroPage.validarCadastro();
  });

  test('Preencher formulário de cadastro com dados invalidos', async () => {
    await cadastroPage.preencherFormularioInvalido();
    await cadastroPage.validarCNH();
  });
});
