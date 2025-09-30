import {test,expect} from '@playwright/test';
test('test1',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
   let obj= await page.getByTitle('Click to save your changes').boundingBox();
   console.log(obj);
   await page.mouse.wheel(obj.x,obj.y);
//    await page.waitForTimeout(3000);

   await page.getByText('Upload Files').scrollIntoViewIfNeeded({timeout:3000});
    await page.waitForTimeout(3000);


  

    
  
})