import {test,expect} from '@playwright/test';

test('test1',async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    page.on('dialog',async dialog=>{
        console.log(dialog.type());
        
        if(dialog.type()=='prompt'){
            console.log(await dialog.message());
            console.log(await dialog.defaultValue());
            
            await dialog.accept('Jack')
        }
        else if(dialog.type()=='alert'){
            console.log(await dialog.message()); 
            await dialog.accept()
        }
        else{
             console.log(await dialog.message());
            await dialog.dismiss()
        }
    })


    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    
    await page.locator('#promptBtn').click()
    await page.locator('#confirmBtn').click()
    await page.locator('#alertBtn').click()
   await  page.locator('#PopUp').click()
    // let [newpage]=await Promise.all([context.waitForEvent('page'),
    //     page.locator('#PopUp').click()
    // ])
    await page.waitForTimeout(3000)
    let allpages=await context.pages()
    let newpage;
    for(let p of allpages){
        
        if(p.url().includes('https://playwright.dev/')){
            console.log(p.url());
            
            newpage=p;
            break;
        }
    }
    await newpage.waitForTimeout(4000)
    await newpage.bringToFront()
    // let ele=await newpage.locator("//div[contains(@class,'mx-auto text-center p')]/h1")
    // console.log(await ele.textContent());
    // await newpage.waitForTimeout(3000) 
   
    //===========================================================
    console.log(await newpage.locator('//h1[@class="hero__title heroTitle_ohkl"]').textContent());
    
  
//==========================================================
    await page.bringToFront()
    await page.locator('#draggable').hover()
    await page.mouse.down()
      await newpage.waitForTimeout(2000)
    let obj=await page.locator('#droppable').boundingBox()
    await page.mouse.move(obj.x+obj.width/2,obj.y+obj.height/2)

    await page.mouse.up()
    await newpage.waitForTimeout(3000)
      

})