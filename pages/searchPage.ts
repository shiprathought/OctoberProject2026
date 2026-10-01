import{Locator,Page} from '@playwright/test';
import { BasePage } from './BasePage';
export class SearchPage extends BasePage{
   

  constructor(page:Page){
        super(page);
  }
}