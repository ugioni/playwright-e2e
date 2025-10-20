import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class LojinhaElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoAssunto(): Locator {
    return this.page.locator('#mui-component-select-subject');
  }

  getValorDemo(): Locator {
    return this.page.locator('text=Solicitar demonstração');
  }

  getValorPrefa(): Locator {
    return this.page.locator('text=Prefeitura');
  }

  getValorGestor(): Locator {
    return this.page.locator('text=Gestor público');
  }

  getValorSantaCatarina(): Locator {
    return this.page.locator('text=Santa Catarina (SC)');
  }

  getCampoNome(): Locator {
    return this.page.locator('input[name="name"]');
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[name="email"]');
  }

  getCampoTelefone(): Locator {
    return this.page.locator('input[name="phone"]');
  }

  getCampoTipo(): Locator {
    return this.page.locator('#mui-component-select-type');
  }

  getCampoCargo(): Locator {
    return this.page.locator('#mui-component-select-office');
  }

  getCampoEstado(): Locator {
    return this.page.locator('#mui-component-select-state');
  }

  getCampoCidade(): Locator {
    return this.page.locator('input[name="city"]');
  }

  getCampoMensagem(): Locator {
    return this.page.locator('textarea[name="message"]');
  }

  getCheckAceito(): Locator {
    return this.page.locator('#checkbox');
  }

  getBotaoEnviar(): Locator {
    return this.page.locator('button[type="submit"]').nth(1);
  }

  getMensagemSucesso(): Locator {
    return this.page.locator('text=Mensagem enviada com sucesso!').nth(0);
  }
}
