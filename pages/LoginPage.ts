
import{Locator,Page} from '@playwright/test';
import { BasePage } from './BasePage';
export class LoginPage extends BasePage {


    //1. private Locators:
  
    private readonly emailId: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly logoutOption:Locator;
    private readonly myAccount:Locator;


    constructor(page:Page){
        super(page);
        this.emailId=  page.locator('input[name="email"]');
        this.password= page.locator('input[name="password"]');
        this.loginBtn= page.getByRole('button', { name: 'Login' });
       this.logoutOption= page.getByRole('link', { name: 'Logout' }).last();
       this.myAccount= page.getByRole('heading', { name: 'My Account' }).first();
    }

    async userLogin(username:string, userpassword:string){
        await this.emailId.fill(username);
        await this.password.fill(userpassword);
        await this.loginBtn.click();
    }

    async goToLoginPage(): Promise<void> {
        await this.page.goto('/opencart/index.php?route=account/login');
    }


    async isLogooutOptionAvailable(){
        return await this.logoutOption.isVisible();
    };

    async isMyaccountPresent(){
        return await this.myAccount.isVisible();
        
    }

   
    

}