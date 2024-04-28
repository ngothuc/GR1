import './App.css';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

export default function App() {

  return (
    <div>
      <div className='input'>
        <div>
          <input type="text" placeholder='MSSV'></input>
          <input type="text" placeholder='Họ và tên'></input>
        </div>
        <div>
          <input type="text" placeholder='Ngày sinh'></input>
          <input type="text" placeholder='Email'></input>
        </div>
        <button>Thêm</button>
      </div>
      <div className='output'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>MSSV</TableCell>
              <TableCell>Họ tên</TableCell>
              <TableCell>Ngày sinh</TableCell>
              <TableCell>Email</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>20211234</TableCell>
              <TableCell>Phạm Văn A</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell><button>Xóa</button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>20211546</TableCell>
              <TableCell>Trần Đức B</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell><button>Xóa</button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>20216586</TableCell>
              <TableCell>Nguyễn Văn C</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell><button>Xóa</button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
