import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }
async goto(){
    await this.page.goto('https://www.saucedemo.com/');
}
  async login(username: string, password: string) {

    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
   // Using Promise.all to wait for navigation after clicking login button to avoid the waiting issue
        await this.loginButton.click();
    const error = this.page.locator('[data-test="error"]');
  if (await error.isVisible({ timeout: 3000 })) {
    const msg = await error.textContent();
    throw new Error(`LOGIN FAILED: ${msg}`);
  }
//directly  wait for inventory page to load used locator of inventory container instead of waiting for url
  await this.page.locator('.inventory_container').waitFor({
    state: 'visible',
    timeout: 10000,
  });


  }



}
