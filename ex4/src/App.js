import './App.css';
import { useState } from 'react';

let matrix = [
  [0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0],
];

function App() {
  const initMatrix = [
    [0, 0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0],
  ];

  const [maze, setMaze] = useState(initMatrix);
  const [step, setStep] = useState('');

  let mario_row, mario_column;

  function getMario() {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 2) {
          mario_row = i;
          mario_column = j;
        }
      }
    }
  }

  function handleMoveUp() {
    getMario();
    if (mario_row > 0 && matrix[mario_row - 1][mario_column] !== 1) {
      if (matrix[mario_row - 1][mario_column] === 3) {
        alert("You win!");
        setMaze(initMatrix);
        matrix = initMatrix.map(row => [...row]);
        return;
      }
      let new_matrix = matrix.map(row => [...row]);
      new_matrix[mario_row][mario_column] = 0;
      new_matrix[mario_row - 1][mario_column] = 2;
      setMaze(new_matrix);
      matrix = new_matrix.map(row => [...row]);
    }
  }

  function handleMoveDown() {
    getMario();
    if (mario_row < matrix.length - 1 && matrix[mario_row + 1][mario_column] !== 1) {
      if (matrix[mario_row + 1][mario_column] === 3) {
        alert("You win!");
        setMaze(initMatrix);
        matrix = initMatrix.map(row => [...row]);
        return;
      }
      let new_matrix = matrix.map(row => [...row]);
      new_matrix[mario_row][mario_column] = 0;
      new_matrix[mario_row + 1][mario_column] = 2;
      setMaze(new_matrix);
      matrix = new_matrix.map(row => [...row]);
    }
  }

  function handleMoveLeft() {
    getMario();
    if (mario_column > 0 && matrix[mario_row][mario_column - 1] !== 1) {
      if (matrix[mario_row][mario_column - 1] === 3) {
        alert("You win!");
        setMaze(initMatrix);
        matrix = initMatrix.map(row => [...row]);
        return;
      }
      let new_matrix = matrix.map(row => [...row]);
      new_matrix[mario_row][mario_column] = 0;
      new_matrix[mario_row][mario_column - 1] = 2;
      setMaze(new_matrix);
      matrix = new_matrix.map(row => [...row]);
    }
  }

  function handleMoveRight() {
    getMario();
    if (mario_column < matrix[0].length - 1 && matrix[mario_row][mario_column + 1] !== 1) {
      if (matrix[mario_row][mario_column + 1] === 3) {
        alert("You win!");
        setMaze(initMatrix);
        matrix = initMatrix.map(row => [...row]);
        return;
      }
      let new_matrix = matrix.map(row => [...row]);
      new_matrix[mario_row][mario_column] = 0;
      new_matrix[mario_row][mario_column + 1] = 2;
      setMaze(new_matrix);
      matrix = new_matrix.map(row => [...row]);
    }
  }

  const MazeCell = ({ value }) => {
    const className = (value === 0) ? 'white-cell' : (value === 1) ? 'blue-cell' : (value === 2) ? 'mario-cell' : 'diamond-cell';
    return (
      <div className={className}></div>
    );
  }

  const MazeRow = ({ row }) => {
    return (
      <div className='row'>
        {row.map((cell, index) => (
          <MazeCell key={index} value={cell} />
        ))}
      </div>
    )
  }

  const MazeTable = ({ table }) => {
    return (
      <div className='table'>
        {table.map((row, index) => (
          <MazeRow key={index} row={row} />
        ))}
      </div>
    )
  }

  const handleRun = () => {
    step.split('').forEach((direction, index) => {
      setTimeout(() => {
        if (direction === 'U' || direction === 'u') {
          handleMoveUp();
        } else if (direction === 'D' || direction === 'd') {
          handleMoveDown();
        } else if (direction === 'L' || direction === 'l') {
          handleMoveLeft();
        } else if (direction === 'R' || direction === 'r') {
          handleMoveRight();
        }
      }, index * 500);
    });
  }

  return (
    <div className='container'>
      <div className='mazeTable'>
        <MazeTable table={maze} />
      </div>

      <div className='controller'>
        <form className='form' onSubmit={(e) => { e.preventDefault(); handleRun(); }}>
          <textarea
            className='move-data'
            name='move-data'
            rows={10}
            cols={50}
            value={step}
            onChange={(e) => setStep(e.target.value)}
          />
          <div className='btn-div'>
            <button className='run-button' type='submit'>Run</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
