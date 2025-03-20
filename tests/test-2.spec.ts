import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Step 1
  await page.goto('https://demoqa.com/');
  await page.locator('div').filter({ hasText: /^Elements$/ }).nth(1).click();
  await page.locator('span').filter({ hasText: 'Elements' }).locator('div').first().click();
  await page.getByText('Elements').click();
  await page.getByRole('listitem').filter({ hasText: /^Links$/ }).click();
  await page.getByRole('link', { name: 'Created' }).click();
  await page.getByText('Link has responded with staus').click();
  await page.getByRole('link', { name: 'No Content' }).click();
  await page.getByText('Link has responded with staus').click();
  await page.getByRole('link', { name: 'Moved' }).click();
  await page.getByText('Link has responded with staus').click();

  //Step 2

  
  
  await page.locator('span').filter({ hasText: 'Forms' }).locator('div').first().click();
  await page.getByText('Forms', { exact: true }).click();
  await page.getByRole('listitem').getByText('Practice Form').click();

  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Raphael');

  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Deloffe');

  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('draphael59400@hotmail.com');

  await page.getByText('Male', { exact: true }).click();

  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('0365696847');

  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('option', { name: 'Choose Friday, June 14th,' }).click();

  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('Jsp');

  await page.getByText('Sports').click();

  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Jen ai rien a foutre');

  await page.locator('div').filter({ hasText: /^NCR$/ }).nth(3).click();

  await page.locator('#react-select-3-option-0').click();
  await page.locator('div').filter({ hasText: /^Delhi$/ }).nth(3).click();
  await page.getByText('Gurgaon', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('div').filter({ hasText: 'Thanks for submitting the form' }).nth(3).click();
  await page.locator('div').filter({ hasText: 'LabelValuesStudent' }).nth(3).click();

  await page.locator('#close-fixedban').click();
  await page.getByRole('dialog', { name: 'Thanks for submitting the form' }).press('Escape');

  //Step 3

  await page.getByText('Widgets').click();
  await page.getByText('Select Menu').click();
  await page.locator('#withOptGroup div').filter({ hasText: 'Select Option' }).nth(1).click();
  await page.getByText('Another root option', { exact: true }).click();
  await page.locator('#selectOne div').filter({ hasText: 'Select Title' }).nth(1).click();
  await page.getByText('Other', { exact: true }).click();
  await page.locator('#oldSelectMenu').selectOption('10');
  await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
  
  await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(1).click();
  await page.locator('#react-select-7-option-0').click();
  await page.locator('#react-select-7-option-2').click();
  await page.locator('#react-select-7-option-1').click();
  await page.locator('#react-select-7-option-3').click();
  await page.locator('div:nth-child(3) > .css-19bqh2r').click();
  await page.locator('#cars').selectOption('audi');

  //Step 4
  await page.locator('span').filter({ hasText: 'Elements' }).locator('div').first().click();
  await page.getByRole('listitem').filter({ hasText: 'Radio Button' }).click();
  await page.getByText('Yes').click();
  await page.getByText('You have selected Yes').click();
  await page.getByText('Impressive').click();
  await page.getByText('You have selected Impressive').click();
  await page.getByText('No').click();

  //Step 5
  await page.getByText('Dynamic Properties').click();
  await page.goto('https://demoqa.com/dynamic-properties');
  await page.getByRole('button', { name: 'Color Change' }).click();
  await page.getByRole('button', { name: 'Color Change' }).click();
  //Step 6

  await page.getByText('Book Store Application').click();

  await page.getByRole('listitem').filter({ hasText: 'Profile' }).click();
  await page.getByRole('link', { name: 'register' }).click();

  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Denny');

  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Favé');

  await page.getByRole('textbox', { name: 'UserName' }).click();
  await page.getByRole('textbox', { name: 'UserName' }).fill('FD');

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('azerty');

  await page.getByRole('button', { name: 'Register' }).click();
  await page.locator('iframe[name="a-pmoffh8wn1ov"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.getByRole('button', { name: 'Register' }).click();
  
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('A');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Azerty-');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Azerty-A');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Azerty-Azerty');
  await page.locator('iframe[name="a-bqyqoqydhu84"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-bqyqoqydhu84"]').contentFrame().locator('tr:nth-child(4) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-bqyqoqydhu84"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(4)').click();
  await page.locator('iframe[name="c-bqyqoqydhu84"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-bqyqoqydhu84"]').contentFrame().locator('tr:nth-child(4) > td:nth-child(4)').click();
  await page.locator('iframe[name="c-bqyqoqydhu84"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-bqyqoqydhu84"]').contentFrame().locator('tr:nth-child(4) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-bqyqoqydhu84"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('button', { name: 'Register' }).click();
});