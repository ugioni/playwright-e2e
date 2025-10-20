import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class FarmaciaElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoNome(): Locator {
    return this.page.locator('input[name="nome"]').nth(1);
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[name="email"]').nth(1);
  }

  getCampoTelefone(): Locator {
    return this.page.locator('input[name="telefone"]').nth(1);
  }

  getCampoEstado(): Locator {
    return this.page.locator('#estado');
  }

  getCampoCidade(): Locator {
    return this.page.locator('#cidade');
  }

  getCampoCargo(): Locator {
    return this.page.locator('input[name="cargo"]');
  }

  getCampoAssunto(): Locator {
    return this.page.locator('select[name="assunto"]');
  }

  getCampoConheceu(): Locator {
    return this.page.locator('input[name="como_conheceu_trier"]');
  }

  getCampoComentario(): Locator {
    return this.page.locator('textarea[name="comentario"]');
  }

  getCheckAceito(): Locator {
    return this.page.locator(
      'label[for="checkbox-aceite-politica-dados-pessoais"]'
    );
  }

  getBotaoEnviar(): Locator {
    return this.page.locator('input[type="submit"]').nth(2);
  }

  getBotaoCookies(): Locator {
    return this.page.locator('text=Ok, entendi!');
  }

  getBotaoAceitar(): Locator {
    return this.page.locator('text=Aceitar');
  }

  getTextoModal(): Locator {
    return this.page.locator(
      'text=TERMO DE CONSENTIMENTO PARA O TRATAMENTO DE DADOS PESSOAIS - GRUPO TRIER'
    );
  }

  getValidarMensagem(): Locator {
    return this.page.locator(
      'text= Sua mensagem foi enviada com sucesso! Muito obrigado pelo seu contato!.'
    );
  }
}
