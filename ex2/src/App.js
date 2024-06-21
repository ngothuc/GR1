import React, { useState, useEffect } from 'react';
import './App.css';
import img_1 from './pictures/1.jpg';
import img_2 from './pictures/2.jpg';
import img_3 from './pictures/3.jpg';
import img_4 from './pictures/4.jpg';
import img_5 from './pictures/5.jpg';
import img_6 from './pictures/6.jpg';
import img_7 from './pictures/7.jpg';
import img_8 from './pictures/8.jpg';
import img_9 from './pictures/9.jpg';
import img_10 from './pictures/10.jpg';
import img_11 from './pictures/11.jpg';
import img_12 from './pictures/12.jpg';
import img_13 from './pictures/13.jpg';
import img_14 from './pictures/14.jpg';

const images = [
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_6,
  img_7,
  img_8,
  img_9,
  img_10,
  img_11,
  img_12,
  img_13,
  img_14,
];

function App() {
  const [row, setRow] = useState(2);
  const [col, setCol] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    initializeData(row, col);
  }, [row, col]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newRow = parseInt(e.target.row.value);
    const newCol = parseInt(e.target.col.value);
    setRow(newRow);
    setCol(newCol);
    initializeData(newRow, newCol);
  };

  const initializeData = (newRow, newCol) => {
    const newData = [];
    for (let i = 0; i < newRow; i++) {
      const row = [];
      for (let j = 0; j < newCol; j++) {
        row.push('');
      }
      newData.push(row);
    }
    setData(newData);
  };

  const renderGrid = () => {
    return (
      <div className='grid'>
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className='row'>
            {row.map((cell, colIndex) => {
              const imgIndex = (rowIndex * col + colIndex) % images.length;
              return (
                <div key={`${rowIndex}-${colIndex}`} className='boxes'>
                  <img
                    src={images[imgIndex]}
                    alt={`Image ${imgIndex + 1}`}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label htmlFor='col'>Cột</label>
          <input type='number' id='col' name='col' required />
        </div>
        <div className='form-group'>
          <label htmlFor='row'>Hàng</label>
          <input type='number' id='row' name='row' required />
        </div>
        <div className="form-group form-btn">
          <button className="btn" type="submit">Cập nhật</button>
        </div>
      </form>
      {renderGrid()}
    </div>
  );
}

export default App;
