import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly headerLabel: Locator;
  readonly cartItems: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerLabel = page.locator('//*[@id="header_container"]/div[1]/div[2]/div');
    this.cartItems = page.locator('[data-test="shopping-cart-link"]');
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async addtocart() {
    await this.addToCartButton.click();
  }
}