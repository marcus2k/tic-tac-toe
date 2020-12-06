import './Cell.css';
import x from './x.png';
import o from './o.png';

const Cell = (props) => {
    const { classes, content, notifyGrid } = props;
    const handler = () => notifyGrid(classes);

    /* // debugging statements
    console.log(content);
    console.log(props.hasOwnProperty("content") ? "Cell is filled" : "Cell is empty")
    */

    console.log("Cell component loaded");

    if (props.content != null) {
        const symbol = <img src={content == 0 ? o : x} alt="cross"></img>;
        return(
            <td className={classes}>
                {symbol}
            </td>
        );
    }

    return(
        <td className={classes} onClick={handler}></td>
    );
}

export default Cell;