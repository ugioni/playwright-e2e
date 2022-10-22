import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ContatoElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getLinkContato(): Locator {
    return this.page.locator('#contact-link >> text=Contact us');
  }

  getCampoEmail(): Locator {
    return this.page.locator('#email');
  }

  getCampoNroOrdem(): Locator {
    return this.page.locator('#id_order');
  }

  getCampoMensagem(): Locator {
    return this.page.locator('#message');
  }

  getBotaoEnviar(): Locator {
    return this.page.locator('#submitMessage');
  }

  getComboAssunto(): Locator {
    return this.page.locator('#id_contact');
  }

  getMensagemOK(): Locator {
    return this.page.locator(
      'text=Your message has been successfully sent to our team.'
    );
  }
}
