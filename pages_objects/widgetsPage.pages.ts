import { expect, type Page } from "@playwright/test";

export class WidgetsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickWidgetsMenu() {
        await this.page.getByText('Widgets').click();
        await this.page.getByText('Select Menu').click();
    }

    async goodWidgetsMenu(){
        await this.page.locator('#withOptGroup div').filter({ hasText: 'Select Option' }).nth(1).click();
        await this.page.getByText('Another root option', { exact: true }).click();
        await this.page.locator('#selectOne div').filter({ hasText: 'Select Title' }).nth(1).click();
        await this.page.getByText('Other', { exact: true }).click();
        await this.page.locator('#oldSelectMenu').selectOption('10');
        await this.page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
        
        await this.page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click(); // Ouvre le dropdown

        // Sélectionne 4 options en tapant et appuyant sur 'Enter'
        await this.page.locator('#react-select-4-input').fill('Green');
        await this.page.locator('#react-select-4-input').press('Enter');

        await this.page.locator('#react-select-4-input').fill('Blue');
        await this.page.locator('#react-select-4-input').press('Enter');

        await this.page.locator('#react-select-4-input').fill('Black');
        await this.page.locator('#react-select-4-input').press('Enter');

        await this.page.locator('#react-select-4-input').fill('Red');
        await this.page.locator('#react-select-4-input').press('Enter');

        await this.page.locator('#cars').selectOption('audi');
    }

    
    async clickWidgetsHovers() {
        await this.page.getByText('Tool Tips').click({ force: true });

    }

    

    async Hovers() {
        await this.page.getByRole('button', { name: 'Hover me to see' }).hover();
        await expect(this.page.getByText('You hovered over the Button')).toBeVisible();
    
        
        await this.page.getByRole('textbox', { name: 'Hover me to see' }).hover();
        await expect(this.page.getByText('You hovered over the text')).toBeVisible();
    
        
        await this.page.getByRole('link', { name: 'Contrary' }).hover();
        await expect(this.page.getByText('You hovered over the Contrary')).toBeVisible();
    
        
        await this.page.getByRole('link', { name: '1.10.32' }).hover();
        await expect(this.page.getByText('You hovered over the 1.10.32')).toBeVisible();
    }
}