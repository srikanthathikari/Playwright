import { test, expect } from '@playwright/test';
import { GeneralHelper } from '../helpers/general_helper';

test.describe.configure({ mode: 'serial' })

test.describe('test1', async () => {
    let page, general_helper

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        general_helper = new GeneralHelper(page);
    });

    test('click on get started', async () => {
        await general_helper.navigate();
    })
    test('another test', async () => {
        await general_helper.getStartedButton();
    })
})