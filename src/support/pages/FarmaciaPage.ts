import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import FarmaciaElements from '../elements/FarmaciaElements';
import BasePage from './BasePage';

export default class FarmaciaPage extends BasePage {
  readonly farmaciaElements: FarmaciaElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.farmaciaElements = new FarmaciaElements(page);
  }

  async preencherCamposValidos(): Promise<void> {
    await this.farmaciaElements.getCampoNome().click();
    await this.farmaciaElements.getCampoTelefone().click();
  }
}
