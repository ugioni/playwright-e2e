import { Page, expect } from '@playwright/test';
import ProprietarioElements from '../elements/ProprietarioElements';
import HomeElements from '../elements/HomeElements';
import BasePage from './BasePage';

export default class ProprietarioPage extends BasePage {
  readonly proprietarioElements: ProprietarioElements;

  readonly homeElements: HomeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.proprietarioElements = new ProprietarioElements(page);
    this.homeElements = new HomeElements(page);
  }

  async realizarcadastro(): Promise<void> {
    await this.homeElements.getBotaoPropietario().click();
    await this.proprietarioElements.getBotaoNovoProprietario().click();
    await this.proprietarioElements
      .getCampoNomeCompleto()
      .fill('Fernanda Silva');
    await this.proprietarioElements.getCampoCpf().fill('36196651765');
    await this.proprietarioElements
      .getCampoRazaoSocial()
      .fill('Fernanda Silva LTDA');
    await this.proprietarioElements.getCampoCnpj().fill('16590080000112');
    await this.proprietarioElements
      .getCampoTipoCliente()
      .selectOption('Produtor Rural');
    await this.proprietarioElements.getCampoCep().fill('88817070');
    await this.proprietarioElements.getCampoLogradouro().fill('Rua central');
    await this.proprietarioElements.getCampoNumero().fill('001');
    await this.proprietarioElements.getCampoComplemento().fill('testes');
    await this.proprietarioElements.getCampoBairro().fill('Centro');
    await this.proprietarioElements.getCampoCidade().fill('Criciúma');
    await this.proprietarioElements.getCampoEstado().fill('SC');
    await this.proprietarioElements.getBotaoSalvar().click();
  }

  async validarNovoProprietario(): Promise<void> {
    await expect(this.proprietarioElements.getNovoProprietario()).toBeVisible();
  }
}
