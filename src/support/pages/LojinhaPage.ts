import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import LojinhaElements from '../elements/LojinhaElements';
import BasePage from './BasePage';

export default class CadastroPage extends BasePage {
  readonly lojinhaElements: LojinhaElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.lojinhaElements = new LojinhaElements(page);
  }

  async preencherCamposValidos(): Promise<void> {
      await this.lojinhaElements.getBotaoCookies().click();
    await this.lojinhaElements.getCampoNome().fill('Lucas');
    await this.lojinhaElements.getCampoEmail().fill('lucas@a.com');
    await this.lojinhaElements.getCampoTelefone().fill('123456789');
    await this.lojinhaElements.getCampoEstado().selectOption('Santa Catarina');
    await this.lojinhaElements.getCampoCidade().selectOption('Criciúma');
    await this.lojinhaElements.getCampoCargo().fill('Professor');
    await this.lojinhaElements.getCampoAssunto().selectOption('Sugestões');
    await this.lojinhaElements.getCampoConheceu().fill('Alunos da Trier');
    await this.lojinhaElements.getCampoComentario().fill('site ótimo');
  }

  async enviarFormulario(): Promise<void> {
    await this.lojinhaElements.getCheckAceito().click();
    await this.lojinhaElements.getTextoModal().click();
    await this.page.mouse.wheel(0, 2000);
    await this.lojinhaElements.getBotaoAceitar().click();
    await this.lojinhaElements.getBotaoEnviar().click();
  }
}
