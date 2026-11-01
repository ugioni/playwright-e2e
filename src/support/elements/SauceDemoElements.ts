import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class SauceDemoElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoUsuario(): Locator {
    return this.page.locator('[data-test="username"]');
  }

  getCampoSenha(): Locator {
    return this.page.locator('[data-test="password"]');
  }

  getBotaoLogin(): Locator {
    return this.page.locator('[data-test="login-button"]');
  }

  getBotaoAdicionarProduto(): Locator {
    return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  getBadgeCarrinho(): Locator {
    return this.page.locator('[data-test="shopping-cart-badge"]');
  }

  getBotaoCarrinho(): Locator {
    return this.page.locator('[data-test="shopping-cart-link"]');
  }

  getProdutoCarrinho(): Locator {
    return this.page.locator('[data-test="inventory-item-name"]');
  }

  getBotaoCheckout(): Locator {
    return this.page.locator('[data-test="checkout"]');
  }

  getInfoCheckout(): Locator {
    return this.page.locator('[data-test="checkout-info-container"]');
  }
}
