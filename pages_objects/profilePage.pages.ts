import { expect, type Page } from "@playwright/test";

export class ProfilePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickBookStoreApplicationMenu() {
        await this.page.getByText('Book Store Application').click();
        await this.page.getByText('Profile').click();
    }

    async fillProfiles(){
        await this.page.getByRole('link', { name: 'register' }).click();

        await this.page.getByRole('textbox', { name: 'First Name' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill('Denny');
      
        await this.page.getByRole('textbox', { name: 'Last Name' }).click();
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill('Favé');
      
        await this.page.getByRole('textbox', { name: 'UserName' }).click();
        await this.page.getByRole('textbox', { name: 'UserName' }).fill('FD');
      
        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill('azerty');

        
    }

}