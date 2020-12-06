import { useState } from 'react';
import logo from './logo.svg';
import Cell from './Cell.js';
import Grid from './TTTGrid.js';
import './TTTGrid.css';
import './Cell.css';
import './App.css';

const App = () => {

  /*  // states
  const players = {0: 'O', 1: 'null'}

  // define updateTurn, updateCell, updateGame ? check guide

  const [currPlayer, updateTurn] = useState(0) // who is the current player?
  const [content, updateCell] = useState([[null, null, null], [null, null, null], [null, null, null]])
  const [winner, updateGame] = useState(null) // is there a winner?
  const [full, isFull] = useState(false) // is grid full?
  */

  return (
    <div className="App">
      <Grid />
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
