import './App.css';
import React from 'react';

function App() {

  const maze = [
    //0 là ô trống, 1 là tường
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
      // backgroundImage: value === 0 ? "url('../pictures/white.jpg')" : value === 1 ? "url('../pictures/blue.jpg')" : value === 2 ? "url('../pictures/mario.png')" : "url('../pictures/diamond.png')",
      // backgroundSize: 'cover',
    }
    if(value <= 1) return <div style={cellStyle}></div>
    else if(value === 2) return <div className='mario'></div>
    else if(value === 3) return <div className='diamond'></div>
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

  return (
    <div className='container'>
      <div className='mazeTable'><MazeTable maze={maze} /></div>
      <div className='controler'>
        <div>
          <div>Move Up</div>
          <div>Move Down</div>
          <div>Move Left</div>
          <div>Move Right</div>
        </div>
        <button>Run</button>
      </div>
    </div>
  );
}

export default App;
