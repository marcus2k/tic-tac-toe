import './assets/css/Cell.css';
import x from './assets/img/x.png';
import o from './assets/img/o.png';

const Cell = (props) => {
    const { classes, content, notifyGrid } = props;
    const hasContent = content != null;
    const clickHandler = () => hasContent ? void(0) : notifyGrid(classes);
    
    return(
        <td className={classes} onClick={clickHandler}>
            {hasContent && 
                <img src={content ? x : o} alt="symbol"></img>
            }
        </td>
    );
}

export default Cell;