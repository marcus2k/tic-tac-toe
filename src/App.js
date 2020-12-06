import { useState } from 'react';
import Grid from './TTTGrid.js';
import './App.css';

const lines = [ // list of winning coordinate sets
  [[0, 0], [0, 1], [0, 2]], // first row
  [[1, 0], [1, 1], [1, 2]], // second row
  [[2, 0], [2, 1], [2, 2]], // third row
  [[0, 0], [1, 0], [2, 0]], // first column
  [[0, 1], [1, 1], [2, 1]], // second column
  [[0, 2], [1, 2], [2, 2]], // third column
  [[0, 0], [1, 1], [2, 2]], // diagonal from top-left
  [[0, 2], [1, 1], [2, 0]], // diagonal from top-right
];

const allEqual = (x, y, z) => x == y && y == z && x == z;

const getWinner = (grid) => {
  console.log(grid);
  for (let i = 0; i < 8; i++) {
    const [[x1, y1], [x2, y2], [x3, y3]] = lines[i];
    if (grid[x1][y1] == null || grid[x2][y2] == null || grid[x3][y3] == null) {
      continue;
    }
    if (allEqual(grid[x1][y1], grid[x2][y2], grid[x3][y3])) {
      console.log(`Winner is ${grid[x1][y1]}`);
      return grid[x1][y1];
    }
  }
  console.log("no winner yet");
  return null;
};

const isFull = grid => {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (grid[r][c] == null) {
        return false;
      }
    }
  }
  console.log("full");
  return true;
};

const App = () => {
  const [state, setState] = useState({
    gridModel: [[null, null, null], [null, null, null], [null, null, null]],
    currPlayer: 1, // 1 or 0
    winner: null, // 1, 0, or null
    full: false, // true, false
  });

  const { gridModel, currPlayer, winner, full } = state;

  const clicked = x => {
    let [ row, col, ...others ] = x.split(" ");
    row = row[4]; // row-?
    col = col[4]; // col-?
    const gridModelCopy = [[...gridModel[0]], [...gridModel[1]], [...gridModel[2]]];
    gridModelCopy[row][col] = currPlayer;
    // alert(row + " " + col) // debugging statement
    setState({
      gridModel: gridModelCopy,
      currPlayer: 1 - currPlayer,
      winner: getWinner(gridModelCopy),
      full: isFull(gridModelCopy)
    });
  };

  const handler = x => clicked(x); 

  // if full -> announce draw and ask to reset
  // if winner -> announce winner and ask to reset
  return (
    <div className="App">
      <Grid gridModel={gridModel} notifyApp={handler} />
    </div>
  );
};

export default App;
