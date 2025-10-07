import {test} from '@playwright/test'
test('test1',async ({page})=>{
    await page.goto('https://www.cricbuzz.com/cricket-stats/icc-rankings/men/batting')
    await page.locator('#batsmen-odis-tab').click()
    let ratings=await page.locator('//div[contains(@ng-show,"batsmen-odis")]/descendant::div[contains(@class,"cb-rank-tbl pull-right")][number(translate(text()," ",""))>700]').all()
    for(let r of ratings){
        console.log(await r.textContent());
        
    }
})