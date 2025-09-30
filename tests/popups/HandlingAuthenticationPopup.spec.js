import {test,expect} from '@playwright/test';
import path from 'node:path';
test('test1',async({browser})=>{
 let context=await browser.newContext({
    httpCredentials:{
        username:'admin',
        password:'admin'
    }
 })
 let page=await context.newPage()
 await page.goto('https://demoapps.qspiders.com/ui/auth?sublist=0');
 let pagePromise=context.waitForEvent('page');
 await page.locator('#AuthLink').click();
 let newpage=await pagePromise;
 console.log(await newpage.locator('//body/p').textContent());
 
 expect(await newpage.locator('//body/p').textContent()).toContain('congratulations with valid credentials');
   
   
})