import {test,expect} from '@playwright/test';
import { Login } from '../../pageObjects/Login.page';
import { Home } from '../../pageObjects/Home.page';
import { Organizations } from '../../pageObjects/Organizations.page';
import { CreateOrg } from '../../pageObjects/CreateOrg.page';
import excel from 'exceljs';
import { readMultipleData } from '../../Utility/ReadMultipleData';
test('login',async ({page}) => {
    let loginData=await readMultipleData('Login','./TestData/Create_Org.xlsx')
    console.log(loginData);
    
    await page.goto(loginData[1][0])
   let lp=new Login(page) ;
   
   await lp.login(loginData[1][1],loginData[1][2]);
   let hp=new Home(page);
   let op=new Organizations(page);
   let co=new CreateOrg(page)
   await hp.orgLink.click()
   await op.createOrgLink.click()
   let orgData=await readMultipleData('CreateOrg','./TestData/Create_Org.xlsx')
   await co.createOrgWithIndusPhone(orgData[1][0],orgData[1][1],orgData[1][2]);
   await page.waitForTimeout(3000)
   await hp.logout()
})