export class Home{
    /**
     * 
     * @param {import ('playwright').Page} page 
     */
    constructor(page){
        this.orgLink=page.getByText('Organizations').first()
        this.contactsLink=page.getByText('Contacts').nth(0)
        this.profileIcon=page.locator('//img[@src="themes/softed/images/user.PNG"]')
        this.signoutLink=page.getByText('Sign Out')
    }
    async logout(){
        await this.profileIcon.hover();
        await this.signoutLink.click();

    }
}