import React from 'react';
import Cell from './Cell';

const indices = [0, 1, 2];

const getClasses = (i, j) => {
    const vertical = j===1 ? "vert" : "";
    const horizontal = i===1 ? "hori" : "";
    return `row-${i} col-${j} ${vertical} ${horizontal}`;
}

const Row = (props) => {
    const { rowNumber, clickHandler, rowModel } = props;
    return(
        <tr>
            {indices.map(j => (
                    <Cell 
                        key={j}
                        classes={getClasses(rowNumber, j)} 
                        content={rowModel[j]} 
                        clickHandler={clickHandler} 
                    />
                ))
            }
        </tr>
    );
}

export default Row;