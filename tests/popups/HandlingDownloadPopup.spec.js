import {test,expect} from '@playwright/test';
import fs from 'fs' ;
import path from 'path';
test('test1',async({browser})=>{
    let customfolder="C:/Users/kumar/OneDrive/Desktop/Playwright_tutorial/downloaded files";
    let customfile='myfile.txt';
    let fullpath=path.join(customfolder,customfile)
    let context=await browser.newContext();   
    let page=await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByPlaceholder('Enter text here').fill('download the file');
    // await page.waitForTimeout(3000);

    let downloadPromise=page.waitForEvent('download');
    await page.locator('#downloadButton').click();
    let download=await downloadPromise;//Returning Download object
    await page.waitForTimeout(3000);
    // let [download]= await Promise.all([page.waitForEvent('download'),page.locator('#downloadButton').click()])
    // console.log(download);
    console.log(fullpath);
    await download.saveAs(fullpath)
    if(fs.existsSync(fullpath)){
        console.log(`File is saved to ${fullpath} `);
        
    }else{
        console.log(`File is not saved to ${fullpath} `);
    }
    
})