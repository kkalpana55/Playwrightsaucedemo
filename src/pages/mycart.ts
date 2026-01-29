import{Page,Locator} from"playwright/test";
export class MyCartPage {
readonly page:Page;
readonly cartLink:  Locator;
readonly inventoryItems:Locator;
constructor(page:Page){
this.page=page;
this.cartLink=page.locator('[data-test="shopping-cart-link"]');
this.inventoryItems = page.locator('[data-test="inventory-item"] .inventory_item_name');

}
async myCartList() {
    // Click the cart link
    await this.cartLink.click();

    // Wait until at least one item is visible
    //await this.inventoryItems.first().waitFor({ state: 'visible' });

    // Get all item names as array
    const items = await this.inventoryItems.allTextContents();

    // Print each item individually
    items.forEach((name, index) => {
        console.log(`Item ${index + 1}: ${name}`);
    });

    // Return array if needed for assertions
    return items;
}

}

