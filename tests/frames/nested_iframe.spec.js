import{test,expect} from '@playwright/test';
test('test1',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1');
    let frame=await page.frameLocator("iframe[class*='w-full h']");
    let email = await frame.getByText('Admin@gmail.com').textContent();
  let password = await frame.getByText('Admin@1234').nth(0).textContent();
  console.log("Email:", email);
  console.log("Password:", password);
    const nestedFrame = frame.frameLocator('//section[@class="main_form_container"]/descendant::iframe');

  
  await nestedFrame.getByLabel('Email:').fill(email);
  await nestedFrame.getByLabel('Password:',{exact:true}).fill(password);
    await page.waitForTimeout(3000);
    //iframe[contains(@class,'w-full h')]
})