import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ContactElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getContactLink(): Locator {
    return this.page.locator('#contact-link >> text=Contact us');
  }

  getEmailField(): Locator {
    return this.page.locator('#email');
  }

  getNroOrdemField(): Locator {
    return this.page.locator('#id_order');
  }

  getMessageField(): Locator {
    return this.page.locator('#message');
  }

  getSendButton(): Locator {
    return this.page.locator('#submitMessage');
  }

  getSubjectSelect(): Locator {
    return this.page.locator('#id_contact');
  }

  getMessageOK(): Locator {
    return this.page.locator(
      'text=Your message has been successfully sent to our team.'
    );
  }
}
