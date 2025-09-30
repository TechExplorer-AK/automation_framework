import {test,expect} from '@playwright/test';
import { Login } from '../../pageObjects/Login.page';
import { Home } from '../../pageObjects/Home.page';
import { Organizations } from '../../pageObjects/Organizations.page';
import { CreateOrg } from '../../pageObjects/CreateOrg.page';
import ldata from '../../TestData/vtigerLogin.json'
import createorgdata from '../../TestData/createOrg.json'
test('login',async ({page}) => {
    await page.goto(ldata.url)
   let lp=new Login(page) ;
   await lp.login(ldata.username,ldata.pwd);
   let hp=new Home(page);
   let op=new Organizations(page);
   let co=new CreateOrg(page)
   await hp.orgLink.click()
   await op.createOrgLink.click()
   await co.createOrg(createorgdata.orgname);
   await page.waitForTimeout(3000)
   await hp.logout()
})