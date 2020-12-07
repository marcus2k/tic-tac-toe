import './assets/css/Cell.css';
import x from './assets/img/x.png';
import o from './assets/img/o.png';

const Cell = (props) => {
    const { classes, content, notifyGrid } = props;
    const handler = () => notifyGrid(classes);

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