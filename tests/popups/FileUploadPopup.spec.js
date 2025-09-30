import {test,expect} from '@playwright/test';
import path from 'node:path';
test('test1',async({page})=>{
 
   await page.goto('https://testautomationpractice.blogspot.com/')
   await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,'../Airbnb NYC Dashboard.pdf'));
   console.log(path.join(__dirname,'../Airbnb NYC Dashboard.pdf'));
   
   await page.waitForTimeout(4000);
   await page.getByRole('button',{name:'Upload Single File'}).click();
   let files=[path.join(__dirname,'../Airbnb NYC Dashboard.pdf'),path.join(__dirname,'../TestScriptData.xlsx')]
   await page.locator('#multipleFilesInput').setInputFiles(files);
   await page.getByRole('button',{name:'Upload Multiple Files'}).click();
  await page.waitForTimeout(5000);
   expect(await page.locator('#singleFileStatus').textContent()).toContain('Airbnb NYC Dashboard.pdf');
  expect(await page.locator('#multipleFilesStatus').textContent()).toContain('Airbnb NYC Dashboard.pdf', 'TestScriptData.xlsx');

   
})