export class Home{
    /**
     * @param {import ('playwright').Page} page
     */
    constructor(page){
          this.searchTF=page.getByPlaceholder('Search Amazon')
    }
}