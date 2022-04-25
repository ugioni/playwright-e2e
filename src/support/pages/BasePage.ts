import { Page, expect } from '@playwright/test';

export default abstract class BasePage {
  constructor(readonly page: Page) {
    this.page = page;
  }

  async verifyTitle(title: string): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }

  async verifyUrl(url: string): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }
}
