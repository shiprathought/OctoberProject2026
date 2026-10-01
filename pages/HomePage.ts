
import{Locator,Page} from '@playwright/test';
import { BasePage } from './BasePage';
export class HomePage extends BasePage {


    //1. private Locators:
    private readonly logoutOption:Locator;
    private readonly myAccount:Locator;
    private readonly headers:Locator;


    constructor(page:Page){
       super(page);
       this.headers= page.getByRole('heading',{level:2});
       this.logoutOption= page.getByRole('link', { name: 'Logout' }).last();
       this.myAccount= page.getByRole('heading', { name: 'My Account' }).first();
    };

    async getHomepageTitle():Promise<string> {
        return await this.page.title();
    }

    async allHeaders():Promise<string[]>{
       return await this.headers.allInnerTexts();
    }

    async isLogooutOptionAvailable(){
        return await this.logoutOption.isVisible();
    };

    async isMyaccountPresent(){
        return await this.myAccount.isVisible();
    };

}