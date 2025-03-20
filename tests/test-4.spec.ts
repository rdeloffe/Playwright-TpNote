import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('heading', { name: 'Student Registration Form' }).click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').press('CapsLock');
  await page.locator('#subjectsInput').fill('M');
  await page.locator('#subjectsInput').press('CapsLock');
  await page.locator('#subjectsInput').press('Enter');
  await page.locator('#subjectsInput').press('Enter');
});