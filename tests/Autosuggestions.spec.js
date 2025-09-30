import {test,expect} from '@playwright/test';
test('test1',async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('iphone');
    //Waiting untill last element will be visible
    await page.locator("//div[contains(@id,'sac-suggestion-row')]").last().waitFor();
   let eles= await page.locator("//div[contains(@id,'sac-suggestion-row')]").all();
//    console.log(eles);
   
   for(let ele of eles){
    // console.log(await ele.textContent());
    let text=await ele.textContent();
    console.log(text);
    if(text.includes('iphone 15 128gb')){
        await ele.click();
        break;
    }
    
   }
   await page.waitForTimeout(3000);
})