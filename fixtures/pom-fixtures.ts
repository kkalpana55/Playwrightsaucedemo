import{test as basetest} from'@playwright/test';
//basetest is an alias
import{LoginPage} from'../src/pages/loginpage.ts';
import{HomePage} from'../src/pages/homepage.ts';
//defining the type
type pomfixture={
//referance  to the class
loginpage: LoginPage;
homepage: HomePage;

};
//where basetest is extended to include the pomfixture
export const test=basetest.extend<pomfixture>({
 loginpage: async({page},use)=>{
const loginpage=new LoginPage(page);
 use(loginpage);
    },
    
    homepage: async ({ page }, use) => {
    await use(new HomePage(page));
  }
});


