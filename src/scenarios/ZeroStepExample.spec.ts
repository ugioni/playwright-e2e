import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.skip('zerostep example', async ({ page }) => {
  await page.goto('https://triersistemas.com.br/contato');

  const aiArgs = { page, test };
  await ai('enter valid values ​​for all fields', aiArgs);
});
