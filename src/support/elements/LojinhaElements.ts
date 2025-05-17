import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class LojinhaElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoPesquisa(): Locator {
    return this.page.locator('input[name="keywords"]');
  }

  getCampoBotaoPesquisa(): Locator {
    return this.page.locator('input[alt="Quick Find"]');
  }

  getTituloImpressoraHP(): Locator {
    return this.page.locator('text=Hewlett Packard LaserJet 1100Xi').nth(1);
  }

  getDetalhe(): Locator {
    return this.page.locator(
      'text=HP LaserJet 1100xi also features The Document Builder for the Web Era from Trellix Corp. (featuring software to create Web documents).'
    );
  }
}
