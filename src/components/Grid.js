import React from 'react';
import './assets/css/Grid.css';
import Row from './Row';

const indices = [0, 1, 2];

const Grid = (props) => {
    const { gridModel, clickHandler, isFinished } = props;
    const tableClass = isFinished ? "finished" : "";

    return (
        <>
            <table className={tableClass}>
                <tbody>
                    {indices.map(i => (
                            <Row  
                                key={i} 
                                rowNumber={i} 
                                rowModel={gridModel[i]} 
                                clickHandler={clickHandler} 
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};

export default Grid;