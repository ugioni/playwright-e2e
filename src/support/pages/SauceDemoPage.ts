import { Page, expect } from '@playwright/test';
import SauceDemoElements from '../elements/SauceDemoElements';
import BasePage from './BasePage';

export default class SauceDemoPage extends BasePage {
  readonly sauceDemoElements: SauceDemoElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.sauceDemoElements = new SauceDemoElements(page);
  }

  async login(): Promise<void> {
    await this.sauceDemoElements.getCampoUsuario().fill('standard_user');
    await this.sauceDemoElements.getCampoSenha().fill('secret_sauce');
    await this.sauceDemoElements.getBotaoLogin().click();
  }

  async adicionarProdutoAoCarrinho(): Promise<void> {
    await this.sauceDemoElements.getBotaoAdicionarProduto().click();
  }

  async validarQuantidadeNoCarrinho(): Promise<void> {
    await expect(this.sauceDemoElements.getBadgeCarrinho()).toHaveText('1');
  }

  async abrirCarrinho(): Promise<void> {
    await this.sauceDemoElements.getBotaoCarrinho().click();
  }

  async validarProdutoNoCarrinho(): Promise<void> {
    await expect(this.sauceDemoElements.getProdutoCarrinho()).toHaveText(
      'Sauce Labs Backpack'
    );
  }

  async iniciarCheckout(): Promise<void> {
    await this.sauceDemoElements.getBotaoCheckout().click();
  }

  async validarPaginaCheckout(): Promise<void> {
    await expect(this.sauceDemoElements.getInfoCheckout()).toBeVisible();
  }
}
