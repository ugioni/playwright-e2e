import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import ParaBankElements from '../elements/ParaBankElements';
import BasePage from './BasePage';

export default class ParaBankPage extends BasePage {
  readonly paraBankElements: ParaBankElements;

  readonly senha: string;

  readonly user: string;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.paraBankElements = new ParaBankElements(page);
    this.senha = faker.internet.password();
    this.user = faker.internet.userName();
  }

  async novoUsuario(): Promise<void> {
    await this.paraBankElements.getLinkRegistro().click();
    await this.paraBankElements.getCampoNome().fill(faker.person.firstName());
    await this.paraBankElements
      .getCampoSobrenome()
      .fill(faker.person.lastName());
    await this.paraBankElements
      .getCampoEndereco()
      .fill(faker.location.streetAddress());
    await this.paraBankElements.getCampoCidade().fill(faker.location.city());
    await this.paraBankElements.getCampoEstado().fill(faker.location.state());
    await this.paraBankElements.getCampoCep().fill(faker.location.zipCode());
    await this.paraBankElements.getCampoTelefone().fill(faker.phone.number());
    await this.paraBankElements.getCampoSSN().fill(faker.word.verb());
    await this.paraBankElements.getCampoUserName().fill(this.user);
    await this.paraBankElements.getCampoSenha().fill(this.senha);
    await this.paraBankElements.getCampoConfirmarSenha().fill(this.senha);
    await this.paraBankElements.getBotaoRegistrar().click();
  }

  async validarUsuarioCriado(): Promise<void> {
    await expect(this.paraBankElements.getMsgSucesso()).toBeVisible();
    await expect(this.paraBankElements.getMsgBemVindo()).toHaveText(
      `Welcome ${this.user}`
    );
  }
}
