import './TTTGrid.css';
import Cell from './Cell.js';

const TTTGrid = (props) => {
    const { gridModel, notifyApp, finishMessage } = props;
    const handler = x => notifyApp(x);
    const tableClass = props.hasOwnProperty(finishMessage) ? "finished" : "";

    console.log("TTTGrid component loaded");

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
            <table className={tableClass}>
                <tbody>
                    <tr className="row-0">
                        <Cell classes="row-0 col-0" content={gridModel[0][0]} notifyGrid={handler} />
                        <Cell classes="row-0 col-1 vert" content={gridModel[0][1]} notifyGrid={handler} />
                        <Cell classes="row-0 col-2" content={gridModel[0][2]} notifyGrid={handler} />
                    </tr>
                    <tr className="row-1">
                        <Cell classes="row-1 col-0 hori" content={gridModel[1][0]} notifyGrid={handler} />
                        <Cell classes="row-1 col-1 vert hori" content={gridModel[1][1]} notifyGrid={handler} />
                        <Cell classes="row-1 col-2 hori" content={gridModel[1][2]} notifyGrid={handler} />
                    </tr>
                    <tr className="row-2">
                        <Cell classes="row-2 col-0" content={gridModel[2][0]} notifyGrid={handler} />
                        <Cell classes="row-2 col-1 vert" content={gridModel[2][1]} notifyGrid={handler} />
                        <Cell classes="row-2 col-2" content={gridModel[2][2]} notifyGrid={handler} />
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default TTTGrid;