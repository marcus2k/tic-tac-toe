import { useState } from 'react';
import Grid from './TTTGrid.js';
import './App.css';
import Cell from './Cell.js';


const App = () => {
  const [state, setState] = useState({
    gridModel: [[null, null, null], [null, null, null], [null, null, null]],
    currPlayer: 1, // 1 or 0
    //winner: null, // 1, 0, or null
    //full: false, // true, false
  });
  const { gridModel, currPlayer, winner, full } = state;
  const handler = x => clicked(x); 

  const clicked = x => {
    let [row, col, ...others] = x.split(" ")
    row = row[4]
    col = col[4]
    let gridModelCopy = [[...gridModel[0]], [...gridModel[1]], [...gridModel[2]]];
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
