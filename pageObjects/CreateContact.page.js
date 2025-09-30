export class CreateContact{
    /**
     * 
     * @param {import ('playwright').Page} page 
     */
    constructor(page){
        this.firstNameTF=page.locator('[name="firstname"]')
        this.lastnameTF=page.locator('[name="lastname"]')
        this.saveBtn=page.locator('//input[@title="Save [Alt+S]"]').first();

    }
    async createContact(firstname,lastname){
        await this.firstNameTF.fill(firstname)
        await this.lastnameTF.fill(lastname)
        await this.saveBtn.click()
    }
}