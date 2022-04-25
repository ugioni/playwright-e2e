import { Page } from '@playwright/test';

export default abstract class BaseElements {
  constructor(readonly page: Page) {
    this.page = page;
  }
}
