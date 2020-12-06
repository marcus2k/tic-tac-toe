import { useState } from 'react';
import Grid from './TTTGrid.js';
import './App.css';
import Cell from './Cell.js';


const App = () => {
  
  /*  // states
  const players = {0: 'O', 1: 'null'}

  // define updateTurn, updateCell, updateGame ? check guide

  const [currPlayer, updateTurn] = useState(0) // who is the current player?
  const [winner, updateGame] = useState(null) // is there a winner?
  const [full, isFull] = useState(false) // is grid full?
  */

  //const [gridModel, updateCell] = useState([[null, null, null], [null, null, null], [null, null, null]])

  // const gridModel = [[null, null, 1], [0, null, 1], [1, null, null]]

  const [state, setState] = useState({
    gridModel: [[null, null, null], [null, null, null], [null, null, null]],
    currPlayer: 1,
    //winner: null,
    //full: false
  });
  const { gridModel, currPlayer, winner, full } = state;
  const handler = x => clicked(x); 

  const clicked = x => {
    let [row, col, ...others] = x.split(" ")
    row = row[4]
    col = col[4]
    let gridModelCopy = [[null, null, null], [null, null, null], [null, null, null]]
    for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 3; k++) {
        gridModelCopy[i][k] = gridModel[i][k];
      }
    }
    gridModelCopy[row][col] = currPlayer;
    setState({
      gridModel: gridModelCopy,
      currPlayer: 1 - currPlayer,
      //winner: hasWinner(gridModelCopy),
      //full: isFull(gridModelCopy)
    })
    // for debugging: alert(row + " " + col) // replace alert with updateStates function!!!
  }

  return (
    <div className="App">
      <Grid gridModel={gridModel} notifyApp={handler} />
    </div>
  );
  

  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
