import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ContaBancariaElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoRegistrar(): Locator {
    return this.page.locator('text=Registrar');
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[name="email"]');
  }

  getCampoNome(): Locator {
    return this.page.locator('input[name="name"]');
  }

  getCampoSenha(): Locator {
    return this.page.locator('input[name="password"]');
  }

  getCampoConfirmacaoSenha(): Locator {
    return this.page.locator('input[name="passwordConfirmation"]');
  }

  getCriarComSaldo(): Locator {
    return this.page.locator('#toggleAddBalance');
  }

  getBotaoSubmit(): Locator {
    return this.page.locator('button[type="submit"]');
  }

  getBotaoFecharModal(): Locator {
    return this.page.locator('#btnCloseModal');
  }

  getBotaoExtrato(): Locator {
    return this.page.locator('#btn-EXTRATO');
  }

  getCampoSaldo(): Locator {
    return this.page.locator('#textBalanceAvailable');
  }

  getWelcomeMessage(): Locator {
    return this.page.locator('text=bem vindo ao BugBank :)');
  }

  getBotaoSaque(): Locator {
    return this.page.locator('#btn-SAQUE');
  }

  getMensagemDev(): Locator {
    return this.page.locator('#modalText');
  }
}
