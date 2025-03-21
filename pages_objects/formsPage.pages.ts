import { expect, type Page } from "@playwright/test";

export class FormsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickForms() {
        await this.page.getByText('Forms').click();
        await this.page.getByText('Practice Form').click();
        await expect(this.page).toHaveURL('https://demoqa.com/automation-practice-form');
    }

    async fillForm(){
        await this.page.getByRole('textbox', { name: 'First Name' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill('Raphael');

        await this.page.getByRole('textbox', { name: 'Last Name' }).click();
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill('Deloffe');

        await this.page.getByRole('textbox', { name: 'name@example.com' }).click();
        await this.page.getByRole('textbox', { name: 'name@example.com' }).fill('draphael59400@hotmail.com');

        await this.page.getByText('Male', { exact: true }).click();

        await this.page.getByRole('textbox', { name: 'Mobile Number' }).click();
        await this.page.getByRole('textbox', { name: 'Mobile Number' }).fill('0365696847');

        await this.page.locator('.subjects-auto-complete__value-container').click();
        await this.page.locator('#subjectsInput').fill('M');
        await this.page.locator('#subjectsInput').press('Enter');
        


        await this.page.locator('#dateOfBirthInput').fill('20 Jun 2002');
        await this.page.locator('#dateOfBirthInput').press('Escape');

        await this.page.locator('#fixedban').evaluate((el) => el.remove()); // Remove ad if present
        await this.page.locator('.subjects-auto-complete__value-container').scrollIntoViewIfNeeded();
        await this.page.locator('.subjects-auto-complete__value-container').click();

        await this.page.locator('#subjectsInput').fill('Jsp');

        await this.page.getByText('Sports').click();

        await this.page.getByRole('textbox', { name: 'Current Address' }).click();
        await this.page.getByRole('textbox', { name: 'Current Address' }).fill('Jen ai rien a foutre');

        await this.page.locator('#state svg').click();
        await this.page.getByText('NCR', { exact: true }).click();
        await this.page.locator('#city svg').click();
        await this.page.getByText('Gurgaon', { exact: true }).click();
        await this.page.getByRole('button', { name: 'Submit' }).click();

        //Verifie la presence
        // Vérifier que le premier texte est bien affiché
        await expect(this.page.locator('div').filter({ hasText: 'Thanks for submitting the form' }).nth(3))
        .toBeVisible();

        // Vérifier que le deuxième texte est bien affiché
        await expect(this.page.locator('div').filter({ hasText: 'LabelValuesStudent' }).nth(3))
        .toBeVisible();

        await this.page.getByRole('dialog', { name: 'Thanks for submitting the form' }).press('Escape');
    }

}