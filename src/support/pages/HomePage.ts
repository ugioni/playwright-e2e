import { Page, expect } from '@playwright/test';
import HomeElements from '../elements/HomeElements';
import BasePage from './BasePage';

export default class HomePage extends BasePage {
  readonly homeElements: HomeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeElements = new HomeElements(page);
  }

  async searchProductByName(): Promise<void> {
    await this.homeElements.getSearchField().fill('t-shirts');
    await this.homeElements.getSearchButton().click();
  }

  async checkProductCount(): Promise<void> {
    await expect(this.homeElements.getProductCount()).toBeVisible();
  }

  async login(): Promise<void> {
    await this.homeElements.getLoginField().fill('standard_user');
    await this.homeElements.getPassField().fill('secret_sauce');
    await this.homeElements.getSubmitButton().click();
  }
}
