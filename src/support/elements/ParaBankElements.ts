import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ParaBankElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getLinkRegistro(): Locator {
    return this.page.locator('text=Register').nth(0);
  }

  getCampoNome(): Locator {
    return this.page.locator('[id="customer\\.firstName"]');
  }

  getCampoSobrenome(): Locator {
    return this.page.locator('[id="customer\\.lastName"]');
  }

  getCampoEndereco(): Locator {
    return this.page.locator('[id="customer\\.address\\.street"]');
  }

  getCampoCidade(): Locator {
    return this.page.locator('[id="customer\\.address\\.city"]');
  }

  getCampoEstado(): Locator {
    return this.page.locator('[id="customer\\.address\\.state"]');
  }

  getCampoCep(): Locator {
    return this.page.locator('[id="customer\\.address\\.zipCode"]');
  }

  getCampoTelefone(): Locator {
    return this.page.locator('[id="customer\\.phoneNumber"]');
  }

  getCampoSSN(): Locator {
    return this.page.locator('[id="customer\\.ssn"]');
  }

  getCampoUserName(): Locator {
    return this.page.locator('[id="customer\\.username"]');
  }

  getCampoSenha(): Locator {
    return this.page.locator('[id="customer\\.password"]');
  }

  getCampoConfirmarSenha(): Locator {
    return this.page.locator('[id="repeatedPassword"]');
  }

  getBotaoRegistrar(): Locator {
    return this.page.getByRole('button', { name: 'Register' });
  }

  getMsgSucesso(): Locator {
    return this.page.locator(
      'text=Your account was created successfully. You are now logged in.'
    );
  }

  getMsgBemVindo(): Locator {
    return this.page.locator('h1[class="title"]');
  }
}
