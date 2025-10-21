import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import EmpresaElements from '../elements/EmpresaElements';
import BasePage from './BasePage';

export default class EmpresaPage extends BasePage {
  readonly empresaElements: EmpresaElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.empresaElements = new EmpresaElements(page);
  }

  async preencherCamposValidos(): Promise<void> {
    await this.empresaElements.getCampoAssunto().click();
    await this.empresaElements.getValorDemo().click();
    await this.empresaElements.getCampoNome().fill(faker.person.firstName());
    await this.empresaElements.getCampoEmail().fill(faker.internet.email());
    await this.empresaElements.getCampoTelefone().fill(faker.phone.number());
    await this.empresaElements.getCampoTipo().click();
    await this.empresaElements.getValorPrefa().click();
    await this.empresaElements.getCampoCargo().click();
    await this.empresaElements.getValorGestor().click();
    await this.empresaElements.getCampoEstado().click();
    await this.empresaElements.getValorSantaCatarina().click();
    await this.empresaElements.getCampoCidade().fill('Criciúma');
    await this.empresaElements.getCampoMensagem().fill(faker.lorem.words(20));
  }

  async enviarFormulario(): Promise<void> {
    await this.empresaElements.getCheckAceito().click();
    await this.empresaElements.getBotaoEnviar().click();
  }

  async validarEnvio(): Promise<void> {
    await expect(this.empresaElements.getMensagemSucesso()).toBeVisible();
  }
}
