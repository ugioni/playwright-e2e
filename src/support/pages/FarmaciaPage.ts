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
    await this.farmaciaElements.getBotaoCookies().click();
    await this.farmaciaElements.getCampoNome().fill(faker.person.firstName());
    await this.farmaciaElements.getCampoEmail().fill(faker.internet.email());
    await this.farmaciaElements.getCampoTelefone().fill(faker.phone.number());
    await this.farmaciaElements.getCampoEstado().selectOption('Santa Catarina');
    await this.farmaciaElements.getCampoCidade().selectOption('Criciúma');
    await this.farmaciaElements.getCampoCargo().fill(faker.person.jobTitle());
    await this.farmaciaElements.getCampoAssunto().selectOption('Sugestões');
    await this.farmaciaElements.getCampoConheceu().fill(faker.lorem.words(2));
    await this.farmaciaElements
      .getCampoComentario()
      .fill(faker.lorem.words(20));
  }

  async enviarFormulario(): Promise<void> {
    await this.farmaciaElements.getCheckAceito().click();
    await this.farmaciaElements.getTextoModal().click();
    await this.page.mouse.wheel(0, 2000);
    await this.farmaciaElements.getBotaoAceitar().click();
    await this.farmaciaElements.getBotaoEnviar().click();
  }

  async validarMensagem(): Promise<void> {
    await expect(this.farmaciaElements.getValidarMensagem()).toBeVisible();
    await this.farmaciaElements.getCampoNome().click();
    await this.farmaciaElements.getCampoTelefone().click();
  }
}
