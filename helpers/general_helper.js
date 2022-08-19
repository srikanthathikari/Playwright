import { expect, Locator, Page } from '@playwright/test';
import { HomePage } from '../pages/homePage';

export class GeneralHelper {

    constructor(Page) {
        this.page = Page;
    }

    async navigate() {
        await this.page.goto('https://playwright.dev/');
    }
    async getStartedButton() {
        await this.page.locator(HomePage.getStartedButton).click();
    }
}