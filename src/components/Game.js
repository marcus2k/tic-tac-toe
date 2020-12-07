import React, { useState } from 'react';
import Grid from './Grid';
import Title from './Title';

const lines = [ // list of tic-tac-toe lines
  [[0, 0], [0, 1], [0, 2]], // first row
  [[1, 0], [1, 1], [1, 2]], // second row
  [[2, 0], [2, 1], [2, 2]], // third row
  [[0, 0], [1, 0], [2, 0]], // first column
  [[0, 1], [1, 1], [2, 1]], // second column
  [[0, 2], [1, 2], [2, 2]], // third column
  [[0, 0], [1, 1], [2, 2]], // diagonal from top-left
  [[0, 2], [1, 1], [2, 0]], // diagonal from top-right
];

const getWinner = grid => 
  lines.map(line => line.map(cell => cell.reduce((r, c) => grid[r][c]))) // get line contents
        .filter(line => line.filter(content => content === null).length === 0) // null filter
        // eslint-disable-next-line
        .filter(line => line.every(content => content == line[0])) // all-equal filter
        .reduce((a, b) => b[0], null); // reduce to symbol or null (seed)

const isFull = grid => grid.filter(x => x.filter(y => y === null).length).length === 0;

const delay = (t, v) => new Promise((resolve) => setTimeout(resolve.bind(null, v), t));

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
    delay(100).then(() => {
      const message = winner != null ? getWinMessage(winner) : drawMessage;
      alert(message);
      setState(() => getInitialState());
    });
  };

  const updateState = (event) => {
    console.log(event);
    event.preventDefault();
    // eslint-disable-next-line
    const classes = event.target.className;
    let [ row, col, others ] = classes.split(" ", 3);
    row = row[4]; // "row-?"
    col = col[4]; // "col-?"
    const gridModelCopy = [
      [...gridModel[0]], 
      [...gridModel[1]], 
      [...gridModel[2]]
    ];
    gridModelCopy[row][col] = currPlayer;

    setState(() => ({
      gridModel: gridModelCopy,
      currPlayer: 1 - currPlayer,
      winner: getWinner(gridModelCopy),
      full: isFull(gridModelCopy),
      buffer: true,
    }));
  };
  
  return (
    <>
      {isFinished && 
        <script>{reset()}</script>
      }
      <Title />
      <Grid gridModel={gridModel} clickHandler={updateState} isFinished={isFinished} />
    </>
  );
};

export default Game;