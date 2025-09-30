import {test,expect} from '@playwright/test';
test('test1',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
        await page.locator('#colors').selectOption(['Red','Yellow']);

    // await page.locator('#colors').selectOption([{index:0},{index:2}]);
    // await page.locator('#colors').selectOption([{value:'1'},{value:'2'}]);
    await page.waitForTimeout(4000);

    // await page.locator('#colors').selectOption('Blue')
     
    
})