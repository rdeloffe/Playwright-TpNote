import { expect, type Page } from "@playwright/test";

export class DynamicPropertiesPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async clickDynamicProperties() {
        await this.page.getByRole('list').getByText('Dynamic Properties', { exact: true }).click();
        await expect(this.page).toHaveURL('https://demoqa.com/dynamic-properties');
    }

    async changeColors(){
        // Localiser le bouton "Color Change"
        const button = this.page.locator('#colorChange');

        // Attendre 6 secondes pour laisser la couleur changer
        await this.page.waitForTimeout(6000);

        // Vérifier que la couleur est devenue rouge
        await expect(button).toHaveCSS('color', 'rgb(220, 53, 69)'); // Rouge de Bootstrap

    }
}