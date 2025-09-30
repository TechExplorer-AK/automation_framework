import {test,expect} from '@playwright/test';
import { Login } from '../../pageObjects/Login.page';
import { Home } from '../../pageObjects/Home.page';
import { Organizations } from '../../pageObjects/Organizations.page';
import { CreateOrg } from '../../pageObjects/CreateOrg.page';
test('login',async ({page}) => {
    await page.goto('http://49.249.28.218:8888/index.php?action=Login&module=Users')
   let lp=new Login(page) ;
   await lp.login('admin','admin');
   let hp=new Home(page);
   let op=new Organizations(page);
   let co=new CreateOrg(page)
   await hp.orgLink.click()
   await op.createOrgLink.click()
   await co.createOrgWithIndustry('Facebook__1002','Communications');
   await page.waitForTimeout(3000)
})