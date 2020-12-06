import './TTTGrid.css';
import Cell from './Cell.js';

const TTTGrid = () => {
    console.log("Grid loaded")
    return (
    <>
        <h1>
            Tic-Tac-Toe
        </h1>
        <h2>
            by <a href="https://github.com/marcus2k">Marcus</a>
        </h2>
        <br />
        <br />
        <table>
            <tbody>
                <tr className="row-0">
                    <Cell classes="col-0"/>
                    <Cell classes="col-1 vert"/>
                    <Cell classes="col-2"/>
                </tr>
                <tr className="row-1">
                    <Cell classes="col-0 hori"/>
                    <Cell classes="col-1 vert hori"/>
                    <Cell classes="col-2 hori"/>
                </tr>
                <tr className="row-2">
                    <Cell classes="col-0"/>
                    <Cell classes="col-1 vert"/>
                    <Cell classes="col-2"/>
                </tr>
            </tbody>
        </table>
    </>
)}

export default TTTGrid;