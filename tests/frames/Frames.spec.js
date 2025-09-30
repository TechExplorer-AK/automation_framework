import {test,expect} from '@playwright/test';
test('Frames',async({page})=>{
 await page.goto('https://ui.vision/demo/webtest/frames/');
 let allFrames=await page.frames();
 console.log(allFrames);
 console.log(allFrames.length);//counting frames
let frame3=await page.frameLocator('//frame[@src="frame_3.html"]');
let innerFrame= await frame3.frameLocator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]')
// await innerFrame.locator("//span[text()='Hi, I am the UI.Vision IDE']/ancestor::div[contains(@class,'bzfPab')]/descendant::div[@role='radio']").check();
let radiobtn=await innerFrame.locator("//div[@data-value='Hi, I am the UI.Vision IDE']");
await expect(radiobtn).toBeVisible();
await radiobtn.check();
await expect(radiobtn).toBeChecked();
 await page.waitForTimeout(3000)
 let frame2=await page.frameLocator('//frame[@src="frame_2.html"]');
await frame2.locator("//input[@type='text']").fill('Inside frame2!!!');
//   await page.waitForTimeout(3000)
 


})