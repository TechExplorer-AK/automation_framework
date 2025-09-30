import {test,expect} from '@playwright/test';
test('test1',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.getByLabel('Name:').fill('Smith');//Some application doesn't allow this to use getByLabel
    await page.getByPlaceholder('Enter Name').fill('Jack');

    await page.locator("#email").fill('jack154@gmail.com');
    await page.getByRole('radio',{name:'Male',exact:true}).check();
    await page.locator('#phone').fill('9875641238');
    // await page.getByRole('checkbox',{name:'Sunday'}).check();
    // await page.getByRole('checkbox',{name:'Saturday'}).check();
    let checkboxes=await page.locator("//input[@class='form-check-input' and @type='checkbox']");
    // await checkboxes.nth(0).check();
    // await checkboxes.nth(2).check();
    // await checkboxes.last().check();
    // await checkboxes.all() ;
    await page.locator('#country').selectOption('Canada');
    // await page.getByText('START').dblclick();
    await page.locator('.start').dblclick();
    await page.locator('#draggable').dragTo(page.locator('#droppable'));
    // await page.waitForTimeout(8000);
    
})