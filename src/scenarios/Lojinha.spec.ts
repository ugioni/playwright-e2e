import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LojinhaPage from '../support/pages/LojinhaPage';

test.describe('Lojinha de informática do Luiz Miguel', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let lojinhaPage: LojinhaPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.lojinha')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    lojinhaPage = new LojinhaPage(page);
    await page.goto(BASE_URL);
  });

  test('Pesquisar uma impressora HP e validar o produto', async () => {
    await lojinhaPage.pesquisarAImpressora();
    await lojinhaPage.validarPesquisa();
    await lojinhaPage.validarProdutoDetalhe();
  });
});
