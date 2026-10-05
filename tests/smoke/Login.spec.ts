import{test,expect} from '../../fixtures/pageFixture';
import {LoginPage} from '../../pages/LoginPage';
import * as allure from 'allure-js-commons';

test('@regression user login validation', async({loginPage,homePage})=>{
  allure.suite('smoke');
  allure.severity('critical');
  allure.story('Login functionality');
  allure.description('Test to validate user login functionality');

  
   await loginPage.goToLoginPage();
   await loginPage.userLogin(process.env.User_Credential!,process.env.Pass_Credential!);

   expect( await homePage.isLogooutOptionAvailable()).toBeTruthy();
   expect(await homePage.isMyaccountPresent()).toBeTruthy();
   console.log("hi i am good");

});

