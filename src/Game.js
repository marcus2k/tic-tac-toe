import { useState } from 'react';
import Grid from './Grid.js';

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

// eslint-disable-next-line
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

const delay = (t, v) => new Promise(function(resolve) { 
      setTimeout(resolve.bind(null, v), t)
});

const drawMessage = "It's a draw! Resetting the game...";

const getWinMessage = player => `The winner is player ${player ? 'X' : 'O'}! Resetting the game...`;

const initialState = {
  gridModel: [[null, null, null], [null, null, null], [null, null, null]],
  currPlayer: 1, // values: 1 or 0
  winner: null, // values: 1, 0, or null
  full: false, // values: true, false
};

const getInitialState = () => {
  return {
    ...initialState,
    gridModel: [
      [...initialState.gridModel[0]],
      [...initialState.gridModel[1]], 
      [...initialState.gridModel[2]]
    ],
  };
};

const Game = () => {
  const [state, setState] = useState(() => getInitialState());

  const { gridModel, currPlayer, winner, full } = state;

  const isFinished = (winner != null) || full;

  const reset = () => {
    delay(0).then(() => {
      const message = winner != null ? getWinMessage(winner) : drawMessage;
      alert(message);
      setState(() => getInitialState());
    });
  };

  const updateState = classes => {
    // eslint-disable-next-line
    let [ row, col, others ] = classes.split(" ", 3);
    row = row[4]; // "row-?"
    col = col[4]; // "col-?"
    const gridModelCopy = [
      [...gridModel[0]], 
      [...gridModel[1]], 
      [...gridModel[2]]
    ];
    gridModelCopy[row][col] = currPlayer;

    setState(() => {return {
      gridModel: gridModelCopy,
      currPlayer: 1 - currPlayer,
      winner: getWinner(gridModelCopy),
      full: isFull(gridModelCopy),
      buffer: true,
    }});
  };

  let handler = x => updateState(x);

  if (isFinished) {
    return (
      <>
        <script defer>{reset()}</script>
        <Grid gridModel={gridModel} notifyApp={handler} isFinished={isFinished} />
      </>
    );
  }

  return (
    <Grid gridModel={gridModel} notifyApp={handler} isFinished={isFinished} />
  );
};

export default Game;