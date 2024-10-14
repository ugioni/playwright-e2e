import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import LoginElements from '../elements/LoginElements';
import HomeElements from '../elements/HomeElements';
import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  readonly loginElements: LoginElements;

  readonly homeElements: HomeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.loginElements = new LoginElements(page);
    this.homeElements = new HomeElements(page);
  }

  async realizarLogin(): Promise<void> {
    await this.loginElements
      .getCampoEmail()
      .fill('fernanda.silva@agrometrika.com.br');
    await this.loginElements.getCampoSenha().fill('123456');
    await this.loginElements.getBotaoLogin().click();
  }

  async realizarLoginInvalido(): Promise<void> {
    await this.loginElements.getCampoEmail().fill(faker.internet.email());
    await this.loginElements.getCampoSenha().fill(faker.internet.password());
    await this.loginElements.getBotaoLogin().click();
  }

  async validarAcessoSistema(): Promise<void> {
    await expect(this.homeElements.getBotaoPropietario()).toBeVisible();
    await expect(this.homeElements.getBotaoFazenda()).toBeVisible();
    await expect(this.homeElements.getBotaoCultura()).toBeVisible();
    await expect(this.homeElements.getBotaoGarantia()).toBeVisible();
    await expect(this.homeElements.getBotaoUsuarios()).toBeVisible();
  }

  async validarMensagemLogin(): Promise<void> {
    await expect(this.loginElements.getMensagemInvalido()).toBeVisible();
  }
}
