import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import BethaElements from '../elements/EmpresaElements';
import BasePage from './BasePage';

export default class CadastroPage extends BasePage {
  readonly bethaElements: BethaElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.bethaElements = new BethaElements(page);
  }

  async preencherCamposValidos(): Promise<void> {
    await this.bethaElements.getCampoAssunto().click();
    await this.bethaElements.getValorDemo().click();
    await this.bethaElements.getCampoNome().fill('João Daniel de Liz');
    await this.bethaElements.getCampoEmail().fill('a@b.com.br');
    await this.bethaElements.getCampoTelefone().fill('123456789');
    await this.bethaElements.getCampoTipo().click();
    await this.bethaElements.getValorPrefa().click();
    await this.bethaElements.getCampoCargo().click();
    await this.bethaElements.getValorGestor().click();
    await this.bethaElements.getCampoEstado().click();
    await this.bethaElements.getValorSantaCatarina().click();
    await this.bethaElements.getCampoCidade().fill('Criciúma');
    await this.bethaElements.getCampoMensagem().fill('site ótimo');
  }

  async enviarFormulario(): Promise<void> {
    await this.bethaElements.getCheckAceito().click();
    await this.bethaElements.getBotaoEnviar().click();
  }

  async validarEnvio(): Promise<void> {
    await expect(this.bethaElements.getMensagemSucesso()).toBeVisible();
  }
}
