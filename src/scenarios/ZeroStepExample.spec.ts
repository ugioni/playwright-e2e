import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.skip('zerostep example', async ({ page }) => {
  await page.goto('https://5elementslearning.dev/demosite/index.php');

  const aiArgs = { page, test };
  await ai('Click in Hardware category', aiArgs);
  await ai('Click in Matrox G400 32MB', aiArgs);
  await ai('Click in Add to Cart button', aiArgs);
  await ai('Change quantity to 7', aiArgs);
  await ai('Click in Checkout button', aiArgs);
});
