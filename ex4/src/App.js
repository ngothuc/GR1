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

  let mario_row, mario_column;

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

  function getMario() {
    console.log("i = " + matrix.length);
    console.log("j = " + matrix[0].length);
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
    if (mario_row > 0 && matrix[mario_row-1][mario_column] !== 1) {
      if (matrix[mario_row-1][mario_column] === 3) {
        alert("You win!");
        setMaze(initMatrix);
        matrix = initMatrix.map(row => [...row]);
        return;
      }
      let new_matrix = matrix.map(row => [...row]);
      new_matrix[mario_row][mario_column] = 0;
      new_matrix[mario_row-1][mario_column] = 2;
      setMaze(new_matrix);
      matrix = new_matrix.map(row => [...row]);
    }
  }

  function handleMoveDown() {
    getMario();
    if (mario_row < matrix.length-1 && matrix[mario_row+1][mario_column] !== 1) {
      if (matrix[mario_row+1][mario_column] === 3) {
        alert("You win!");
        setMaze(initMatrix);
        matrix = initMatrix.map(row => [...row]);
        return;
      }
      let new_matrix = matrix.map(row => [...row]);
      new_matrix[mario_row][mario_column] = 0;
      new_matrix[mario_row+1][mario_column] = 2;
      setMaze(new_matrix);
      matrix = new_matrix.map(row => [...row]);
    }
  }

  function handleMoveLeft() {
    getMario();
    if (mario_column > 0 && matrix[mario_row][mario_column-1] !== 1) {
      if (matrix[mario_row][mario_column-1] === 3) {
        alert("You win!");
        setMaze(initMatrix);
        matrix = initMatrix.map(row => [...row]);
        return;
      }
      let new_matrix = matrix.map(row => [...row]);
      new_matrix[mario_row][mario_column] = 0;
      new_matrix[mario_row][mario_column-1] = 2;
      setMaze(new_matrix);
      matrix = new_matrix.map(row => [...row]);
    }
  }

  function handleMoveRight() {
    getMario();
    if (mario_column < matrix[0].length-1 && matrix[mario_row][mario_column+1] !== 1) {
      if (matrix[mario_row][mario_column+1] === 3) {
        alert("You win!");
        setMaze(initMatrix);
        matrix = initMatrix.map(row => [...row]);
        return;
      }
      let new_matrix = matrix.map(row => [...row]);
      new_matrix[mario_row][mario_column] = 0;
      new_matrix[mario_row][mario_column+1] = 2;
      setMaze(new_matrix);
      matrix = new_matrix.map(row => [...row]);
    }
  }


  const [maze, setMaze] = useState(initMatrix);

  const MazeCell = ({ value }) => {
    const className = (value === 0) ? 'white-cell' : (value === 1) ? 'blue-cell' : (value === 2) ? 'mario-cell' : 'diamond-cell';
    return (
      <div className={className}></div>
    );
  }

  const MazeRow = ({ row }) => {
    return (
      <div className='row'>
        {row.map((cell) => (
          <MazeCell value={cell} />
        ))}
      </div>
    )
  }

  const MazeTable = ({ table }) => {
    return (
      <div className='table'>
        {table.map((row) => (
          <MazeRow row={row} />
        ))}
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='mazeTable'>
        <MazeTable table={maze} />
      </div>

      <div className='controler'>
        <button onClick={handleMoveUp}>Move Up</button>
        <button onClick={handleMoveDown}>Move Down</button>
        <button onClick={handleMoveLeft}>Move Left</button>
        <button onClick={handleMoveRight}>Move Right</button>
        <button className='run-button' onClick={() => setMaze(initMatrix)}>Run</button>
      </div>
    </div>
  );
}

export default App;
