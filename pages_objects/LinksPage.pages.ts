import { expect, type Page } from "@playwright/test";

export class LinksPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickLink() {
        await this.page.getByRole('list').getByText('Links', { exact: true }).click();
        await expect(this.page).toHaveURL('https://demoqa.com/links');
    }

    async clickFollowingLinks(){
        await this.page.getByRole('link', { name: 'Created' }).click();
        await expect(this.page.locator('#linkResponse')).toHaveText('Link has responded with staus 201 and status text Created');

        await this.page.getByRole('link', { name: 'No Content' }).click();
        await expect(this.page.locator('#linkResponse')).toHaveText('Link has responded with staus 204 and status text No Content');

        await this.page.getByRole('link', { name: 'Moved' }).click();
        await expect(this.page.locator('#linkResponse')).toHaveText('Link has responded with staus 301 and status text Moved Permanently');

        await this.page.getByRole('link', { name: 'Bad Request' }).click();
        await expect(this.page.locator('#linkResponse')).toHaveText('Link has responded with staus 400 and status text Bad Request');

        await this.page.getByRole('link', { name: 'Unauthorized' }).click();
        await expect(this.page.locator('#linkResponse')).toHaveText('Link has responded with staus 401 and status text Unauthorized');

        await this.page.getByRole('link', { name: 'Forbidden' }).click();
        await expect(this.page.locator('#linkResponse')).toHaveText('Link has responded with staus 403 and status text Forbidden');

        await this.page.getByRole('link', { name: 'Not Found' }).click();
        await expect(this.page.locator('#linkResponse')).toHaveText('Link has responded with staus 404 and status text Not Found');
        }

    
}