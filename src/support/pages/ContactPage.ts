import { Page, expect } from '@playwright/test';
import ContactElements from '../elements/ContactElements';
import BasePage from './BasePage';

export default class ContactPage extends BasePage {
  readonly contactElements: ContactElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.contactElements = new ContactElements(page);
  }

  async preencherFormulariodeContato(email: string): Promise<void> {
    await this.contactElements.getContactLink().click();
    await this.contactElements.getSubjectSelect().selectOption('2');
    await this.contactElements.getEmailField().fill(email);
    await this.contactElements.getNroOrdemField().fill('123456');
    await this.contactElements.getMessageField().fill('mensagem de testes');
    await this.contactElements.getSendButton().click();
  }

  async validarMensagemOK(): Promise<void> {
    await expect(this.contactElements.getMessageOK()).toBeVisible();
  }
}
