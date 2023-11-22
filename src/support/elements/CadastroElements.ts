import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CadastroElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoNovoCadastro(): Locator {
    return this.page.locator('text=Cadastre-se para fazer entregas');
  }

  getCampoNome(): Locator {
    return this.page.locator('input[name="name"]');
  }

  getCampoCpf(): Locator {
    return this.page.locator('input[name="cpf"]');
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[name="email"]');
  }

  getCampoWhatsapp(): Locator {
    return this.page.locator('input[name="whatsapp"]');
  }

  getCampoCep(): Locator {
    return this.page.locator('input[name="postalcode"]');
  }

  getBotaoBuscarCep(): Locator {
    return this.page.locator('text=Buscar CEP');
  }

  getCampoNumero(): Locator {
    return this.page.locator('input[name="address-number"]');
  }

  getCampoComplemento(): Locator {
    return this.page.locator('input[name="address-details"]');
  }

  getCampoMetodoEntrega(): Locator {
    return this.page.locator('img[alt="Van/Carro"]');
  }

  getCampoAnexo(): Locator {
    return this.page.locator('input[type="file"]');
  }

  getBotaoCadastrar(): Locator {
    return this.page.locator('button[type="submit"]');
  }

  getMessageOK(): Locator {
    return this.page.locator(
      'text=Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    );
  }

  getValidarCNH(): Locator {
    return this.page.locator('text=Adicione uma foto da sua CNH');
  }
}
