import {test,expect} from '@playwright/test';
import fs from 'fs' ;
import path from 'path';
test('test1',async({browser})=>{
    let customfolder='C:/Users/kumar/OneDrive/Desktop/Playwright_tutorial/downloaded files'
    let customfile='myfiletxt.txt';
    let fullpath1=path.join(customfolder,customfile);
    let customfile1='my_filetxt.txt';
    let fullpath2=path.join(customfolder,customfile1)
    let context=await browser.newContext();
   let page= await context.newPage();
   await page.goto('https://testautomationpractice.blogspot.com/')
   await page.locator('text="Download Files"').click();
  await page.waitForTimeout(2000)
  await page.locator('#inputText').nth(0).fill('download the file');
  await page.getByRole('button',{name:'Generate and Download Text File',exact:true}).click()
  let [downloadfile1]=await Promise.all([page.waitForEvent('download'),
    page.locator('#txtDownloadLink').click()])//returning Download object
   await downloadfile1.saveAs(fullpath1);
   if(fs.existsSync(fullpath1)){//Returns true if path exists else false
    console.log(`File saved to ${fullpath1}`);  
  }else{
    console.log(`File not saved to ${fullpath1}`);
  }
   await page.getByRole('button',{name:'Generate and Download PDF File'}).click();
   let [downloadfile2]=await Promise.all([page.waitForEvent('download'),page.locator('#pdfDownloadLink').click()])
  await  downloadfile2.saveAs(fullpath2);
  if(fs.existsSync(fullpath2)){
    console.log(`File saved to ${fullpath2}`)
  }else{
    console.log(`File not saved to ${fullpath2}`);
  }

})