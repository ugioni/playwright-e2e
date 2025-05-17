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

  async pesquisarAImpressora(): Promise<void> {
    await this.lojinhaElements
      .getCampoPesquisa()
      .fill('Hewlett Packard LaserJet 1100Xi');
    await this.lojinhaElements.getCampoBotaoPesquisa().click();
  }

  async validarPesquisa(): Promise<void> {
    await expect(this.lojinhaElements.getTituloImpressoraHP()).toBeVisible;
    await this.lojinhaElements.getTituloImpressoraHP().click();
  }

  async validarProdutoDetalhe(): Promise<void> {
    await expect(this.lojinhaElements.getDetalhe()).toBeVisible();
  }
}
