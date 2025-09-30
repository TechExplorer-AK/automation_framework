import {chromium,test} from '@playwright/test';
// import {describe } from 'node:test';
test("",async({browser})=>{
  let browserr=await chromium.launch();
  let context1= await browserr.newContext();
  let context2=await browserr.newContext();
  let page1=await context1.newPage();
  let page2=await context2.newPage();
  await page1.goto('https://testautomationpractice.blogspot.com/');
  await page2.goto('https://playwright.dev/docs/api/class-browser');


  
})