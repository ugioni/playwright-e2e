import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import ContactPage from '../support/pages/ContactPage';

test.describe('Formulário de contato', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let contactPage: ContactPage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.automationpractice_QA')
    .retrieveData();

  if (process.env.QA) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.automationpractice_QA')
      .retrieveData();
  } else if (process.env.HML) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.automationpractice_HML')
      .retrieveData();
  } else if (process.env.PRD) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.automationpractice_PRD')
      .retrieveData();
  }

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await page.goto(BASE_URL);
  });

  test('Enviar mensagem de contato', async () => {
    await contactPage.preencherFormulariodeContato('a@b.com.br');
    await contactPage.validarMensagemOK();
  });
});
