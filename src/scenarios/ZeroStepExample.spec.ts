import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('zerostep example', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');

  const aiArgs = { page, test };
  await ai('enter values in full name field', aiArgs);
});
