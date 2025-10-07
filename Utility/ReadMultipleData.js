import excel from 'exceljs'
export async function readMultipleData(sheetname,path){
    const book=new excel.Workbook();//creating object for workbook
    await book.xlsx.readFile(path)//giving path from where it should read data
    const sheet=book.getWorksheet(sheetname)
    // const data=await sheet.getRow(rownum).getCell(cellnum).value//fetching value property
    // return data;
    let data=[]
    for(let row=1;row<=sheet.rowCount;row++){
        let rowdata=[];
        for(let col=1;col<=sheet.columnCount;col++){
            rowdata.push(sheet.getRow(row).getCell(col).value)
        }
     data.push(rowdata);
    }
  return data;
}
