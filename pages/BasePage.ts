
import{Locator,Page} from '@playwright/test';
export class BasePage  {


    //1. private Locators:
    protected readonly page:Page;
    protected readonly search:Locator;
    protected readonly cart: Locator;
    protected readonly checkout: Locator;
    protected readonly wishlist: Locator;
    protected readonly contentinfo: Locator;

    constructor(page:Page){
        this.page= page;
        this.search= page.getByRole('textbox', { name: 'Search' });
        this.cart = page.getByRole('link', { name: ' Shopping Cart' });
        this.checkout= page.getByRole('link', { name: ' Checkout' });
        this.wishlist= page.getByRole('link', { name: ' Wish List (0)' });
        this.contentinfo=page.getByRole('contentinfo');

    }






}