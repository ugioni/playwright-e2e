import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoPropietario(): Locator {
    return this.page.locator(
      'img[src="/Fernanda/Content/img/proprietario.png"]'
    );
  }

  getBotaoFazenda(): Locator {
    return this.page.locator('img[src="/Fernanda/Content/img/fazenda.png"]');
  }

  getBotaoCultura(): Locator {
    return this.page.locator('img[src="/Fernanda/Content/img/folha.png"]');
  }

  getBotaoGarantia(): Locator {
    return this.page.locator(
      'img[src="/Fernanda/Content/img/dinheiro-de-volta.png"]'
    );
  }

  getBotaoUsuarios(): Locator {
    return this.page.locator('img[src="/Fernanda/Content/img/usuarios.png"]');
  }
}
