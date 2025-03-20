import { expect, type Page } from "@playwright/test";

export class RadioPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async clickRadio() {
        await this.page.getByRole('list').getByText('Radio Button', { exact: true }).click();
        await expect(this.page).toHaveURL('https://demoqa.com/radio-button');
    }

    async checkRadio(){
        await this.page.getByText('Yes').click();
        await this.page.getByText('You have selected Yes').click();
        await this.page.getByText('Impressive').click();
        await this.page.getByText('You have selected Impressive').click();
        await this.page.getByLabel('No'); // Trouve l'élément radio
        await expect(this.page.getByLabel('No')).toBeDisabled(); // Vérifie qu'il est désactivé 
    }
}