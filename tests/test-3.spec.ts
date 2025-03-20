import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://demoqa.com/');
  await page.locator('div').filter({ hasText: /^Elements$/ }).nth(1).click();
  await page.getByText('Widgets').click();

  await page.getByText('Tool Tips').click();

  await page.getByRole('button', { name: 'Hover me to see' }).click();
  await page.getByText('You hovered over the Button').click();
  await page.getByRole('textbox', { name: 'Hover me to see' }).click();
  await page.getByText('You hovered over the text').click();

  await page.getByRole('link', { name: 'Contrary' }).click();
  await page.getByText('You hovered over the Contrary').click();

  await page.getByRole('link', { name: '1.10.32' }).click();
});