import { useState } from 'react';
import Grid from './TTTGrid.js';
import './App.css';

const getWinner = (grid) => {
  console.log(grid);
  for (let i = 0; i < 3; i++) {
    if (grid[i][i] == null) {
      continue
    }
    // matchRow
    if (grid[i][0] == grid[i][1] == grid[i][2]) {
      console.log(`winner is ${grid[i][0]}`)
      return grid[i][0];
    }
    // matchCol
    if (grid[0][i] == grid[1][i] == grid[2][i]) {
      console.log(`winner is ${grid[0][i]}`)
      return grid[0][i];
    }
  }
  // diagonal cannot match
  if (grid[1][1] == null) {
    console.log("no winner")
    return null;
  }
  // match diagonal
  if (grid[0][0] == grid[1][1] == grid[2][2]) {
    console.log(`winner is ${grid[0][0]}`)
    return grid[0][0];
  }
  // match other diagonal
  if (grid[0][2] == grid[1][1] == grid[2][0]) {
    console.log(`winner is ${grid[0][2]}`)
    return grid[0][2];
  }
  // no winner
  console.log("no winner")
  return null;
}

/*
const getWinner = (grid) => {
  console.log(grid);
  for (let i = 0; i < 3; i++) {
    // matchRow
    if (grid[i][0] == grid[i][1] == grid[i][2]) {
      if (grid[i][0] != null) {
        console.log(`winner is ${grid[i][0]}`)
        return grid[i][0];
      }
    }
    // matchCol
    if (grid[0][i] == grid[1][i] == grid[2][i]) {
      if (grid[0][i] != null) {
        console.log(`winner is ${grid[0][i]}`)
        return grid[0][i];
      }
    }
  }

  if (grid[1][1] != null) {
    // match diagonal
    if (grid[0][0] == grid[1][1] == grid[2][2]) {
      console.log(`winner is ${grid[0][0]}`)
      return grid[0][0];
    }
    // match other diagonal
    if (grid[0][2] == grid[1][1] == grid[2][0]) {
      console.log(`winner is ${grid[0][2]}`)
      return grid[0][2];
    }
  }

  // no winner
  console.log("no winner")
  return null;
}
*/

const App = () => {
  const [state, setState] = useState({
    gridModel: [[null, null, null], [null, null, null], [null, null, null]],
    currPlayer: 1, // 1 or 0
    winner: null, // 1, 0, or null
    full: false, // true, false
  })

  const { gridModel, currPlayer, winner, full } = state

  const isFull = (grid) => {
    grid.forEach(row => {
      row.forEach(val => {
        if (val == null) {
          return false;
        }
      })
    })
    return true;
  }

  const clicked = x => {
    let [row, col, ...others] = x.split(" ")
    row = row[4] // row-?
    col = col[4] // col-?
    let gridModelCopy = [[...gridModel[0]], [...gridModel[1]], [...gridModel[2]]];
    gridModelCopy[row][col] = currPlayer;
    // alert(row + " " + col) // debugging statement
    setState({
      gridModel: gridModelCopy,
      currPlayer: 1 - currPlayer,
      winner: getWinner(gridModelCopy),
      full: isFull(gridModelCopy)
    })
  }

  const handler = x => clicked(x); 

  // if full -> announce draw and ask to reset
  // if winner -> announce winner and ask to reset

  return (
    <div className="App">
      <Grid gridModel={gridModel} notifyApp={handler} />
    </div>
  )
  

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
