import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class LoginElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoEmail(): Locator {
    return this.page.locator('#Email');
  }

  getCampoSenha(): Locator {
    return this.page.locator('#Senha');
  }

  getBotaoLogin(): Locator {
    return this.page.locator('input[value="Login"]');
  }

  getMensagemInvalido(): Locator {
    return this.page.locator('text=E-mail ou Senha inválidos.');
  }
}
