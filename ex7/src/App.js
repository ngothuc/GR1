import './App.css';
import {Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';

function App() {

  const exportToExcel = () => {
    const ws = XLSX.utils.table_to_sheet(document.querySelector('table'));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'data.xlsx');
  }

  const exportToPDF = () => {
    const doc = new jsPDF();
    //doc.text('Data Table', 10, 10);
    let y = 20;

    document.querySelectorAll('table thead tr').forEach(row => {
      let x = 10;
      row.querySelectorAll('th').forEach(cell => {
        doc.text(cell.innerText, x, y);
        x += 60;
      })
      y += 10;
    })


    document.querySelectorAll('table tr').forEach(row => {
      let x = 10;
      row.querySelectorAll('td').forEach(cell => {
        doc.text(cell.innerText, x, y);
        x += 60;
      })
      y += 10;
    })
    doc.save('data.pdf');
  }

  return (
    <div className='container'>
      <div className='controler'>
        <button onClick={exportToExcel}>excel</button>
        <button onClick={exportToPDF}>PDF</button>
      </div>
      <div className='table'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>userloginID</TableCell>
              <TableCell>Fullname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Điện thoại</TableCell>
              <TableCell>Địa chỉ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>U001</TableCell>
              <TableCell>Pham Q A</TableCell>
              <TableCell>aa@gmail.com</TableCell>
              <TableCell>09123457</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>U002</TableCell>
              <TableCell>Tran Van B</TableCell>
              <TableCell>bbb@gmail.com</TableCell>
              <TableCell>09124566</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>U003</TableCell>
              <TableCell>Le Thi C</TableCell>
              <TableCell>ccc@gmail.com</TableCell>
              <TableCell>09134524</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default App;
