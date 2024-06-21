import './App.css';
import React, { useState } from 'react';

function App() {

  const [move, setMove] = useState([]);
  const [moves, setMoves] = useState('');

  const maze = [
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0],
  ];

  const MazeCell = ({ value }) => {
    const cellStyle = {
      width: '75px',
      height: '75px',
      border: '1px solid blue',
      backgroundColor: value === 1 ? 'blue' : 'white',
    }
    if (value <= 1) return <div style={cellStyle}></div>
    else if (value === 2) return <div className='mario'></div>
    else if (value === 3) return <div className='diamond'></div>
  };

  const MazeRow = ({ row }) => {
    return (
      <div style={{ display: 'flex' }}>
        {row.map((cell, index) => (
          <MazeCell key={index} value={cell} />
        ))}
      </div>
    );
  }

  const MazeTable = ({ maze }) => {
    return (
      <div>
        {maze.map((row, index) => (
          <MazeRow key={index} row={row} />
        ))}
      </div>
    );
  }

  const handleSubmit = () => {
    setMoves(move);
  }

  return (
    <div className='container'>
      <div className='mazeTable'><MazeTable maze={maze} /></div>
      <div className='controler'>
        <div>
          <form className='form' onSubmit={handleSubmit}>
            <textarea
              className='move-data'
              name='move-data'
              rows={10}
              cols={50}
              onChange={(e) => {
                console.log(e.target.value);
                const newMove = [...move, e.target.value];
                setMove(newMove);
              }}
            />
          </form>
        </div>
        <button onClick={handleSubmit}>Run</button>
      </div>
    </div>
  );
}

export default App;
