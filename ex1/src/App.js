import { useState } from 'react';
import './App.css';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

export default function App() {

  const [mssv, setMssv] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [students, setStudents] = useState([]);

  const handleAddStudent = () => {
    const newStudent = {mssv, name, dob, email};
    setStudents([...students, newStudent]);
  }

  const handleDeleteStudent = (index) => {
    const updateStudent = [...students];
    updateStudent.splice(index, 1);
    setStudents(updateStudent);
    }

  return (
    <div className='container'>
      <div className='input'>
        <div>
          <input type="text" placeholder='MSSV' value={mssv} onChange={(e) => {
            setMssv(e.target.value);
          }}></input>
          <input type="text" placeholder='Họ và tên' value={name} onChange={(e) => {
            setName(e.target.value);
          }}></input>
        </div>
        <div>
          <input type="text" placeholder='Ngày sinh' value={dob} onChange={(e) => {
            setDob(e.target.value);
          }}></input>
          <input type="text" placeholder='Email' value={email} onChange={(e) => {
            setEmail(e.target.value);
          }}></input>
        </div>
        <button onClick={handleAddStudent}>Thêm</button>
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
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>             
                <TableCell>{student.mssv}</TableCell>             
                <TableCell>{student.name}</TableCell>             
                <TableCell>{student.dob}</TableCell>             
                <TableCell>{student.email}</TableCell>
                <TableCell><button onClick={() => handleDeleteStudent(index)}>Xóa</button></TableCell>        
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
