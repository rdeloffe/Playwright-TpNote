import { expect, type Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
constructor(page: Page) {
    this.page = page;
    }
    async Navigate() {
        await this.page.goto('https://demoqa.com/');
        await expect(this.page).toHaveURL('https://demoqa.com/');
        }

    async goToElements() {
            // Attendre que l'élément soit visible avant de cliquer
        await this.page.locator('.card-up').first().waitFor({ state: 'visible' });
    
            // Clic sur l'élément
        await this.page.locator('.card-up').first().click();
    
            // Attendre que l'URL change (attente explicite pour éviter les erreurs Firefox)
        await this.page.waitForURL('https://demoqa.com/elements', { timeout: 5000 });
    
            // Vérifier que l'URL est correcte
        await expect(this.page).toHaveURL('https://demoqa.com/elements');
    }
    // async goToElements(){
    //     await this.page.locator('path').first().click();
    //     await expect(this.page).toHaveURL('https://demoqa.com/elements')
    // }
}