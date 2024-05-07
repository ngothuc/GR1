import './App.css';
import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

export const options = {
  responsive: false,
  maintainAspectRatio: false,
  aspectRatio: 3,
};


const labels = ['', '', '', '', '', '', '', ''];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: 'blue',
    },
  ],
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawTableBody(n) {
  const rows = [];
  for (let i = 1; i <= n; i++) {
    rows.push(
      <TableRow key={i}>
        <input type='number' defaultValue={randomInt(0, 100)}></input>
        <input type='number' defaultValue={randomInt(0, 100)}></input>
      </TableRow>
    );
  }
  return <TableBody>{rows}</TableBody>;
}

export default function App() {
  return (
    <div className='container'>
      <div className='data'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>X</TableCell>
              <TableCell>Y</TableCell>
            </TableRow>
          </TableHead>          
            {drawTableBody(8)}
        </Table>
      </div>
      <div className='bar-container'>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
