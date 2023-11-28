import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import ContaBancariaElements from '../elements/ContaBancariaElements';
import BasePage from './BasePage';

export default class ContaBancariaPage extends BasePage {
  readonly contaBancariaElements: ContaBancariaElements;

  readonly senha: string;

  readonly email: string;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.contaBancariaElements = new ContaBancariaElements(page);
    this.senha = faker.internet.password();
    this.email = faker.internet.email();
  }

  async novoUsuario(): Promise<void> {
    await this.contaBancariaElements.getBotaoRegistrar().click();
    await this.contaBancariaElements.getCampoEmail().nth(1).fill(this.email);
    await this.contaBancariaElements
      .getCampoNome()
      .fill(faker.person.fullName());
    await this.contaBancariaElements.getCampoSenha().nth(1).fill(this.senha);
    await this.contaBancariaElements
      .getCampoConfirmacaoSenha()
      .fill(this.senha);
    await this.contaBancariaElements.getCriarComSaldo().click();
    await this.contaBancariaElements.getBotaoSubmit().nth(1).click();
    await this.contaBancariaElements.getBotaoFecharModal().click();
  }

  async login(): Promise<void> {
    await this.contaBancariaElements.getCampoEmail().nth(0).fill(this.email);
    await this.contaBancariaElements.getCampoSenha().nth(0).fill(this.senha);
    await this.contaBancariaElements.getBotaoSubmit().nth(0).click();
  }

  async acessarExtrato(): Promise<void> {
    await expect(this.contaBancariaElements.getWelcomeMessage()).toBeVisible();
    await this.contaBancariaElements.getBotaoExtrato().click();
  }

  async validarSaldoConta(): Promise<void> {
    await expect(this.contaBancariaElements.getCampoSaldo()).toBeVisible();
    await expect(this.contaBancariaElements.getCampoSaldo()).toHaveText(
      'R$ 1.000,00'
    );
  }

  async validarSaque(): Promise<void> {
    await this.contaBancariaElements.getBotaoSaque().click();
    await expect(this.contaBancariaElements.getMensagemDev()).toBeVisible();
    await expect(this.contaBancariaElements.getMensagemDev()).toHaveText(
      'Funcionalidade em desenvolvimento'
    );
  }
}
