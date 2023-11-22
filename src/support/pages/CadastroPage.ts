import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import CadastroElements from '../elements/CadastroElements';
import BasePage from './BasePage';

export default class CadastroPage extends BasePage {
  readonly cadastroElements: CadastroElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.cadastroElements = new CadastroElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.cadastroElements.getBotaoNovoCadastro().click();
    await this.cadastroElements.getCampoNome().fill(faker.person.firstName());
    await this.cadastroElements.getCampoCpf().fill('33223745050');
    await this.cadastroElements.getCampoEmail().fill('a@b.com.br');
    await this.cadastroElements.getCampoWhatsapp().fill('48 999998888');
    await this.cadastroElements.getCampoCep().fill('88817070');
    await this.cadastroElements.getBotaoBuscarCep().click();
    await this.cadastroElements.getCampoNumero().fill('10');
    await this.cadastroElements.getCampoComplemento().fill(faker.word.words());
    await this.cadastroElements.getCampoMetodoEntrega().click();
    await this.cadastroElements
      .getCampoAnexo()
      .setInputFiles('src/support/fixtures/cnh_testes.jpg');
    await this.cadastroElements.getBotaoCadastrar().click();
  }

  async preencherFormularioInvalido(): Promise<void> {
    await this.cadastroElements.getBotaoNovoCadastro().click();
    await this.cadastroElements.getCampoNome().fill(faker.person.firstName());
    await this.cadastroElements.getCampoCpf().fill('33223745050');
    await this.cadastroElements.getCampoEmail().fill('a@b.com.br');
    await this.cadastroElements.getCampoWhatsapp().fill('48 999998888');
    await this.cadastroElements.getCampoCep().fill('88817070');
    await this.cadastroElements.getBotaoBuscarCep().click();
    await this.cadastroElements.getCampoNumero().fill('10');
    await this.cadastroElements.getCampoComplemento().fill(faker.word.words());
    await this.cadastroElements.getCampoMetodoEntrega().click();
    await this.cadastroElements.getBotaoCadastrar().click();
  }

  async validarCadastro(): Promise<void> {
    await expect(this.cadastroElements.getMessageOK()).toBeVisible();
  }

  async validarCNH(): Promise<void> {
    await expect(this.cadastroElements.getValidarCNH()).toBeVisible();
  }
}
