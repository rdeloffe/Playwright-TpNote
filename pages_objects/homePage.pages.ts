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
    async goToElements(){
        await this.page.locator('div').filter({ hasText: /^Elements$/ }).nth(1).click();
        await expect(this.page).toHaveURL('https://demoqa.com/elements')
    }
}