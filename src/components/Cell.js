import React from 'react';
import './assets/css/Cell.css';
import x from './assets/img/x.png';
import o from './assets/img/o.png';

const Cell = (props) => {
    const { classes, content, clickHandler } = props;
    const hasContent = content != null;
    // const clickHandler = hasContent ? void(0) : notifyGrid;
    
    return(
        <td className={classes} onClick={hasContent ? void(0) : clickHandler}>
            {hasContent && 
                <img src={content ? x : o} alt="symbol"></img>
            }
        </td>
    );
}

export default Cell;