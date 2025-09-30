export class CreateOrg{
    /**
     * 
     * @param {import ('playwright').Page} page 
     */
    constructor(page){
        this.orgNameTF=page.locator('[name="accountname"]');
        this.saveBtn=page.locator('//input[@title="Save [Alt+S]"]').first();
        this.industryDD=page.locator('[name="industry"]')
        this.phoneTF=page.locator('#phone');
    }
    async createOrg(orgName){        
        await this.orgNameTF.fill(orgName+Math.floor(Math.random()*1000))
        await this.saveBtn.click();
    }
    async createOrgWithIndustry(orgName,industry){
         await this.orgNameTF.fill(orgName)
         await this.industryDD.selectOption(industry)
         await this.saveBtn.click();
    }
    async createOrgWithIndusPhone(orgName,industry,phone){
         await this.orgNameTF.fill(orgName+Math.floor(Math.random()*1000))
         await this.industryDD.selectOption(industry)
         await this.phoneTF.fill(phone)
         await this.saveBtn.click();
    }
    
    
    
}