import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ProprietarioElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoNovoProprietario(): Locator {
    return this.page.locator('text=Novo Proprietário');
  }

  getCampoNomeCompleto(): Locator {
    return this.page.locator('#NomeCompleto');
  }

  getCampoCpf(): Locator {
    return this.page.locator('#Cpf');
  }

  getCampoRazaoSocial(): Locator {
    return this.page.locator('#RazaoSocial');
  }

  getCampoCnpj(): Locator {
    return this.page.locator('#Cnpj');
  }

  getCampoTipoCliente(): Locator {
    return this.page.locator('#TipoClienteId');
  }

  getCampoCep(): Locator {
    return this.page.locator('#Cep');
  }

  getCampoLogradouro(): Locator {
    return this.page.locator('#Logradouro');
  }

  getCampoNumero(): Locator {
    return this.page.locator('#Numero');
  }

  getCampoComplemento(): Locator {
    return this.page.locator('#Complemento');
  }

  getCampoBairro(): Locator {
    return this.page.locator('#Bairro');
  }

  getCampoCidade(): Locator {
    return this.page.locator('#Cidade');
  }

  getCampoEstado(): Locator {
    return this.page.locator('#Estado');
  }

  getBotaoSalvar(): Locator {
    return this.page.locator('input[type="submit"]');
  }

  getNovoProprietario(): Locator {
    return this.page
      .getByRole('cell', { name: 'Fernanda Silva', exact: true })
      .first();
  }
}
