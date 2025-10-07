import excel from 'exceljs'
export async function writeDataExcel(sheetname,path,rownum,cellnum){
   const wb=new excel.Workbook();
   await wb.xlsx.readFile(path)
   const sheet=wb.addWorksheet(sheetname)
   sheet.getRow(rownum).getCell(cellnum).value='hello';
   await wb.xlsx.writeFile(path);
}