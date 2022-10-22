import { Page, expect } from '@playwright/test';
import ContatoElements from '../elements/ContatoElements';
import BasePage from './BasePage';

export default class ContatoPage extends BasePage {
  readonly contatoElements: ContatoElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.contatoElements = new ContatoElements(page);
  }

  async preencherFormContato(): Promise<void> {
    await this.contatoElements.getLinkContato().click();
    await this.contatoElements.getComboAssunto().selectOption('2');
    await this.contatoElements.getCampoEmail().type('a@b.com.br');
    await this.contatoElements.getCampoNroOrdem().type('123456');
    await this.contatoElements.getCampoMensagem().type('mensagem de testes');
    await this.contatoElements.getBotaoEnviar().click();
  }

  async validarMensagem(): Promise<void> {
    await expect(this.contatoElements.getMensagemOK()).toBeVisible();
  }
}
