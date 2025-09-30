export class Contacts{
    /**
     * 
     * @param {import ('playwright').Page} page 
     */
    constructor(page){
        this.createContactIcon=page.getByTitle('Create Contact...');

    }
}