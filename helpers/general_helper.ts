import { expect, Locator, Page } from '@playwright/test';
import { HomePage } from '../pages/homePage';

export class GeneralHelper {

    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://playwright.dev/');
    }
    async getStartedButton() {
        await this.page.locator(HomePage.getStartedButton).click();
    }
}