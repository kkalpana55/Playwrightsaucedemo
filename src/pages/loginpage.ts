import { Locator,expect, Page } from '@playwright/test';

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
  async login(username: string, password: string, shouldSucceed = true) {
  await this.userNameInput.fill(username);
  await this.passwordInput.fill(password);
  await this.loginButton.click();

  const error = this.page.locator('[data-test="error"]');

  if (shouldSucceed) {
    // POSITIVE LOGIN FLOW
    await this.page.locator('.inventory_container').waitFor({
      state: 'visible',
      timeout: 10000,
    });
  } else {
    // NEGATIVE LOGIN FLOW
    await expect(error).toBeVisible({ timeout: 5000 });
  }
}

}

