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

  async fillFormContact(email: string): Promise<void> {
    await this.contactElements.getContactLink().click();
    await this.contactElements.getSubjectSelect().selectOption('2');
    await this.contactElements.getEmailField().type(email);
    await this.contactElements.getNroOrdemField().type('123456');
    await this.contactElements.getMessageField().type('mensagem de testes');
    await this.contactElements.getSendButton().click();
  }

  async validateMessageOK(): Promise<void> {
    await expect(this.contactElements.getMessageOK()).toBeVisible();
  }
}
