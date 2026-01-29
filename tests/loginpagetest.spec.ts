import {expect} from '@playwright/test';
//import { LoginPage } from '../src/pages/loginpage.ts';
//import { HomePage } from '../src/pages/homepage.ts';
//import{test} from'../fixtures/pom-fixtures'
import { test } from '../fixtures/common-utils-fixtures.ts';
import { MyCartPage } from '../src/pages/mycart.ts';

test("Login page test",async({page,loginpage,homepage,commonUtils})=>{
//const lp=new LoginPage(page);
//const hp=new HomePage(page);
//create a object of    CommonUtils class to use encrypt and decrypt methods
//const commonUtils=new CommonUtils();
//const encryptedUserName=commonUtils.encrpytText(process.env.APP_USERNAME!.trim());
//const encryptedPassword=commonUtils.encrpytText(process.env.APP_PASSWORD!.trim());
//console.log(`Encrypted Username: ${encryptedUserName}`);
//console.log(`Encrypted Password: ${encryptedPassword}`);
//console.log(process.env.BASE_URL);
//console.log(process.env.APP_USERNAME);
//console.log(process.env.APP_PASSWORD);
//exclamation mark is used to tell typescript that the value will not be null or undefined
const decryptedUserName=commonUtils.decryptText(process.env.APP_USERNAME!.trim());
const decryptedPassword=commonUtils.decryptText(process.env.APP_PASSWORD!.trim());
const mp=new MyCartPage(page);
await loginpage.goto();
await loginpage.login(decryptedUserName,decryptedPassword);
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
await expect(homepage.headerLabel).toHaveText("Swag Labs");
await homepage.addtocart();
await expect(homepage.cartItems).toHaveText("1");
 await mp.myCartList();
//.log(cartItems);
});
test("Login page invalid credentials test", async ({ loginpage, commonUtils }) => {
  const decryptedUserName = commonUtils.decryptText(
    "U2FsdGVkX1+Zo1G1VbW8uY8n4x3H1+1J"
  );
  const decryptedPassword = commonUtils.decryptText(
    "U2FsdGVkX19u6Y5qz3h6vQ9l5Z2H3g8K"
  );

  await loginpage.goto();
  await loginpage.login(decryptedUserName, decryptedPassword, false);

   
});
