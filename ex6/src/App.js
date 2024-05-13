import './App.css';
import React, { useState, useRef } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const N = 8;

export default function App() {

  const [sum, setSum] = useState(0);
  const [inputValues, setInputValues] = useState(Array.from({ length: N }, () => 0));

  function randomInt(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  }



  const handleInputChange = (e, rowIndex) => {
    const newValue = parseInt(e.target.value) || 0;
    setInputValues(prevInputValues => {
      const newInputValues = [...prevInputValues];
      newInputValues[rowIndex] = newValue;
      setSum(calculateSum(newInputValues));
      return newInputValues;
    });
  }

  const calculateSum = (values) => {
    return values.reduce((acc, curr) => acc + curr, 0);
  }

  const DataTable = ({ n }) => {
    const tableRows = [];
    for (let i = 0; i < n; i++) {
      tableRows.push(
        <TableRow key={i}>
          <TableCell>{i}</TableCell>
          <TableCell>
            <input
              type="number"
              value={inputValues[i]}
              onChange={(e) => handleInputChange(e, i)}
            />
          </TableCell>
        </TableRow>
      );
    }
    return <TableBody>{tableRows}</TableBody>;
  }

  const options = {
    scales: {
      x : {
        title: { display: true, text: 'X', align: 'end' }
      },
      y : {
        beginAtZero: true,
        title: { display: true, text: 'Y', align: 'end' }
      },
    },
  };

  const labels = Array.from({ length: N }, () => '');

  const data = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: '',
        backgroundColor: 'blue',
        data: inputValues.map((value, i) => value),
      },
    ],
  }

  return (
    <div className='container'>
      <div className='data'>
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>X</TableCell>
                <TableCell>Y</TableCell>
              </TableRow>
            </TableHead>
            <DataTable n={N} />
          </Table>
        </div>
        {/* <div>Sum is {sum}</div> */}
      </div>
      <div className='chart'>
        <Chart 
          type = 'bar'
          options = {options}
          data = {data}
        />
      </div>
    </div>
  );
}
