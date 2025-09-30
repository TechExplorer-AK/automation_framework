import excel from 'exceljs'
export async function readExcelData(sheetname,path,rownum,cellnum){
    const book=new excel.Workbook();//creating object for workbook
    await book.xlsx.readFile(path)//giving path from where it should read data
    const sheet=await book.getWorksheet(sheetname)
    const data=await sheet.getRow(rownum).getCell(cellnum).value//fetching value property
    return data;
}