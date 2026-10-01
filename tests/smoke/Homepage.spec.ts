import { log, meta,testData } from 'reporting-labs';
import{test,expect} from '../../fixtures/pageFixture';


test.beforeEach('loginstep',async({loginPage})=>{
  meta({priority:'P0',severity:'critical',owner:'Shipra',feature:'precondition of Homepage',story:'Header validation'});
  await loginPage.goToLoginPage();
  await loginPage.userLogin(process.env.User_Credential!,process.env.Pass_Credential!);
  
});

test('headers validation', async({homePage,page})=>{
  meta({priority:'P2',severity:'minor',owner:'Shipra',feature:'Homepage',story:'Header validation'});
     let allheaders= await homePage.allHeaders();
     await page.waitForTimeout(2);
     console.log(allheaders);
    await log("reportinglabs Log: "+allheaders);
     //expect(allheaders.length).toBe(4);


});

test('homepage title validation', async({homePage})=>{
  meta
 const pagetitle= await homePage.getHomepageTitle();
 console.log(pagetitle);

 await log("reportingLabs log: " +pagetitle);
  expect(pagetitle).toBe('My Account');

});


