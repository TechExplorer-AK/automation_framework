import {test,expect} from '@playwright/test';
import { RegisterPage } from '../pageObjects/Register.page';
import tdata from '../TestData/data.json';
tdata.forEach(({url,name,emailId,pwd},index)=>{//accessing through key directly by Destructuring Object
    test(`register ${index+1}`,async({page})=>{//using placeholder to give unique Test title For Each Iteration
    let rpage=new RegisterPage(page);
    await page.goto(url);
    await rpage.register(name,emailId,pwd);
    await page.waitForTimeout(3000)
}) 
    })