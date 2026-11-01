import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import SauceDemoPage from '../support/pages/SauceDemoPage';

test.describe('Sauce Demo', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let sauceDemoPage: SauceDemoPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.sauceDemo')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    sauceDemoPage = new SauceDemoPage(page);
    await page.goto(BASE_URL);
  });

  test('Validação do carrinho', async () => {
    await sauceDemoPage.login();
    await sauceDemoPage.adicionarProdutoAoCarrinho();
    await sauceDemoPage.validarQuantidadeNoCarrinho();
    await sauceDemoPage.abrirCarrinho();
    await sauceDemoPage.validarProdutoNoCarrinho();
    await sauceDemoPage.iniciarCheckout();
    await sauceDemoPage.validarPaginaCheckout();
  });
});
