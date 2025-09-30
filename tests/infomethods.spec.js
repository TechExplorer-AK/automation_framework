import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/dropdown");
  await page.getByText('Dropdown',{exact:true}).click();
  await expect(page.locator('country_code',{exact:true})).toBeVisible();
  
  let dd = page.locator('#country_code',{exact:true});

  console.log(await dd.innerText());
  console.log(await dd.innerHTML());
  console.log(dd);
  await dd.selectOption({index:2})

  await page.waitForTimeout(3000);
  //await dd.selectOption({value:'Canada'});
});
