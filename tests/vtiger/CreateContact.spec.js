import {test,expect} from '@playwright/test';
import { Login } from '../../pageObjects/Login.page';
import { Home } from '../../pageObjects/Home.page';
import { Contacts } from '../../pageObjects/Contacts.page';
import { CreateContact } from '../../pageObjects/CreateContact.page';
import ldata from '../../TestData/vtigerLogin.json'
import cdata from '../../TestData/createContact.json'
test('login',async ({page}) => {
    await page.goto(ldata.url)
   let lp=new Login(page) ;
   let hp=new Home(page);
   let cp=new Contacts(page);
   let cc=new CreateContact(page)
   await lp.login(ldata.username,ldata.pwd);
   await hp.contactsLink.click()
   await cp.createContactIcon.click();
   await cc.createContact(cdata.fname,cdata.lname);
    await page.waitForTimeout(3000)
    await hp.logout()

})