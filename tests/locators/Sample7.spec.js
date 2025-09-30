import {test,expect} from '@playwright/test';
test('test1',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
        await expect.soft(page.getByText('Email Id')).toBeVisible();//Hard Assert
    await page.getByLabel('Email Id').fill('jack@gmail.com');
    // await page.getByAltText('broken image').click();
    // await page.waitForTimeout(1000)
    await expect.soft(page.getByText('Dynamic Button')).toBeAttached();
//   console.log(await expect( page.getByText('Register')).toHaveText('Register'));
    await expect(page.getByRole('header',{name:'Register',exact:true})).toHaveText('Register');


  

    
  
})